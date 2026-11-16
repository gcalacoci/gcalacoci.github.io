---
title: "Deterministic checks around non-deterministic agents"
date: 2026-11-16T02:30:00+01:00
description: "How I keep agents useful on real work: fixed tasks, checks the model can't grade itself, error classes, replay benches, a hook that says no, and a council of sessions."
categories: [ai, engineering]
tags: [ai, agents, claude-code, automation, postgres]
---

A model can write good code and then write bad code from the same prompt. I run agents on real work every day, so I can't rely on the model behaving. My approach is to leave the model free to vary and make everything around it fixed: the task, the checks, the routing, the logs and who approves what. This note describes how that works in my own agent systems.

## The loop

I wrote a small dispatcher that hands coding work to cheaper or free models. Cost was the reason: a stronger model plans, the cheaper ones do the typing.

```
spec + red test (written by me and my session)
        |
   route: pick a model from the chain
        |
   job runs in a sandbox
        |
   checks re-run by the dispatcher, not by the model
        |
   reviewing model reads the result
        |
   decision needs me? -> wait for my approval
        |
   row logged: route, cost, result
```

The model never grades itself. The dispatcher re-runs the checks on every job, and a reviewing model reads the diff afterwards. Every job leaves a row with its route, rounds, cost and result. In late October that log held 57 jobs on one free route with an 83% pass rate, and I choose routes from those numbers rather than from reputation.

## Error classes

A failed run is not just "failed". Each one gets a class: rate limited, transient, timeout, checks failed, or scope violation. The class decides what happens next. Rate limits and transient errors move on to the next model in the route's chain. A run that finished but failed its checks, or touched a path outside its allowed scope, skips the rest of the chain and escalates. The limit and transient classes come from plain pattern lists (for example "429", "rate limit", "502 bad gateway"), so the decision is deterministic and easy to test.

## Corrections become checks

Whenever I correct agent output, the correction is not finished until it is a rule. In my writing pipeline, each edit I make to a draft becomes a lint rule or a fact-gate rule, so the same error is caught automatically next time. The fact gate checks claims in a draft against the source documents they came from. I say "claims are checked", not "every claim": it is a gate with known limits.

## Replay benches

To see whether an agent setup is any good, I replay real past features. A bench takes the original spec and the original failing test, gives the agent forbidden paths it must not touch, and scores the result against the reference build. My first run was three features, twice each. It is a small bench and I treat it as one. It is not an evaluation framework, but it measures real work against a known answer.

## A hook that says no

Some limits should not depend on the agent's judgement at all. A pre-tool hook sits in front of every command and blocks reads of secret files and credentials, git pushes and destructive commands. It has its own tests, and every block goes to an audit log, so I can see what an agent tried as well as what it did.

## When one agent is not enough: a council

The same idea applies to decisions. Some jobs are too big for one session, so I built session-council ([github.com/gcalacoci/session-council](https://github.com/gcalacoci/session-council), MIT). It is rules and a judge skill for long-running Claude Code sessions that review each other's work and agree on a plan. Involving two sessions in restructuring my CV gave me a broader perspective and a clearer path on what to do. The reviewers vary, so the rules around them stay fixed. Only I can call a council. It runs one round by default, and a second only for a fact-backed objection. Each reviewer must open at least one cited source itself and say whether it matches. Every reason carries a fact or guess label, and a checked fact outweighs a majority.

## What stays human

Bigger decisions wait for me. Votes only recommend: I approve every decision.

## In a product: governance for agents in EDB AIDB

Before this was a personal system, it was my work. In EDB AIDB, which brings agents and an MCP endpoint into Postgres, I worked on the first layer of agent governance. We were building it on what Postgres already enforces: roles, grants and row-level security, with OAuth in front. The MCP piece was pg-airman-mcp ([github.com/EnterpriseDB/pg-airman-mcp](https://github.com/EnterpriseDB/pg-airman-mcp)). There I added the missing view: session tracing and purpose logging. With them I could follow every query from the agent through MCP to the database and tie it to the purpose the agent declared. In a workflow built on it, a query outside that purpose failed in the database, whatever the agent tried. The limit lives where the model cannot talk its way past it.

---
title: "Letting my Claude Code sessions argue, then letting me decide"
date: 2026-11-08T18:00:00+01:00
description: "I run several long-lived Claude Code sessions on one project. session-council is the set of rules they use to review each other's changes: weighted reasons, a fact beats a head count, and I approve."
categories: [ai, open-source]
tags: [claude-code, ai, open-source, session-council]
---

I run several Claude Code sessions on the same project, each one with its own area: one
looks after the infrastructure, one after a nightly data pipeline, others after other
parts of my work. They share one git working tree and can message each other.

For a while, my own rules of thumb were enough: "a question is not a go", "never touch
another session's uncommitted work". Then the sessions started proposing changes to
code that runs every night, and I wanted a second pair of eyes on each one before it
reached me.

I also noticed how much of my time went into telling one session to go and ask another
for information, because each had a different context. The sessions then talked to each
other with no structure and no rules. I needed rules in place.

I looked at existing projects first: GitHub, skills.sh and the awesome-claude-code list,
about a dozen candidates. The closest ones ran several reviewers inside one session, or
across several model providers. The nearest in shape was ECC's santa-method: two
independent reviewers, at most three rounds, then a human. I found nothing that combined
all of it: separate, long-running sessions, a written decision rule, and human approval
that peers can't grant. The nearest write-ups cover parts of it:
[an election-forecast launch](https://dev.to/mt26/running-an-election-forecasts-launch-as-separate-claude-code-sessions-rules-mistakes-and-a-real-62h)
ran owned sessions with a human approvals log.
[An analysis of messages between sessions](https://hyperdev.matsuoka.com/p/when-sessions-talk)
argued that a peer's claim is evidence of belief, not proof.

On 7 November I asked them to agree on how they review each other. The result is
[session-council](https://github.com/gcalacoci/session-council): rules plus a judge skill,
no code, MIT licensed, and marked experimental.

## The case that sold me

The first thread was about the rules themselves. One of them needs to tell whether a message really came from me. When a session relays "the user
approved this", the receiver checks my own transcript instead of trusting the relay.

In round 1, the pipeline session proposed a filter for "messages the user typed": records
with no origin field. Before anyone objected, it checked a newer transcript, found my
messages marked with an origin, and said its own fact was wrong. In round 2, the
infrastructure session's fix applied the no-origin rule only to files with no origin
anywhere. The pipeline session's transcript mixes both formats, so that fix would have
rejected every message I typed there. The pipeline session objected with the counts, and
the filter became a check per record.

One self-correction, one catch, and I approved the result. Either draft would have shipped
an approval check that was wrong one way or the other. The same rule also keeps out over a
thousand records with no origin that are tool results, not my messages.

## Three ideas you can take without the rest

**Reasons carry weights.** Every position is labelled: a fact (with its source), a guess
(with the gap it leaves open), or no basis. A fact outweighs a guess, and a guess with no
stated gap carries almost nothing.

**A fact beats a head count.** All my sessions run the same model family, so three votes
in agreement are weaker evidence than they look. A vote only settles what facts can't, and
a single checked fact can overturn it.

**I stay in one chat, and nobody approves for me.** A session can relay my decision to
another session, but the receiver must find my words in my transcript itself before it
acts. A peer message is information, never permission.

## What it has done so far

Four cases between 7 and 8 November, from the decision log. I decided all four. The judge
has never been needed. The vote was used once, on a side question in the first case, and I
still decided. Positions changed in all four cases; in three, because a session brought a
fact.

Reviews also catch smaller things. One stopped a night job from committing other sessions'
staged work. It now commits only its own file. Its first run added ten entries and nothing
else.

## This post went through it too

I asked the same sessions to review this post. They caught two errors in the first draft.
The opening case had the roles the wrong way round, because the draft followed a summary.
The session that had brought the filter checked its own messages and corrected it.
And a reviewer's summary said the vote had never been used; another showed the commit where
it was. Three reviewers also flagged one sentence as saying more about my private work than
I might want, and left it to me. I took the fixes and decided the sentence myself.

## The limits

Four cases aren't much data. The judge is insurance so far.

Every session is Claude, so agreement is cheap. "A fact beats a head count" is the
counterweight, but I can't yet show that it catches more than one careful session would.

The "typed by the user" check reads Claude Code's transcript fields, which are undocumented
and vary between versions. It's a heuristic over a format I don't control, not a security boundary.

Each review round re-reads the reviewer's context, so a long-running reviewer is expensive.
That's why the rules have review tiers: most changes need one reviewer or none. I don't
have a cost per case yet; measuring it is the next thing I'd add.

The method also adds lag. Urgent fixes go first and get reviewed the same day.

## If you want to try it

The README has the installation steps: one rule file every session loads, the judge skill, and
two shared files for open threads and decisions. The design notes credit the work it
borrows from, including ECC's council skills, obra/superpowers and warpdotdev's council.

It's version 0.1.0 and the rules will change. If you run more than one Claude Code session
on a project, I'd like to hear what breaks.

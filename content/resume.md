---
title: Resume
description: "Giulio Calacoci, Principal Software Engineer: experience, open source, talks and skills."
---

[Download the PDF](/cv/giulio-calacoci-cv.pdf) · last updated October 2026

**Principal Software Engineer · Tech Lead · AI Agent Infrastructure, PostgreSQL, Platform Engineering**

Florence, Italy · Open to remote (EU) · asdmaster@gmail.com  
[linkedin.com/in/gcalacoci](https://www.linkedin.com/in/gcalacoci) · [github.com/gcalacoci](https://github.com/gcalacoci) · [gcalacoci.com](https://gcalacoci.com)

*20 years in software, 15 in PostgreSQL · AI agent infrastructure since 2025 · built the CI/CD platform every EDB product ships through · Barman tech lead, team of up to 6*

---

## Summary

Principal engineer, 20 years in software, 15 in PostgreSQL. Twice I built the
continuous delivery platform every product shipped through: at 2ndQuadrant, then
Foundation at EDB. I led Barman, PostgreSQL's open-source backup manager, with up to six engineers. Since 2024 I
have built proofs of concept for the VP: a PostgreSQL optimizer, then AI agents from 2025,
which led to pg-airman-mcp and EDB's AI team. Looking for a tech lead, principal or
engineering manager role.

---

## Experience

### EDB (EnterpriseDB) · Principal DevOps Architect → Principal Software Engineer
*Sep 2020 – Aug 2026 · Florence, Italy (remote)*

Joined through EDB's acquisition of 2ndQuadrant.

**AI and agent infrastructure (Mar 2025 – Aug 2026)**

- From March 2025, alongside the Barman lead: R&D and proofs of concept with the VP of the
  unit on AI agents and PostgreSQL. One of them became pg-airman-mcp, EDB's fork of the
  abandoned postgres-mcp project; I led it to 1.0 and production (see Open Source).
- AI team (Mar 2026 – Aug 2026): recruited into the team on the strength of pg-airman-mcp;
  part of the group that reviewed architecture decisions with VPs and SVPs.
- Co-designed the MCP connections of EDB AIDB; part of the team behind AIDB 7.7, which
  added an MCP endpoint and in-database agents to Postgres for EDB's enterprise customers.
- Designed session tracing and purpose logging, an audit trail linking each query to the
  agent session and its declared purpose; worked on agent governance with Postgres roles,
  grants and row-level security. Built Python components for EDB's internal Langflow fork.

**Tech lead: Barman and the PostgreSQL optimization project (2023 – Mar 2026)**

- Led the technical direction of [Barman](https://github.com/EnterpriseDB/barman), the
  open-source backup and recovery manager for PostgreSQL (3,200+ GitHub stars), in Python:
  WAL archiving and streaming, base backups and point-in-time recovery, with backups to
  local disk or cloud storage (S3, Azure Blob, Google Cloud Storage). Team of up to six
  engineers; design docs (RFCs) and PR reviews; shipped about 23 releases (3.4 to 3.18),
  making the go/no-go call with the director.
- Built reliability into the product: integration with PostgreSQL failover, tested on
  Kubernetes clusters that simulate failovers and switchovers; incremental and resumable
  backups; designed and led immutable (WORM) backup storage support.
- Second-level (expert) support engineer for backup and recovery on customer
  installations, several with databases above 10 TB; post-mortems were routine.
- PostgreSQL optimization project (2024 – Mar 2026): began as a proof of concept I built
  for the VP of the unit; after a presentation to executive leadership it became a
  project, which I led, mentoring a junior developer. It runs in the control plane of
  EDB's internal multi-tenant managed Postgres service (DBaaS) on Kubernetes, deployed
  through Helm and Terraform.
- Designed the technical interview my teams used for hiring. Hired three engineers into
  the Barman team and mentored them; they now write most of Barman's code.
- First adopter of GitHub Copilot in the Barman team, on EDB's enterprise GitHub; presented
  the setup to the team.

**Principal DevOps Architect: Foundation, continuous delivery (2020 – 2023)**

- Lead architect and creator of **Foundation**, EDB's GitHub-based framework to build, test, sign and publish
  every EDB product: 7 OS families and 4 CPU architectures, on GitHub Actions, AWS and
  Cloudsmith. Took it from zero to adoption by every product team; release preparation
  went from days to about a day.
- One of the owners of Foundation's AWS account; managed its infrastructure as code with
  Terraform and Helm, including the AWS Lambda functions that checked and distributed
  packages. Release controls: review and signing before publishing, penetration-tested.
- Technical lead of the team that merged EDB's and 2ndQuadrant's CI/CD
  infrastructures, working with the SVP on infrastructure decisions.
- Two direct reports (2020–2023).

### 2ndQuadrant · Continuous Delivery Manager
*Sep 2016 – Sep 2020 · Prato, Italy*

- Designed, built and ran the company's continuous delivery platform: a Jenkins framework
  that standardised builds for every product on every supported Linux distribution, with
  automated package signing and publishing. Release time went from days to hours.

### 2ndQuadrant · Python Developer and PostgreSQL Consultant
*Aug 2011 – Sep 2020 · Prato, Italy*

- Barman developer from 2013, for a time the project's only developer and its top
  contributor.
- PostgreSQL support engineer (L1 and L2) on the on-call rotation, weekend shifts
  included: ran customer calls during outages or joined them as the expert.
- Disaster recovery and high availability consultant: crisis support, consultancy,
  training, and high-performance database design.

### Earlier
- **Devise.IT s.r.l.**, Software Analyst (2009–2011): web applications in Java, PHP and
  JavaScript. **grafica-web**, Chief Web Application Developer (2008–2009): led a small team.

---

## Open Source

- **[Barman](https://github.com/EnterpriseDB/barman)**: developer since 2013 (226
  commits), tech lead 2023–2026.
- **[pg-airman-mcp](https://github.com/EnterpriseDB/pg-airman-mcp)**: MCP server that
  gives AI agents governed access to PostgreSQL. Led EDB's fork to 1.0 and beyond (77 of 90
  commits since the fork; built with AI-assisted development): OAuth 2.0, session tracing and purpose logging, hardened
  containers, five releases. Featured in a [Red Hat Developer series](https://developers.redhat.com/articles/2026/06/09/integrate-openshift-ai-and-pg-airman-mcp-server)
  on OpenShift AI, co-authored by EDB's AI lead.

---

## Independent Projects (2026)

- **Agent orchestrator:** Claude plans and leads cheaper and free models in a sandbox;
  coding tasks start from a failing test, the checks re-run and I review the result. Data
  classes decide which models may see which data; routes come from logged pass rates, and
  replay benches re-run real past features against the reference build.
- **Guardrails:** a pre-tool hook blocks secret reads, pushes and destructive commands,
  with tests and an audit log; a fact gate checks drafted claims against source documents.
- **Autonomous data pipelines:** nightly agent pipelines collect web data from about 140
  sources (up to about 18,000 items a night), back off on rate limits, detect bot walls,
  and have agents triage the results.
- **[session-council](https://github.com/gcalacoci/session-council)** (open source, MIT):
  rules and a judge skill for long-running Claude Code sessions that review each other's
  work. Blind first rounds, reasons labelled fact or guess, a checked fact outweighs a
  majority, and votes only recommend: I approve every decision. Used to restructure this CV.

## Writing and Talks

- **Blog** at [gcalacoci.com](https://gcalacoci.com/posts/), cross-posted on dev.to: the
  series *Searching for a job in the AI era*, written while the search runs, and
  [a post on Claude Code sessions reviewing each other](https://gcalacoci.com/posts/letting-my-claude-code-sessions-argue/).
- **Talks** ([details and slides](https://gcalacoci.com/talks/)):
    - *Barman, past, present, and future of a pioneer community project*, PGConf.EU 2025, Riga
    - *From 0 to 100: Business continuity with PostgreSQL*, and a two-part workshop on backup
      and disaster recovery of PostgreSQL, DataOps Barcelona 2019
    - *PostgreSQL and Python, a match made in heaven*, EuroPython 2017
    - *Step up and face the disaster*, Dalibo PG Session #8, 2016
    - In Italian: PyCon Italia 2015 to 2018, PgDay.IT 2017, 5432...MeetUs! 2016

---

## Skills

- **PostgreSQL:** high availability, replication, failover, backup and point-in-time
  recovery, disaster recovery, performance tuning, roles, grants and RLS
- **Platform:** Kubernetes (hands-on; working towards the CKA), Terraform, Helm, GitHub
  Actions, Jenkins, CI/CD and release automation, Docker, Linux; AWS (EC2, S3, IAM, VPC,
  ECR, RDS, Lambda, CloudWatch, App Runner; wide hands-on use); monitoring with Nagios,
  Zabbix, Grafana, some Prometheus
- **AI engineering:** LLM agents in production, MCP servers and tool access, agent access
  control (OAuth 2.0, Postgres roles, grants and RLS), session tracing and purpose logging,
  Langflow; multi-agent orchestration, evals and replay benches, guardrails with human
  review, spec-driven development and TDD with agents; daily agentic work with Claude Code
  (skills, memory, subagents)
- **Languages:** Python (senior), SQL, Go (working knowledge)
- **Ways of working:** end-to-end ownership; starting from no clear spec and shaping it
  (2ndQuadrant's CD platform, proofs of concept for the VP); design and decision documents;
  regular discussions with product managers and other principal engineers on their
  projects; customer feedback loops; open-source maintainership; hiring and mentoring;
  remote and asynchronous teams, documentation for everything

## Education and Languages

- Computer Science, Università degli Studi di Firenze, 2002–2008 · left to work as a developer
- **Italian** (native) · **English** (full professional proficiency)

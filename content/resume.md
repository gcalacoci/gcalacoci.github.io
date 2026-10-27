---
title: Resume
description: "Giulio Calacoci, Principal Software Engineer: experience, open source, talks and skills."
---

[Download the PDF](/cv/giulio-calacoci-cv.pdf) · last updated October 2026

**Principal Software Engineer · Tech Lead · PostgreSQL, Platform Engineering, AI Agent Infrastructure**

Florence, Italy · Open to remote (EU) · asdmaster@gmail.com  
[linkedin.com/in/gcalacoci](https://www.linkedin.com/in/gcalacoci) · [github.com/gcalacoci](https://github.com/gcalacoci) · [gcalacoci.github.io](https://gcalacoci.github.io)

*20 years in software, 15 in PostgreSQL · built the CI/CD platform every EDB product ships through · Barman tech lead, team of up to 6*

---

## Summary

Principal engineer with 20 years in software, 15 in the PostgreSQL ecosystem. Twice I
built and ran the continuous delivery platform every product shipped through: at
2ndQuadrant, then Foundation at EDB. I led Barman, PostgreSQL's open-source backup manager,
with up to six engineers, and in EDB's AI team I worked on the layer between AI agents and
the database (MCP, OAuth 2.0, session tracing). Looking for a tech lead, staff or principal
role in a team that builds together.

---

## Experience

### EDB (EnterpriseDB) · Principal Software Engineer
*Sep 2020 – Aug 2026 · Florence, Italy (remote) · title formerly Principal DevOps Architect*

Joined through EDB's acquisition of 2ndQuadrant.

**AI team (Mar 2026 – Aug 2026)**

- Recruited into the AI team on the strength of pg-airman-mcp, which started from proofs
  of concept with the VP of the unit; part of the group that reviewed architecture
  decisions with VPs and SVPs.
- Co-designed the MCP connections of EDB AIDB; part of the team behind AIDB 7.7, which
  added an MCP endpoint and in-database agents to Postgres for EDB's enterprise customers.
- Designed session tracing and purpose logging, an audit trail linking each query to the
  agent session and its declared purpose; worked on agent governance with Postgres roles,
  grants and row-level security. Built Python components for EDB's internal Langflow fork.

**Barman tech lead (2023 – Mar 2026)**

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
- From 2024, ran the PostgreSQL optimization project in the control plane of EDB's
  internal multi-tenant managed Postgres service (DBaaS) on Kubernetes, deployed through
  Helm and Terraform; led and mentored a junior developer.
- Designed EDB's technical interview for engineering hires. Hired three engineers into
  the Barman team and mentored them; they now write most of Barman's code.
- First adopter of GitHub Copilot in the Barman team, on EDB's enterprise GitHub; presented
  the setup to the team.

**Continuous delivery: Foundation (2020 – 2023)**

- Created **Foundation**, EDB's GitHub-based framework to build, test, sign and publish
  every EDB product: 7 OS families and 4 CPU architectures, on GitHub Actions, AWS and
  Cloudsmith. Took it from zero to adoption by every product team; release preparation
  went from days to about a day.
- One of the owners of Foundation's AWS account; managed its infrastructure as code with
  Terraform and Helm, including the AWS Lambda functions that checked and distributed
  packages. Release controls: review and signing before publishing, penetration-tested.
- Technical lead of the team that merged EDB's and 2ndQuadrant's CI/CD
  infrastructures, working with the SVP on infrastructure decisions; initially two direct
  reports.

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

## Open Source and Talks

- **[Barman](https://github.com/EnterpriseDB/barman)**: developer since 2013, tech lead
  2023–2026, 226 commits.
- **[pg-airman-mcp](https://github.com/EnterpriseDB/pg-airman-mcp)**: MCP server that
  gives AI agents governed access to PostgreSQL. Led EDB's fork to 1.0 and beyond (77 of 90
  commits since the fork): OAuth 2.0, session tracing and purpose logging, hardened
  containers, five releases. Featured in a [Red Hat Developer series](https://developers.redhat.com/articles/2026/06/09/integrate-openshift-ai-and-pg-airman-mcp-server)
  on OpenShift AI, co-authored by EDB's Torsten Steinbach.
- Talks at PGConf.EU 2025, DataOps Barcelona 2019 and EuroPython 2017
  ([full list](https://gcalacoci.github.io/talks/)).

---

## Skills

- **PostgreSQL:** high availability, replication, failover, backup and point-in-time
  recovery, disaster recovery, performance tuning, roles, grants and RLS
- **Platform:** Kubernetes (hands-on; working towards the CKA), Terraform, Helm, GitHub
  Actions, Jenkins, CI/CD and release automation, Docker, Linux; AWS (EC2, S3, IAM, VPC,
  ECR, RDS, Lambda, CloudWatch, App Runner; wide hands-on use); monitoring with Nagios,
  Zabbix, Grafana, some Prometheus
- **AI:** MCP, agent access control and observability, Langflow; daily agentic work with
  Claude Code (skills, memory, subagents)
- **Languages:** Python (senior), SQL, Go (working knowledge)
- **Ways of working:** design docs and reviews, open-source maintainership, hiring and
  mentoring, remote and asynchronous teams

## Education and Languages

- Computer Science, Università degli Studi di Firenze, 2002–2008 · left to work as a developer
- **Italian** (native) · **English** (full professional proficiency)

---
title: Resume
description: "Giulio Calacoci, Principal Software Engineer: experience, open source, talks and skills."
---

[Download the PDF](/cv/giulio-calacoci-cv.pdf) · last updated October 2026

**Principal Software Engineer · Tech Lead · Platform Engineering, Software Delivery, PostgreSQL**

Florence, Italy · Open to remote (EU / US) · asdmaster@gmail.com  
[linkedin.com/in/gcalacoci](https://www.linkedin.com/in/gcalacoci) · [github.com/gcalacoci](https://github.com/gcalacoci) · [gcalacoci.github.io](https://gcalacoci.github.io)

---

## Summary

Principal software engineer with 20 years of experience, 15 of them in the PostgreSQL
ecosystem. At EDB I led the Barman team, hiring and mentoring the engineers who now write
most of the project, and I created Foundation, the delivery framework that builds and
ships every EDB product. My last role was in EDB's AI team, where I worked on MCP
connectivity for AIDB, starting from pg-airman-mcp, an open-source MCP server I took from
fork to 1.0. I'm looking for a tech lead or principal role in a team that designs and
builds together.

---

## Experience

### EDB (EnterpriseDB) · Principal Software Engineer
*Sep 2020 – Aug 2026 · Florence, Italy (remote) · title formerly Principal DevOps Architect*

Joined through EDB's acquisition of 2ndQuadrant.

**AI team (Mar 2026 – Aug 2026)**

- Recruited into the AI team as a senior engineer on the strength of pg-airman-mcp.
- Co-designed the internal MCP connections of EDB AIDB, first through pg-airman-mcp and
  then in internal Rust components. Part of the engineering team behind AIDB 7.7, which
  added an MCP endpoint and in-database agents to Postgres.
- Designed an observability layer for the AI platform and contributed to early work on
  agent governance.

**Barman tech lead (2023 – Mar 2026)**

- Led the technical direction of [Barman](https://github.com/EnterpriseDB/barman), the
  open-source backup and recovery manager for PostgreSQL (3,200+ GitHub stars), with a
  team of up to six engineers through shared planning, design sessions and peer code
  review. Approved changes and shipped about 23 releases (3.4 to 3.18).
- Designed EDB's technical interview for engineering hires and sat on interview panels
  across several hiring rounds. Hired three engineers into the Barman team, then
  onboarded and mentored them; they now write most of Barman's code.
- From 2024, ran an internal PostgreSQL optimization project for EDB's cloud platform and
  built proofs of concept requested by the department's VP, alongside Barman.
- Second-level (expert) support engineer for Barman, handling escalations from EDB's
  support team.
- Advised the Barman team after moving to the AI team, until Aug 2026.

**Software delivery (2020 – 2023)**

- Technical lead of the team that merged EDB's and 2ndQuadrant's delivery
  infrastructure after the acquisition, with two direct reports.
- Created **Foundation**, EDB's GitHub-based framework to build, test and publish every
  EDB product to internal and customer-facing repositories: 7 OS families (RHEL, CentOS,
  Debian, Ubuntu, SLES, Windows, macOS) and 4 CPU architectures (x86_64, aarch64,
  ppc64le, s390x), on GitHub Actions, AWS and Cloudsmith.
- Replaced a complex pipeline that could not absorb the 2ndQuadrant products with a
  simpler design built into GitHub, cutting release preparation from days to about a day.
- Migrated the 2ndQuadrant products to EDB's infrastructure and worked with each product
  team to adopt Foundation.

### 2ndQuadrant · Continuous Delivery Manager
*Sep 2016 – Sep 2020 · Prato, Italy*

- Designed, built and ran the company's continuous delivery platform as its tech lead,
  reporting to product management: a Jenkins framework that standardised builds for
  every product on every supported distribution, with automated package signing and
  publishing.
- Cut release time from days to hours. All development teams adopted it, most of them
  new to CI/CD.
- Taught Python (foundations, object-oriented programming, design patterns) in a training
  course whose final internship brought a new engineer into 2ndQuadrant; mentored her
  and led her work on the platform; she later became a direct report at EDB.

### 2ndQuadrant · Python Developer and PostgreSQL Consultant
*Aug 2011 – Sep 2020 · Prato, Italy*

- Barman developer from 2013, for a time the project's only developer and its top
  contributor.
- PostgreSQL support engineer and disaster recovery consultant: customer support as the
  disaster recovery and Barman specialist (and general PostgreSQL support), consultancy,
  training, crisis support, and high-performance database design.
- Wrote a parser that translated Oracle PL/SQL to PostgreSQL PL/pgSQL, used to migrate
  customers from Oracle to PostgreSQL.
- Member of ItPUG (Italian PostgreSQL User Group) and organiser of PGDay.IT.

### Earlier
- **Devise.IT s.r.l.**, Software Analyst (2009–2011): web applications in Java (Spring,
  Hibernate), PHP and JavaScript for e-commerce, automotive and finance clients.
- **grafica-web**, Chief Web Application Developer (2008–2009): led a small team building
  the front end of the company's main application.
- **Basis**, Help Desk Technician (2002–2003) at Nuovo Pignone (GE).

---

## Open Source

- **[pg-airman-mcp](https://github.com/EnterpriseDB/pg-airman-mcp)**: MCP server that
  gives AI agents governed access to PostgreSQL (Python). Took over EDB's fork of an
  abandoned project and led it to 1.0, writing 77 of the 90 commits since the fork:
  streamable HTTP transport, OAuth 2.0 (token introspection and JWT), DNS rebinding
  protection, hardened containers, purpose logging and session tracing.
- **[Barman](https://github.com/EnterpriseDB/barman)**: developer since 2013, tech lead
  2023–2026, 226 commits.

## Selected Talks

All recorded; full list at [gcalacoci.github.io/talks](https://gcalacoci.github.io/talks/).

- *Barman, past, present, and future of a pioneer community project*, PGConf.EU 2025, Riga
- *From 0 to 100: Business continuity with PostgreSQL*, DataOps Barcelona 2019
- *Backup and Disaster Recovery of PostgreSQL databases* (workshop), DataOps Barcelona 2019
- *PostgreSQL and Python, a match made in heaven*, EuroPython 2017
- *Step up and face the disaster*, PostgreSQL Sessions #8, Lyon 2016
- Six talks in Italian at PyCon Italia (2015–2018), PgDay.IT and 5432…MeetUs!

---

## Skills

- **Leadership:** technical direction, design reviews, hiring (interview design and
  panels), onboarding and mentoring, cross-team adoption of shared tooling
- **Platform and delivery:** CI/CD architecture, GitHub Actions, Jenkins, Docker,
  multi-OS and multi-architecture packaging, Cloudsmith; AWS and Kubernetes (working
  knowledge, hands-on)
- **Languages:** Python (senior), Go (working knowledge), Rust (basics); earlier Java,
  PHP, JavaScript
- **Data:** PostgreSQL backup, disaster recovery, business continuity, performance
- **AI:** Model Context Protocol, agent tooling, OAuth 2.0 for agent access, tracing and
  governance

## Education and Languages

- Computer Science, Università degli Studi di Firenze, 2002–2008 · left to work as a developer
- Liceo Classico (Latin, Greek, philosophy, history)
- **Italian** (native) · **English** (professional working proficiency)

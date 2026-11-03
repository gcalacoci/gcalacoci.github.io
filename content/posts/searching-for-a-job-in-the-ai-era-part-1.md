---
title: "Searching for a job in the AI era, part 1: the setup and the first 16 days"
date: 2026-11-03T12:00:00+01:00
description: "I was laid off in August. This is how I turned the job search into a project with Claude Code: what runs at night, what I still do by hand, and the first numbers."
categories: [careers, ai]
tags: [job-search, ai, claude-code, second-brain, careers]
---

I was laid off in August. I didn’t start searching for a new job immediately; I took some
time for myself first: to decompress, handle the burnout that was affecting me, and
to start a few personal improvement plans, like studying for some certifications.
In the meantime, I kept an eye on LinkedIn, saving a few jobs here and there.
But without a real effort.

At the beginning of October, I accepted the quest “Find a new Job”.

I started the way everyone does, manually, on LinkedIn.
I dusted off the few job postings that I saved and started searching for more.
It took me very little to see that:

1. It was time-consuming.
2. I needed more job boards, not just one.
3. I needed to keep track of connections, messages, and who said what.
4. I needed to know what to do and when, with reminders.
5. I needed to refresh my CV and my website.

And a LOT of other “small” tasks. All of them clearly useful, all of them clearly
needed, and all of them, clearly, getting in the way between me and the one thing
that matters in a job search quest: sending out applications.

So I did what someone with my background is supposed to be good at:
I transformed the job search into a project.

The immediate benefit of this decision is that it also helped me stay sane.
Being jobless is terrible for someone who is used to working every day.
You feel like you miss a direction or a goal.
I have my ways of keeping my mind in check, but having a project I could
work on every day and a “final goal” really helped.

This is the first post of a series. I’ll write as the search goes on: each post covers
what changed in the setup since the previous one and how the numbers moved.

## Why AI

AI is the final automation. Period.
This is something I’ve always thought even before this whole AI hype.
It has an incredible power to turn ideas into actions.

I could have written the Python and bash scripts myself, set up the cron jobs, rebuilt the
website. What AI gave me is doing all of it in parallel. I work with several Claude Code
sessions, one per track (job search, infrastructure, etc.).
Sometimes, with Claude’s remote control help, I’ve been able to move things forward
while doing something else, like grocery shopping.

That last part may look a bit too much or maniacal. But it solved, at least for me,
the shower-thought problem: you have a great idea in the shower, and it’s gone the moment you
step out.

## The foundation: a second brain

This has been the Step Zero of my infrastructure.
To help me describe who I am to recruiters, the AI needs to know me. And it needs to know me
consistently, from one session to the next, no matter how many times I compact or clear its context.
I can’t spend time and tokens explaining who I am and what I do over and over again.

A “second brain” is a common tool/technique in the AI world. I needed one, and I wanted my own:
The ones I found did things that were not useful to me. I don’t care about a nice Markdown
browser like Obsidian, at least not now. I wanted my skills, my actions, and what works
for my workflow.

I had built something similar at my previous job. I lost it the moment I lost access to
the laptop, right after the layoff. This time it lives in my own git repository. My
second-brain kit is [public on GitHub](https://github.com/gcalacoci/second-brain-starter-kit),
but it’s there 99.9999% for me.

If a friend got laid off tomorrow and I could set up only one piece of my infrastructure for them,
it would be this one. Nothing else exists without it.

## What runs at night, and what I do in the morning

The next best thing I’ve set up is the nightly scan and the morning review system. It’s the part
that leads to real applications.

1. **03:30, no AI.** A small Python script reads the public job feeds of about 67
   companies (their Greenhouse, Lever, Ashby, Workday boards) and about 16 job boards
   (Himalayas, Arbeitnow, Jobicy, Hacker News “Who is hiring”, LinkedIn and Indeed through
   JobSpy). It keeps postings whose title and location fit what I’m looking for, and drops
   anything it has already seen. And I’m always out searching for new sources.
2. **Only if something is new, AI.** A headless Claude session on a smaller model scores
   each posting against my profile, writes a page per role in my applications register,
   a morning report and one Todoist task. It can’t send email, apply, or push anything.
3. **Morning, me.** I read the report and decide, role by role. This will become
   a skill in the near future.
4. **For each role I want, AI plus me.** A CV pipeline builds a tailored CV and cover
   letter, with an ATS keyword check. I read it, rewrite what needs rewriting, and apply
   by hand.

Why 03:30? Because of the plan limits, more on that below.

I didn’t build all of it from scratch. Reinventing the wheel is a stupid thing. Before
building each piece, I looked for prior art, both searching myself and with Claude,
and this is what I adopted:

- [career-ops](https://github.com/santifer/career-ops) runs alongside as one more source of job openings
- [JobSpy](https://github.com/speedyapply/JobSpy) reads LinkedIn and Indeed (and does it better than a self-written scraper script)
- [last30days](https://github.com/mvanhorn/last30days-skill) a skill that tells me what people said about a company recently on reddit and other sources;
- [ccusage](https://github.com/ccusage/ccusage) tracks token usage
- [qmd](https://github.com/tobi/qmd) to speed up searches in the brain.

## The numbers, 16 days in

The scanner downloads every open posting from its sources each night: about 5,400 on the
first night, about 15,000 now that I’ve added sources. Over 15 nights, that’s about 167,000
downloads. I did not read 167,000 job posts. Here is who
handles what:

| Step | Who | Count |
|---|---|---|
| Download every open posting, every night | script, no AI | ~15,000 a night |
| Keep new postings that fit title and location | script, no AI | 765 (0.5%) |
| Pre-filter and score | AI | 215 roles |
| Read, decide | me | 213 decisions |
| Apply | me | 16 applications |
| Answer from the company | them | 3, from 2 companies |
| First call | them | 1 |
| Offer | | 0 |

I have to admit that I was scared that remote work was dead or scarce.
News of people returning to the offices after years of remote work was worrying.
But from the number of job positions I see posted, I can say that
remote work is very much alive, at least in software. Could it be more alive? Absolutely. But it’s alive.

That said, not all remote positions are made equal and, in fact, my numbers report that
about 40% of the roles I dropped failed on location: “US only”, “UK only”, or hybrid in
cities that are not Florence or Prato.

My biggest surprise: 12 days from the first night scan to the first call. I think that’s
sheer luck. One call out of 16 applications proves nothing. But luck needs you to be there:
that role was on my list the night it was posted, I applied within two days, and the
reply was caught the next morning by the inbox check.

## What I don’t automate

As said already, reviews of job positions and applications are manual.
I want to apply personally, as I firmly believe that rapidly firing out applications automatically is
counter-productive in the end.
That takes time: reading the posting, fighting the AI, tailoring the CV and the cover letter.
It is an iterative process for every application.
But I prefer this to the setups where Claude sends a thousand applications, and you get
four calls and zero offers. That’s like fishing with dynamite: it doesn’t discriminate, it isn’t worth it,
and it possibly never goes well.

And even reviewing everything, there is my personal skill on this new adventure that is not
always up to par. In fact one of my biggest “oh sh*t” moments came exactly from this.
I realized (too late, to be honest) that some of the CVs and cover
letters I had sent admitted gaps nobody had asked about: a “new to me” here, a “working
knowledge, not yet strong” there. The AI was honest in the wrong place, and I was not skilled
enough to realize that a CV argues for you; gaps are for the interview, if they come up.
Shame on me… As a result of this, the pipeline now has a check that blocks
those phrases before anything reaches me, plus a set of hard-wired rules in the second brain
that stop me and the AI from self-sabotaging.

This is one more reason why you always do the important stuff by hand, and don’t just
outsource it to AI and go out.

## What it costs

I started on Claude Pro. Later I upgraded to Max, not for the job search but for side
projects, and I’ll go back to Pro soon. I already had the first call before the upgrade,
and I don’t think the results would have been different on Pro.

On Pro, you are slower at the beginning, while you set everything up, because you hit the
limits more often. I could say that I’m running my night scan at 03:30 because it is more likely
to catch job posts from the US that have been posted at the end of the day, and it would almost be a lie.
The cron runs at that time as I’m probably sleeping and Claude will have a fresh 5h window
to do its job without being limited by other things like me burning tokens for something else.

You don’t need a $100-a-month plan to do this. You need to:

- watch the limits, especially the weekly one;
- not use the top model for routine work;
- be aggressive about saving tokens: small models for helpers, read a file once, read
  only the lines you need.

The real waste of tokens was learning how to do things efficiently, and I’m still learning.

## If you’re an engineer starting a search today

Be calm. Being caught in a layoff wave is sadly normal right now.
It is terrible. It was terrible for me at least, especially at the beginning.
It has been a huge hit to my self-esteem, and it fed my impostor syndrome. Don’t
fall for that.
Take your time, work on your mental health.
Then treat the job search as a project and be smart about it.

Automate the search and the filtering, and everything around them. Don’t automate the
review and the application. You decide where to apply. Do it with AI assistance,
obviously, but you are in control.

Next post: what changed in the setup, and how the numbers moved.

---

*Numbers as of 30/10/2026, day 16.*

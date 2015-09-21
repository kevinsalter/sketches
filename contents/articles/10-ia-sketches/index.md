---
title: "ia sketches"
author: kevinsalter
date: 2015-09-25
template: article.jade
---

<blockquote>
    **Information Architecture (IA)** is... um, a lot of things.<br><br>
    <div style="margin-left: 30px;">– me, paraphrasing _Wikipedia_</div>
</blockquote>

For the purposes of this exercise, I think it's fair to classify "information architecture" as the organization, labeling, navigation system, and layout of a web application to better support its usability and key workflows.

<span class="more"></span>

#### Design Constraints

In order to tame the infinite potential of this design, we came up with some constraints to better frame the problem we're trying to solve.  This will also help to measure if new designs have been successful.

_<span style="text-decoration: underline;">Target Roles:</span>_ Team Member, Manager (2 of the [4 roles](https://7geese.atlassian.net/wiki/display/PD/Compiled+Workflows) we've defined)<br><br>
_<span style="text-decoration: underline;">Typical Example Network:</span>_ We're imagining that this design is targeted at a company with 50+ employees that has departments set and runs performance management processes (which were set up at least 6 months ago) using 1 or more of 7Geese's core features.<br><br>
_<span style="text-decoration: underline;">Ultimate Goal:</span>_ Better enable users to succeed with their company's performance management process.<br><br>
_<span style="text-decoration: underline;">Execution Time:</span>_ The new design should be able to be implemented by the dev team within a 3-month timespan.

#### "My Daily Routine with 7Geese"

That was the title of a blog post I was working on before the IA project came to be.  The idea emerged during a chat with Max at one of our front-end meetings where we asked: "Why doesn't 7Geese just tell me what to do, or at least where to start?"

Ultimately, it's the same question we're asking in this project: "How can we help users be successful with their company's PM process?"

That's a great start, but what could that look like?  Could 7Geese generate relevant, actionable TODO lists based on a user's activity and position in the org chart?  Maybe we could set up scheduled [alerts](http://sketches.kevinsalter.me/articles/2-1-on-1-alert/) that remind users at certain times to give certain tasks attention?  Would a "follow model", à la Twitter, help users focus on messages and notifications they care about, and ignore information that is irrelevant?

My favourite idea that's been suggested so far is that the homepage could function more as a customized dashboard.  A lot of information is duplicated between the Cycles page, Profile page, and the current Homepage.  That information could be more relevantly arranged in a way that's not only informational, but actionable as well.  Personally, this will by the root of my first concepts presented here.

As always, [leave a comment below if something comes to mind!](#disqus_thread)
<hr>
#### Appendix A: _the cutting room floor_

There's another idea that is a bit too abstract to pursue, but I think is interesting to mention.

The idea is that a user would have an interactive, customizable sub-set of the org chart that they would visually arrange in a way that's relevant to them. It would actually be like a combination of Google+ circles and a follow model, essentially adding the ability to group people like others in your department, your reports, who you report to, who you're collaborating with on specific OKRs, etc.  Finally, the visual arrangement of these groups would serve as a kind of custom org chart, and could also possibly affect the types of notifications a user receives regarding things like feedback requests, 1-on-1 reminders, department level OKR updates, etc.

Again, this is likely more on the impractical side, but cool to imagine.  It's also harder for me to relate to this concept because it doesn't apply to companies as small as 7Geese, so it's harder to reason about pragmatically.

<p class="article-end"></p>

<span class="annotation">
    user dashboard concept
</span>
![dashboard ia sketches](https://placeholdit.imgix.net/~text?txtsize=33&txt=wait%20for%20it...&w=800&h=500)

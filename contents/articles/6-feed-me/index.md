---
title: "feed me"
author: kevinsalter
date: 2015-08-21
template: article.jade
---

Last week, there was a thread on 7Geese where Amin revealed that there had been a time where the "Post" functionality for the Feed on the homepage was _almost_ removed completely because 7Geese's focus is not to be a communication portal like Yammer or Slack.
<br><br>
At first this caught me by surprise (not the product differentiation, the thought of removing the ability to "Post"), but I thought about it for a while and started to envision how that change might look.

<span class="more"></span>

#### The thought process

Essentially, I have two thoughts that I'm combining into this design of the homepage feed:
1. If you scroll through your feed, you'll notice that we really only use the "Post" functionality to enter **Weekly Priorities** and **Reflection** _(...I'm going to explore the idea of Reflection as its own module in next week's post...)_.  So, I'm imagining that those are modules in 7Geese, similar to how Objectives, Recognitions, Feedback, and 1-on-1s are their own modules.
2. If feed items followed some sort of visual hierarchy, you'd be able to extract the information you need from them more quickly and easily _i.e._ less actionable updates would appear smaller, while more actionable or significant items would appear larger.

#### Visual hierarchy

To decide on a visual hierarchy, I'll want to lay out some basic criteria.  Feed items in this new design can be one of three possible sizes: small, medium, or large.

**Small** feed items would be infrequent actions, or non-actionable pieces of information.  For example, network updates such as "<u>@John Smith</u> has joined 7Geese", or "<u>@Sally Jones</u> created a new department: Sales", would likely appear as small, one-line updates.  We could still include the user's avatar, and hyper-link their name, but that message would be visually deemphasized in the feed.  Also, this includes items that a user is not able to comment on.

**Medium** feed items could be thought of as semi-frequent actions that represent some kind of progress.  This kind of action could be checking into, assessing, or closing an objective.  Users would still be able to comment on these items from the feed.

I think Recognition is our only **Large** feed item at this time, but I wonder what other kinds of messages might warrant this level of emphasis in the feed – closing objectives comes to mind.

Basically, I'm envisioning something similar to GitHub's version of the feed, which I think is the best representation of this kind of information I've seen on the web.  If you know of an example that you think is amazingly designed, please [leave me a note in the comments below](#disqus_thread)!

#### A quick note on functionality

Some functionality considerations that I'm not really going to explore in this post include:
- What kind of filtering do we want to keep/add/eliminate?
    + currently we can filter by People:
        * My Departments
        * My Direct Team
        * All Company
    + and by Item Type:
        * Posts
        * Objectives
            - when someone checks in
            - when an objective's status is updated, changed, or cleared
            - when a post is made on an objective
        * Recognition
            - when recognition is given/received
        * Network Updates
            - @name has joined 7Geese!
            - @name created a new department: Sales
- What kind of actions can a user take, and when?
    + here I'm referring to the ability to "Like", "Delete", "Comment", or "Edit" feed content
- Should we support Markdown?
    + of course I vote yes, but it's not a small integration since it would ideally require the ability to edit posts, a markdown preview-mode, user education, etc.
- Should we support uploading images in-line?
    + see sub-note above...

#### Item Types

It would be helpful and visually interesting to use an icon (more prominently than we do now) to represent the different item types that can possibly appear in the homepage feed.  Currently we have the 3 types listed above (when eliminating Posts), but just for fun I'm going to imagine that we also have a Weekly Priorities module and Reflection module – so that's **5 Item Types** in total.

<p class="article-end"></p>

<span class="annotation">
    a higher fidelity view of a feed re-design
</span>
![a new feed](https://placeholdit.imgix.net/~text?txtsize=33&txt=wait%20for%20it...&w=800&h=500)

<span class="annotation">
    a lower fidelity view of the feed on the homepage
</span>
![a new feed on the homepage](https://placeholdit.imgix.net/~text?txtsize=33&txt=wait%20for%20it...&w=800&h=500)

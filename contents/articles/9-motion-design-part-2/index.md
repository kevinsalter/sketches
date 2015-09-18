---
title: "motion design (part 2 of 2)"
author: kevinsalter
date: 2015-09-18
template: article.jade
---
<link rel="stylesheet" type="text/css" href="./sweetalert.css">
<link rel="stylesheet" type="text/css" href="./main.css">

This week I'll be picking up where I left off in [Part 1](sketches.kevinsalter.me/articles/8-motion-design-part-1/) and make some animation happen.  At best, the hope is that some of this experimentation yields something useful, or at least some interesting thoughts and dicussion.  At worst, I learned a ton of cool stuff about SVG animation, and did some math.  😄
<span class="more"></span>

#### 3 Ways to Animate SVGs on the Web

It turns out there are 3 different ways to execute animating SVGs, but there was one clear winner.  Sara Soueidan wrote [a great post on the Adobe blog](http://blogs.adobe.com/dreamweaver/2015/06/the-state-of-svg-animation.html) a couple months ago about the details of all 3 methods, but here's an overall summary.

1. **SMIL** (pronounced "Smile") is an XML-based language that was created to enable authors to write declarative animations.  Essentionally, you just add a tag to the raw SVG data, as seen below in the `animate` tag in this example from [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL):
```html
<svg width="300px" height="100px">
    <rect x="0" y="0" width="300" height="100" stroke="black" stroke-width="1" />
        <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
        <animate attributeName="cx" from="0" to="100" dur="5s" repeatCount="indefinite" />
        </circle>
</svg>
```
While there are a lot more interesting details about this spec, broswer support has always been spotty and Internet Explorer has never supported it.  Finally, SMIL is set to be completely deprecated in Blink (the rendering engine used in Chrome) in favour of CSS and Web Animations, so...

2. **CSS Animations** are super powerful, and have established themselves as a best practice technique for animatiing DOM elements in a smooth, powerful way that keeps animations within their 60 frames-per-second budget and helps keep the web [jank free](http://jankfree.org/).  However, for animating SVGs there are a couple of areas where CSS trips up.  When it comes to _transforms_ (i.e. translate, rotate, scale, skew), which are often key elements to full fledged animations, Firefox has some weird quirks and Opera and Internet Explorer don't recognize CSS transformations on SVG elements at all.  Speaking of which, another downside to using CSS is that IE9 doesn't support CSS [`@keyframes`](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) animations, so...

3. ...the winner is, **JavaScript**!  It kind of makes sense, though– you get all the capabilities of SMIL and CSS, plus you have access to the whole DOM API, the [Web Animations API], and all the power of the scripting language itself (variables, loops, functions, etc.).  Add the fact that it's possible to make the resulting animations compatible with all browsers, even old versions of IE, makes this animation method the clear winner. 🎉

#### Which JS library to use for SVG animation?

Managing the boilerplate of animating SVGs, especially timing issues among a group of animations, can get difficult really quickly, so it can help to leverage a JavaScript library.  There were a few great libraries I found and quickly trialed before choosing for these demos, and here's a short list of them:

- **[Velocity.js](http://julian.com/research/velocity/)** is really cool.  It's a super-optimized, API compatible, drop-in replacement for jQuery's `$.animate()` method without the performance issues and with broswer compatability going across the the board and all the way back to IE8.  The project was also back by Stripe, who are known for their cool UI animations.  It's under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
- **[GreenSock Animation Platform](http://greensock.com/docs/#/HTML5/GSAP/)** (GSAP) seems to be the best choice for gaining full control over large, complex animations. Their concepts of attaching things to timelines, and grouping animations to be triggered in different orders is some powerful stuff.  It's under the [Standard "No Charge" GreenSock License](http://greensock.com/standard-license).
- **[Snap SVG](http://snapsvg.io/)** is a library that flies under the Adobe flag, but was written by and based on the work of the guy who created [Raphaël](http://raphaeljs.com/).  It claims to make "working with your SVG assets as easy as jQuery makes working with the DOM", and is compatible across broswers and with IE9+.  I found it equally as simple to use the library to draw shapes on the page, or manipulate existing SVGs.  It also has some AJAX capabilities baked in for dynamically grabbing SVGs from whereever and injecting them into the document.  It's under the [Apache 2 License](https://github.com/adobe-webplatform/Snap.svg/blob/master/LICENSE).

For this demo I decided to use Snap SVG because I'm just really digging that library right now.  You can geek out on the commented code for this in <a href="./main.js" target="_blank">`main.js`</a>
<p class="article-end"></p>

<span class="annotation">
    SVG animation demo - OKR Grading
</span>

<svg version="1.1" id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="500px" height="500px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" xml:space="preserve">

<path id="mouth" fill="none" stroke="#E5D0AE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
        M 127.771,351.329 c 0,0 40.860771,0 120.770151,0 c 70.909379,0 120.770152,0 120.770152,0"/>

<g id="eyes">
    <circle fill="#E5D0AE" stroke="#E5D0AE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="155" cy="170" r="7.5"/>

    <circle fill="#E5D0AE" stroke="#E5D0AE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="345" cy="170" r="7.5"/>
</g>

<circle id="face-outline" fill="none" stroke="#E5D0AE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="250" cy="250" r="244.275"/>
</svg>

<br>
<input type="range" id="grade-slider" style="width:160px;" min=0 max=1 value=0.5 step=0.01>
<span id="grade">0.5</span>

<textarea></textarea>
<button id="submit">Grade this OKR!</button>

<script type="text/javascript" src="./snap.svg.js"></script>
<script type="text/javascript" src="./sweetalert.min.js"></script>
<script type="text/javascript" src="./main.js"></script>

---
title: "7Geese GitHub Issue Bookmarklet"
author: kevinsalter
date: 2015-10-10
template: article.jade
---

<style>
  .btn {
    display: inline-block;
    padding: 4px 10px 4px;
    margin: 0 auto;
    font-size: 13px;
    line-height: 18px;
    color: #333333;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    vertical-align: middle;
    background-color: #f5f5f5;
    background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#e6e6e6));
    background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
    background-image: linear-gradient(top, #ffffff, #e6e6e6);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);
    border-color: #e6e6e6 #e6e6e6 #bfbfbf;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    border: 1px solid #ccc;
    border-bottom-color: #bbb;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    *margin-left: .3em;
  }
  .btn:hover,
  .btn:active,
  .btn.active,
  .btn.disabled,
  .btn[disabled] {
    background-color: #e6e6e6;
    text-decoration: none;
  }
</style>

1. Drag and drop this button into the bookmarks toolbar in your browser. <a href="javascript:(function() {var e = document.getElementById('issue_body');if (e) {e.value += '### Changelog:\n\n**Subject:**\n\n----------\n\n## Steps to Reproduce\n\n\n## Expected Result\n\n\n## Actual Result\n\n\n## Screenshot\n\n\nRequires documentation?  yes/no\nRequires tests?  yes/no\nRequires migration?  yes/no';}})();" class="btn">7Geese GitHub Issue Template</a>

2. Head on over to https://github.com/7Geese/7Geese/issues/new, then click on the bookmarklet to fill in the textarea with the issue template!

3. Profit 💸

<span class="more"></span>

<video autoplay loop tabindex="0" style="max-width:715px;">
  <source src="./bookmarklet-video.webmhd.webm">
  <source src="./bookmarklet-video.mp4.mp4">
</video>

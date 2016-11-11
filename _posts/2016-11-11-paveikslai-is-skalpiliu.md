---
layout: post
title: Paveikslai iš skalpilių
date: '2016-11-11 10:00:02 +0200'
categories: Dizainas
image: /assets/scalpels/11.jpg
---

<div class="slider js_slider">
        <div class="frame js_frame">
            <ul class="slides js_slides">
                <li class="js_slide"> <img src="{{ site.url }}/assets/scalpels/11.jpg" /></li>
                <li class="js_slide"> <img src="{{ site.url }}/assets/scalpels/21.jpg" /></li>
                <li class="js_slide"> <img src="{{ site.url }}/assets/scalpels/31.jpg" /></li>
                <li class="js_slide"> <img src="{{ site.url }}/assets/scalpels/41.jpg" /></li>
                <li class="js_slide"> <img src="{{ site.url }}/assets/scalpels/51.jpg" /></li>

            </ul>
        </div>
        <span class="js_prev prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#000" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
        </span>
        <span class="js_next next">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#000" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
        </span>
</div>


<script>
    (function(){
        document.addEventListener('DOMContentLoaded', function () {
        var simple = document.querySelector('.js_slider');

            lory(simple, {
                infinite: 1
            });
        });
    })();
</script>

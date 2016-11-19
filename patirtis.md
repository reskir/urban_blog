---
layout: posts
title: Patirtis
permalink: /patirtis/
navigation_weight: 3
---

{% for post in site.categories.Patirtis %}
  <article class="posts_post col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <a href="{{ site.url }}{{ post.url }}">
        <div class="posts_post_info" style="background-image:url('{{ site.url }}{{ post.image }}')">
              <p class="posts_post_cat">{{ post.categories }} </p>
        </div>
        <h2 class="posts_post_title">
           {{ post.title }}
         </h2>
    </a>
</article>
{% endfor %}

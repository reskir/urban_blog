---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

<div class="content">
    <div class="row posts x--pt">
          {% for post in paginator.posts limit:1 %}
              <article class="posts_post posts_post--hero col-lg-8 col-md-12 col-sm-12 col-xs-12">
                <a href="{{ site.url }}{{ post.url }}">
                    <div class="posts_post_info" style="background-image:url('{{ assets[post.image].digest_path }}')">
                          <p class="posts_post_cat">{{ post.categories }} </p>
                    </div>

                        <h2 class="posts_post_title">
                           {{ post.title }}
                         </h2>
                </a>
            </article>
          {% endfor %}


          {% for post in paginator.posts offset:1 limit:1 %}
            <article class="posts_post col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="{{ site.url }}{{ post.url }}">
                  <div class="posts_post_info" style="background-image:url('{{ assets[post.image].digest_path }}')">
                        <p class="posts_post_cat">{{ post.categories }} </p>
                  </div>
                  <h2 class="posts_post_title">
                     {{ post.title }}
                   </h2>

              </a>
          </article>
          {% endfor %}

          {% for post in paginator.posts offset:2 limit:2 %}
            <article class="posts_post col-lg-6 col-md-4 col-sm-6 col-xs-12">
              <a href="{{ site.url }}{{ post.url }}">
                  <div class="posts_post_info" style="background-image:url('{{ assets[post.image].digest_path }}')">
                        <p class="posts_post_cat">{{ post.categories }} </p>
                  </div>
                  <h2 class="posts_post_title">
                     {{ post.title }}
                   </h2>

              </a>
          </article>
          {% endfor %}

          {% for post in paginator.posts offset:4 %}
            <article class="posts_post col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <a href="{{ site.url }}{{ post.url }}">
                  <div class="posts_post_info" style="background-image:url('{{ assets[post.image].digest_path }}')">
                        <p class="posts_post_cat">{{ post.categories }} </p>
                  </div>
                  <h2 class="posts_post_title">
                     {{ post.title }}
                   </h2>

              </a>
          </article>
          {% endfor %}
    </div>


    <!-- Pagination links -->
    <div class="pagination">
        {% if paginator.previous_page %}
            <a href="{{ paginator.previous_page_path }}" class="previous">Previous</a>
        {% else %}
            <span class="previous">Previous</span>
        {% endif %}
        <span class="page_number ">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
        {% if paginator.next_page %}
            <a href="{{ paginator.next_page_path }}" class="next">Next</a>
        {% else %}
            <span class="next ">Next</span>
        {% endif %}
    </div>

</div>

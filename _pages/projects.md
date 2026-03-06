---
layout: page
title: projects
permalink: /projects/
description: Selected research and engineering projects.
nav: true
nav_order: 1
horizontal: true
---

These projects reflect the parts of my work I enjoy most: systems that connect reasoning with action, efficient learning pipelines, and interactive environments that make agent behavior easier to study.

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
</div>

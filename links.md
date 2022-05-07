---
title: リンク集
layout: page
---

{% for circle in site.data.links %}
<div class="columns" style="margin:20px 0">
    {% include circle-banner.html
       href=circle.href
       img=circle.logo
       alt=circle.name
       opt="style=\"margin:10px\""
       blank=true %}
    <div>
        <h2 style="line-height: inherit;margin:10px 0;">
            {{ circle.name }}
            {% include button.html
               href=circle.href
               blank=true
               class="is-light is-rounded is-small has-text-weight-normal"
               opt="style=\"margin:0 8px !important;\""
               icon_name=circle.button-icon
               text=circle.button-text %}
        </h2>
        <p>
            {{ circle.description }}
        </p>
    </div>
</div>
{% endfor %}

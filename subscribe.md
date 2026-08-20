---
layout: default
title: Subscribe to Updates
permalink: /subscribe.html
nav_exclude: true
---

# Subscribe to Tāttvika Updates

Tāttvika provides a web feed for readers who want to know when a new article or a new major edition is published. No GitHub account is required.

The feed announces an article's first public release at V1.1 and later major editions such as V2.1 or V3.1. Minor revisions such as V1.2 through V1.10 and beyond are published silently, as are typographical, layout, and maintenance corrections. The precise current version remains visible in the article's Markdown source on GitHub.

## How to subscribe

1. Open any application or service that supports Atom or RSS feeds.
2. Choose its option to add a feed, follow a source, or subscribe by URL.
3. Copy the address below, paste it into the reader, and confirm the subscription.

<div class="feed-subscribe-card">
  <strong>Subscription address</strong>
  <div class="feed-address-row">
    <input id="tattvika-feed-address" type="text" readonly value="https://parthom7.github.io/tattvika-project/feed.xml" aria-label="Tāttvika Atom feed address">
    <button id="tattvika-feed-copy" class="feed-copy-button" type="button">Copy feed address</button>
  </div>
  <p id="tattvika-feed-copy-status" class="feed-copy-status" aria-live="polite"></p>
</div>

If you already use a feed reader, you can also [open the Atom feed directly]({{ '/feed.xml' | relative_url }}) and subscribe from there.

## What happens next

Your feed reader periodically checks this address. When Tāttvika publishes a new article or a new major edition, the reader displays its version, summary, publication date, and a link to the updated article.

This is not an email newsletter: the subscription is controlled entirely by your chosen feed reader, and Tāttvika does not receive your email address or subscription details.

## Recent updates

{% assign recent_updates = site.updates | sort: "date" | reverse %}
{% for update in recent_updates limit: 5 %}
### [{{ update.title }}]({{ update.target | relative_url }})

{{ update.date | date: "%B %-d, %Y" }} — {{ update.summary }}
{% endfor %}

<script defer src="{{ '/assets/js/feed-subscribe.js' | relative_url }}"></script>

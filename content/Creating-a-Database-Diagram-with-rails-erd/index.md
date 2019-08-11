---
title: "Creating a Database Diagram with rails-erd"
description: "Quick post about how to create a ER chart with a rails gem."
cover: "assets/db-diagram.jpeg"
category: "Rails"
tags:
  - Documents
readTime:
date: "17/07/2019"
---
# Add rails-erd

```ruby
group :development do
  gem 'rails-erd'
end
```

# Install Dependency

```bash
$ brew install graphviz
```

# Run the command

```bash
$ bundle exec erd
```
That's it !!

# References
- [Creating a Database Diagram with Rails-ERD](https://ryanboland.com/blog/creating-a-database-diagram-with-rails-erd/)

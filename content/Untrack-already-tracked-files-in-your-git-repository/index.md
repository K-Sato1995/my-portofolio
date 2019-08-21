---
title: "Untrack already tracked files in your git repository"
description: "Simple steps to follow to untrack files that are already committed to your remote git repository."
cover: "assets/github.png"
category: "Others"
tags:
  - Git
date: "22/07/2019"
---
# Commit all your changes
Before proceeding, make sure all your changes are committed, including your `.gitignore` file.

# Remove everything from the repository

To clear your repo, use:

```bash
$ git rm -r --cached .
```

You can untrack a specific file with:

```bash
$ git rm -r --cached foo.txt
```

#  Re-add everything

```bash
$ git add .
```

# Commit

```bash
$ git commit -m ".gitignore fix"
```

# References
- [Untrack files already added to git repository based on .gitignore - CodeBlocQ](http://www.codeblocq.com/2016/01/Untrack-files-already-added-to-git-repository-based-on-gitignore/)

---
title: "Git Resources"
description: "Collection of posts about Git I found on the internet. The posts are either in Japanese or English"
cover: "assets/github.png"
category: "Others"
tags:
  - Git
readTime:
date: "22/07/2019"
---
# References

## Dealing With Merge Conflicts


[Dealing With Merge Conflicts](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts)

## git push の取り消し方法
[git push の取り消し方法 | WWWクリエイターズ](http://www-creators.com/archives/2020)

## Put commits together
[rebase -i でコミットをまとめる - Qiita](https://qiita.com/takke/items/3400b55becfd72769214)

## Check out remote branch onto your local pc
[リモートのgitブランチをローカルにチェックアウトする - setoya-blog](https://www.setoya-blog.com/entry/2012/11/04/132746)

```
$ git checkout -b other_branch origin/other_branch
```
## Git Command Aliases

```
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.br branch
```

## Untrack already tracked filed

- [My Post about it](https://k-sato1995.github.io/blog/untrack-already-tracked-files-in-your-git-repository)

## Git Reset

```
--soft: uncommit changes, changes are left staged (index).
--hard: uncommit + unstage + delete changes, nothing left.
--mixed (default): uncommit + unstage changes, changes are left in working tree.
```

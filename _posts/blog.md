---
title: 깃 헙 블 로 그 투
layout: post
category: news
---

## Jekyll 블로그 만들기
- [태그 시스템/아카이브 페이지/전체글 목록](http://halryang.net/tag-and-archive/)
- [포스트 목록](http://jekyllrb-ko.github.io/docs/posts/)
- [워드프레스를 Jekyll로 이사하기](http://ohyecloudy.com/pnotes/archives/moving-to-jekyll/)


- Github page dependency
  - https://pages.github.com/versions/

vi gitpush
> git add .
> git commit -m "post"
> git push

chmod +x gitpush
./gitpush

sudo gem install jekyll-import
sudo gem install sequel hpricot
jekyll import wordpressdotcom --source wordpress.xml
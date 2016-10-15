---
title: Jekyll + Github 블로그 구축
layout: post
category: Jekyll
---

## Jekyll 블로그 만들기

- Jekyll 설치

> sudo gem install jekyll-import
sudo gem install sequel hpricot
jekyll import wordpressdotcom --source wordpress.xml
/Users/jeongwon/madlymissyou.github.io/_posts/blog.md

- Github page dependency
  - https://pages.github.com/versions/
- 로컬 웹서버 가동
- Guthub page 저장소 생성
- md 파일 Github에 푸쉬하는 스크립트 ./gitpush
 - chmod +x gitpush
- 웹서버 가동
- Pithy theme fork & customizing
- prose.io 발견
- readmore 구현
- favicon 
- 카테고리 #name tag 바로가기
- pagination
- [태그 시스템/아카이브 페이지/전체글 목록](http://halryang.net/tag-and-archive/)
 - https://lky88.github.io/jekyll-pagination/ 이게 좋았지만, v3.3 에서는 Jekyll paginate 지원 중단
- google search
  - 예쁘지 않고 불필요해서 뺌
- google analytics
- 워드프레스에서 Jekyll로 이전
> sudo gem install jekyll-import sudo gem install sequel hpricot jekyll import wordpressdotcom –source wordpress.xml
 - http://ohyecloudy.com/pnotes/archives/moving-to-jekyll/
- [wd2md.py](https://github.com/dreikanter/wp2md
) Jekyll 스타일에 맞게 수정
 - 파일이름: Y%%m%d > %Y-%m-%d
 - f.write(‘—‘)
 - f.write(‘layout: post \n —‘)
 - #  'post_name', 삭제
 - # name = data.get('post_name', '').strip() 살제
 - name = data.get('post_id', '').strip()
 - title은 []로 시작하면 안 된다. 
 - ‘, 가 있으면 안된다. (), &, , 는 된다. 
 - python wp2md.py wordpress.xml 실행



 





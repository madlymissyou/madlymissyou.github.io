---
title: Jekyll + Github 블로그 구축
layout: post
category: Jekyll
---

### 왜 Jekyll인가?
잘 정리된 글들이 많이 있다.
- [내 글을 오래 남기기 위한 블로그 선택](http://blog.kalkin7.com/2015/07/07/maintain-a-blog-for-a-long-time/)
- [Jekyll 기반의 GitHub Pages에 블로그 만들기](https://xho95.github.io/blog/github/jekyll/git/2016/01/11/Make-a-blog-with-Jekyll.html)
- [WordPress 에서 Jekyll로](http://blog.suminb.com/post/goodbye-wordpress-hello-jekyll/)
- [Tistory에서 Jekyll을 이용하여 GitHub Pages로 블로그 이전](http://blog.saltfactory.net/note/renewal-blog-from-tistory-to-github-pages-via-jekyll.html)
- [난 10년된 워드프레스에서 Jekyll로 마이그레이션](https://ilmol.com/2015/01/%EC%9B%8C%EB%93%9C%ED%94%84%EB%A0%88%EC%8A%A4%EC%97%90%EC%84%9C-Jekyll%EB%A1%9C-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98.html)
- [From Wordpress To Jekyll](http://halryang.net/From-Wordpress-To-Jekyll)
  - [한량넷 Jekyll 글모음](http://halryang.net/search/?tags=jekyll)
- [정적 웹사이트 생성기의 역습 - 동적 스크립트를 넘어 다시 정적 컨텐츠로](http://blog.nacyot.com/articles/2014-01-15-static-site-generator)
- [다 만들고 난 후에 발견한 좋은 글](http://lawfully.kr/smart/jekyll.html)

### 디자인 영감을 받은 사이트
- [스포카](https://spoqa.github.io/index.html)의 제목 폰트
- [워니님 블로그](https://heelog.github.io/development/)의 timeline css style
- [잡담 페이지](http://halryang.net/micro/)
- [아이콘을 구한 대박 사이트 Flaticon](http://www.flaticon.com/search?word=github)

### Done list & 기술적인 도움을 받은 사이트
- [Jekyll 설치](http://blog.saltfactory.net/jekyll/upgrade-github-pages-dependency-versions.html)
  - [Jekyll로 Github Pages 사용하기](https://github.com/badkeyman/documents/wiki/Jekyll%EB%A1%9C-Github-Pages-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- 로컬 웹서버 가동
- Guthub page 저장소 생성
- md 파일 Github에 푸쉬하는 스크립트 ./gitpush
 - chmod +x gitpush
- 웹서버 가동
- [Pithy theme](https://github.com/smallmuou/Jekyll-Pithy) fork & customizing
- [나눔고딕 웹폰트 적용](http://narie.tistory.com/107)
- readmore 구현
- 파비콘(favicon) 적용
- [마크다운으로 이미지 정렬](http://blog.kalkin7.com/2014/03/04/how-to-align-images-on-writing-with-markdown/)
- 카테고리 #name tag 바로가기
- [유튜브 임베딩](http://halryang.net/embed-youtube-responsively/)
- [태그](https://nolboo.kim/blog/2014/01/09/upgrade-jekyll-github-blog/)
- 파머링크 생성
- [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) 문법
- pagination (v3.3 에서는 Jekyll paginate [지원 중단](https://github.com/jekyll/jekyll/issues/4124))
- [태그 시스템/아카이브 페이지/전체글 목록](http://halryang.net/tag-and-archive/)
- [google 검색창 달기](https://cse.google.com/cse/all)
- [google analytics](http://loustler.io/2016/09/26/github_pages_blog_google_analytics/)
- [구글 검색에 노출하기](http://cinos81.bitbucket.org/blog/_site/jekyll/2016/01/23/addRobotTxt.html)
- [댓글](https://github.com/appkr/blog/blob/master/_posts/2016-02-13-%EB%B8%94%EB%A1%9C%EA%B7%B8-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EC%9D%B4%EC%A0%84-5-disqus-facebook.md)
- [댓글 잠금](http://halryang.net/Disable-comments/)
- 워드프레스에서 Jekyll로 이전
- [wd2md.py](https://github.com/dreikanter/wp2md)을 Jekyll 스타일에 맞게 수정

> 파일이름: Y%%m%d > %Y-%m-%d
> f.write(‘—‘)  
> f.write(‘layout: post \n —‘)  
> 'post_name', 삭제  
> name = data.get('post_name', '').strip() 수정  
> name = data.get('post_id', '').strip()  
> title은 []로 시작하면 안 된다.  
> ‘,' 가 있으면 안된다. (), &, , 는 된다.   
> python wp2md.py wordpress.xml 실행  

### 포스팅 하기
- [rake 를 알게 된 곳](http://boxersb.github.io/etc/2013/04/03/jekyll-introduction/)
- 자동화 매크로 (적용하지 않음)
  - [http://halryang.net/automation-for-jekyll-posting/](http://halryang.net/automation-for-jekyll-posting/)
  - [이미지 삽입 매크로](http://halryang.net/Insert-Image-easily-to-Jekyll-blog/)
- 웹기반 마크다운 에디터 [prose.io](http://prose.io)

---
title: Jekyll + Github 블로그 구축
layout: post
category: Jekyll
tags: [plz, web, jekyll]
meta: 마크다운으로 작성하는 블로그 사이트 만들기
---

### 왜 Jekyll인가?
잘 정리된 글들이 많이 있다.

- 다 만들고 난 후에 발견한 따끈따끈한 좋은 글: [한 미국 변호사의 서랍](http://lawfully.kr/smart/jekyll.html)
- [내 글을 오래 남기기 위한 블로그 선택](http://blog.kalkin7.com/2015/07/07/maintain-a-blog-for-a-long-time/)
- [Jekyll 기반의 GitHub Pages에 블로그 만들기](https://xho95.github.io/blog/github/jekyll/git/2016/01/11/Make-a-blog-with-Jekyll.html)
- [WordPress 에서 Jekyll로](http://blog.suminb.com/post/goodbye-wordpress-hello-jekyll/)
- [kakao 기술 블로그가 GitHub Pages로 간 까닭은](http://tech.kakao.com/2016/07/07/tech-blog-story/)
- [WordPress를 버리고 Jekyll로](https://www.alphafactory.co.kr/post/2013/12/08/move-to-jekyll-from-wordpress/)
- [Tistory에서 Jekyll을 이용하여 GitHub Pages로 블로그 이전](http://blog.saltfactory.net/note/renewal-blog-from-tistory-to-github-pages-via-jekyll.html)
- [Jekyll, 즐겁게 사용하기](https://vjinn.github.io/environment/enjoy-jekylling/)
- [난 10년된 워드프레스에서 Jekyll로 마이그레이션](https://ilmol.com/2015/01/%EC%9B%8C%EB%93%9C%ED%94%84%EB%A0%88%EC%8A%A4%EC%97%90%EC%84%9C-Jekyll%EB%A1%9C-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98.html)
- [From Wordpress To Jekyll](http://halryang.net/From-Wordpress-To-Jekyll)
  - [한량넷 Jekyll 글모음](http://halryang.net/search/?tags=jekyll)
- [정적 웹사이트 생성기의 역습 - 동적 스크립트를 넘어 다시 정적 컨텐츠로](http://blog.nacyot.com/articles/2014-01-15-static-site-generator)

### 디자인 영감을 받은 사이트
- [스포카](https://spoqa.github.io/index.html)의 제목 폰트
- [워니님 블로그](https://heelog.github.io/development/)의 timeline css style
- [잡담 페이지](http://halryang.net/micro/)
- [아이콘을 구한 대박 사이트 Flaticon](http://www.flaticon.com/search?word=github)
- [Sitemap 참고하러 갔다가 발견한 블로그](http://joelglovier.com/)
- [al-cion](https://al-cion.github.io/)
- [SVG editor](http://vectorpaint.yaks.co.nz/)

### Done list & 기술적인 도움을 받은 사이트
- Jekyll 설치
  - [Jekyll을 사용하여 GitHub Pages 만들기](http://blog.saltfactory.net/jekyll/upgrade-github-pages-dependency-versions.html)
  - [Build A Blog With Jekyll And GitHub Pages](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)

  ```shell
  $ gem install jekyll
  ~ $ jekyll new my-awesome-site
  ~ $ cd my-awesome-site
  ~/my-awesome-site $ jekyll serve
  # => 이제 브라우저로 http://localhost:4000 에 접속
  ```
  - [Jekyll로 Github Pages 사용하기](https://github.com/badkeyman/documents/wiki/Jekyll%EB%A1%9C-Github-Pages-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
- 로컬 웹서버 가동
- Github page 저장소 생성
- [로컬저장소와 Github 저장소 싱크하는 스크립트 만들기](https://nolboo.kim/blog/2013/12/17/markdown-wiki-bitbucket-gollum/)

  ```shell
  # 타이핑하기 쉽게 m 이라는 파일을 만들고 다음과 같이 작성

  #!/bin/bash
  git pull
  git add . -A
  echo -n "Input commit message: "
  read input
  git commit -m "$input"
  git push origin master

  # 터미널에서 다음 명령어로 m 파일 스크립트 생성
  chmod +x m

  # 터미널에서 다음과 같이 스크립트 실행
  ./m
  ```

- 웹서버 가동
- 도메인 연결
- [Pithy theme](https://github.com/smallmuou/Jekyll-Pithy) fork & customizing
- [나눔고딕 웹폰트 적용](http://narie.tistory.com/107)
- readmore 구현
- [파비콘(favicon)](http://icoconvert.com/)

  ```html
  <link rel="shortcut icon" type="image/x-icon" href="{{ site.baseurl}}/images/favicon.ico"/>
  ```

- 마크다운 엔진
  - [놀부님의 블로그](https://nolboo.kim/blog/2013/10/15/free-blog-with-github-jekyll/)

    > RDiscount는 C로된 마크다운 프로세싱 엔진이다. [sudo] gem install rdiscount로 설치한다. kramdown과 redcarpet 등도 동일한 방법으로 설치할 수 있다. 기본 마크다운을 사용한다면 차후에 좀 더 필요성을 느낄 때 설치하여도 된다.
    >
    > GitHub에서는 2016년 5월 1일부터 kramdown 하나만 지원한다. 자세한 것은 A look behind our decision to standardize on a single Markdown engine for GitHub Pages를 참조한다.

- [마크다운으로 이미지 정렬](http://blog.kalkin7.com/2014/03/04/how-to-align-images-on-writing-with-markdown/)
- [반응형 디자인](http://www.nextree.co.kr/p8622/)
  - [참고](http://naradesign.net/wp/2012/05/30/1823/)
- 카테고리 #name tag 바로가기
- [유튜브 임베딩](http://halryang.net/embed-youtube-responsively/)
- [태그](https://nolboo.kim/blog/2014/01/09/upgrade-jekyll-github-blog/)
- [태그 스타일](http://codinfox.github.io/blog/tags/#chrome)
  - 이 [소스코드](https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/)에서 tag를 tag[0]로 바꿔야 한다.
- 이미지 캡션
  - [캡션 넣기](https://www.alphafactory.co.kr/post/2013/12/08/move-to-jekyll-from-wordpress/)

    > 이미지 캡션 다는 문제는 caption.js를 가져다 사용했다. 워드프레스의 경우는 Shortcode를 사용해서 이미지 캡션을 만들었지만 caption.js은 img 태그의 alt 정보를 읽어와서 캡션으로 만들어준다. Markdown 가독성 면에서도 아주 좋아지니 일석 이조인듯.

  - [Making Markdown more HTML5 with Kramdown](http://kalifi.org/2015/04/html5-markdown-kramdown.html)
  - [Including and managing images in Jekyll](https://eduardoboucas.com/blog/2014/12/07/including-and-managing-images-in-jekyll.html)
    - `<fig>\{\% include image name="img.jpg" caption="출처: instagram.com/mooooonmi"\%\}</fig>`
  - [Jekyll figure](https://github.com/paulrobertlloyd/jekyll-figure)

- 퍼머링크 스타일
  - `_config.yml` 파일에 `permalink: /:year/:month/:day/:title` 추가
- 태그
  - [Use Tags and Categories in your Jekyll based Github Pages without plugins]( https://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/)
- [Liquid](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) 문법
  - [문법](https://help.shopify.com/themes/liquid/basics)
  - [스트링 필터](https://help.shopify.com/themes/liquid/filters/string-filters)
- Pagination (v3.3 에서는 Jekyll paginate [지원 중단](https://github.com/jekyll/jekyll/issues/4124))
- Previous/Next link
  - [참고](http://stackoverflow.com/questions/28331879/jekyll-next-and-previous-links-with-different-categories)
- [태그 시스템/아카이브 페이지/전체글 목록](http://halryang.net/tag-and-archive/)
- [google 검색창 달기](https://cse.google.com/cse/all)
- [google analytics](http://loustler.io/2016/09/26/github_pages_blog_google_analytics/)
- [구글 검색에 노출하기](http://cinos81.bitbucket.org/blog/_site/jekyll/2016/01/23/addRobotTxt.html)
- [댓글](https://github.com/appkr/blog/blob/master/_posts/2016-02-13-%EB%B8%94%EB%A1%9C%EA%B7%B8-%ED%94%8C%EB%9E%AB%ED%8F%BC-%EC%9D%B4%EC%A0%84-5-disqus-facebook.md)
  - [댓글 잠금](http://halryang.net/Disable-comments/)
- [이모지 플러그인 설치](http://ohyecloudy.com/pnotes/archives/jekyll-emoji-plugin/)

  ```shell
  sudo gem install jemoji
  ```

  ```css
  .emoji {
  display: inline !important;
  margin: 0px 0px 5px 0px !important;
  border-radius: 0px !important;
  }
  ```
- 워드프레스에서 Jekyll로 이전
- [wd2md.py](https://github.com/dreikanter/wp2md)을 Jekyll 스타일에 맞게 수정


  ```shell
  # 1. Filename: Y%%m%d > %Y-%m-%d
  # 2. Front Matter:
  f.write(‘—‘)  
  f.write(‘layout: post \n —‘)  
  'post_name', # > 삭제  
  name = data.get('post_name', '').strip() # > 다음과 같이 수정  
  name = data.get('post_id', '').strip()  
  # title은 []로 시작하면 안 된다.
  # title에 ‘,' 가 있으면 안된다. (), &, , 는 된다.   
  python wp2md.py wordpress.xml # 실행
  ```

### 포스팅 하기
- [rake 를 알게 된 곳](http://boxersb.github.io/etc/2013/04/03/jekyll-introduction/)
- 자동화 매크로 (적용하지 않음)
  - [http://halryang.net/automation-for-jekyll-posting/](http://halryang.net/automation-for-jekyll-posting/)
  - [이미지 삽입 매크로](http://halryang.net/Insert-Image-easily-to-Jekyll-blog/)
- [SShareX로 마크다운으로 글을 쓸 때 블로그에 쉽게 이미지를 삽입하](http://blog.kalkin7.com/2014/03/06/how-to-insert-images-in-blog-using-sharex-and-markdown/)
- 웹기반 마크다운 에디터 [prose.io](http://prose.io)
- [마크다운 문법](https://github.com/biospin/BigBio/blob/master/reference/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4.md)
  - [GFM (Github Flavored Markdown) 문법](https://nolboo.kim/blog/2014/03/25/github-flavored-markdown/)
- Atom 에디터에 github theme 설치
- 코드 하이라이팅
  - Python 기반의 Pygment를 사용할 수도 있지만, Ruby 기반의 Rouge를 사용할 수도 있다.
  - [Rouge 언어 식별자](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers)

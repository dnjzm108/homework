# Blog 폴더 생성
  ->back 폴더 생성
  ->front 폴더 생성

# 작업할 디렉토리 까지 접근

#  npm init 으로 node.js 환경으로 만들어줌

# npm install next react react-dom

React 배운 느낌보다 
Next 기본구조 정도 배운다.

# package.json 에 설정 추가 
    "dev":"next dev -p 3001 -H 0.0.0.0",
    "build":"next build",
    "start":"next start",
    "lint":"next lint"

# pages 폴더를 생성한다.
폴더안에 index.jsx 파일 만들고 컴포넌트 생성
*export default 주의

# npm run dev 로 dev 서버 실행

노트북 사용자 . 동일한 wifi 사용할경우 
-윈도우키 누르고 cmd 친다음 엔터 ipconfig  192.168.0.15:3001

데스탑인데 공유기 사용하고 있우면 됨.

---------------------------next.js 맛보기 ---------------------------

# pages 폴더 
->index.jsx
->join.jsx
->login.jsx
->/posts/post.jsx 
폴더만 생성하면 됨

# 동적 라우팅 사용방법

-> 파일명을 배열형식으로 만든다. [post ]

# 레이아웃 구성하기 
->components 폴더 생성
-> 그폴더안에 BlogLayout.jsx 파일 생성

# 또다른 레이아웃 구성하기
-> components 폴더안에 FormLayout.jsx
  login.jsx / join.jsx 사용하기.

# Link 컴포넌트 사용하기
 React에 사용되는 Link 와 사용법이 다름

# import Link from 'next/link'  로 가져온후  
ex) react - > <Link to="/">menu</Link>
    next.js -> <Link href="/"><a>menu1</a><Link>

# index.html 어디갔을까...? 

# Next 모든 컴포넌트를 실행하기전에 거쳐가는 컴포넌트가 있습니다.

# app.jsx ? 어디감? HEAD 모든곳에 공통적으로 사용이 가능하겠죠
혹은 공통적인 css
->front에 index.css 파일을 만들고 

vs code app 에서 다운
vscode-styled-components 

npm install styled-components


-------------------------------------------0727----------------------

# Styled Components 환경설정
# _document.jsx 만들기
# .babelrc

# 에러가 날경우 _document.jsx 랑 .babelrc 를 삭제 후 다시 만들어보고
# 그래도 안되면 .next 파일을 지우고 npm install next 를 다시 해본다  

# npm install -D babel-plugin-styled-components
# Next.js(블로그 만들기)
```
npx create-next-app `project-name`
```
## 라우팅
### file-system Routing 지원
라우팅이 page 폴더 밑의 파일 이름으로 자동 설정
ex) pages/pageRouting/index.js  
ex) pages/blog/first-post.js  
```
http://localhost/pageRouting
http://localhost/blog/first-post
```

### `동적라우팅`
ex) pages/blog/[slug].js  
→ /blog/:slug (/blog/hello-world) -> slug.js  

ex) pages/[username]/settings.js  
→ /:username/settings (/foo/settings) -> settings.js  

```js
//[slug] /[username]  동적라우팅 [] 값 가져오기
import { useRouter } from "next/router"

export default function Blog(){

  const router = useRouter()
  const {slug} = router.query
  return(
    <div>
      <h1>blog/[{slug}]</h1>
    </div>
  )
}
```

ex) pages/post/[...all].js  
→ /post/* (/post/2020/id/title) -> ...all.js 참조

```js
//pages/post/[...all].js 데이터 가져오기
import { useRouter } from "next/router"

export default function PostAll(){
  const router = useRouter()
  //http://localhost:3000/post/23/333
  console.log(router.query)//=>all: (2) ['23', '333']
  const {all} = router.query
  return(
    <div>
      <h1>PostAll:{all.join('/')}</h1>
    </div>
  )
}

```

## Sanity 연결하고 데이터 가져오기
```
npm i @sanity/client
```
```js
import sanityClient from '@sanity/client'
```
### getStaticProps
동적 라우팅이 아닌것에 대한 처리.
```js

import styles from '../styles/Home.module.css'

export default function Home({hello}) {
  return (
    <div className={styles.container}>
      <h1>Blog Home{hello}</h1>
    </div>
  )
}

export function getStaticProps(){
  //sanity로 부터 데이터 Get
  return{
    props:{
      hello:'world'
    }
  }
}
```


### getStaticPaths
동적 라우팅에 대한 처리.


## next.config.js
```js
module.exports = {
  reactStrictMode: true,
  trailingSlash: false, // flase : 슬래쉬(/)가 자동으로 없어짐.  / true: 자동으로 생성 
  //환경변수
  env:{
    SANITY_PROJECT_ID:'37hq36es'
  }
    

}

```
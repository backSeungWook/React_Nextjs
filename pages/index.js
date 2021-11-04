
import styles from '../styles/Home.module.css'
import SanityService from '../services/SanityService'
import Header from '../components/Header'
import BlogHradline from '../components/BlogHradline'
import BlogMainPost from '../components/BlogMainPost'
import BlogList from '../components/BlogList'
import Footer from '../components/Footer'


export default function Home({home,posts}) {
  //my-blog-post-test
  const mainPost = posts.find(p => p.slug === home.mainPostUrl)
  const otherPosts = posts.filter(p =>p.slug !== home.mainPostUrl)
  console.log(mainPost)
  console.log(otherPosts)
    
  return (
    <div className={styles.container}>
      <Header />
      <BlogHradline />
      <BlogMainPost {...mainPost} />
      <BlogList posts ={otherPosts} />
      <Footer />
    </div>
  )
}

export async function getStaticProps(){

  const sanityService = new SanityService() 

  const home = await sanityService.getHome()
  const posts = await sanityService.getPosts()

  return{
    props:{
      home,
      posts
      }
  }
}
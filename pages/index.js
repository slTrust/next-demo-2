import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <a href="/posts/first-post">打开first-post,a标签回去first-post，会重新请求</a>
        <br />
        <Link href="/posts/first-post"> Link标签 去 first-post</Link>
      </main>
      <style jsx>{`
        a{
          color:red;
        }
      `}</style>
      <style jsx global>{`
        body{
          background:pink;
        }
      `}</style>
    </div>
  )
}

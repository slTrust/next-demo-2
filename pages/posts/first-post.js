import React from 'react';
import Link from 'next/link'
import styles from 'styles/first-post.module.scss'
import png from 'assets/images/003.png'
console.log(png)
export default function x() {
  return (
    <>
      <div>First Post
      <hr />
        <Link href="/">Link回首页</Link>
        <div className={styles.content}>
          <p>1111</p>
          2222
        </div>
        <img src="/logo.png" />
        <img src={png} />

      </div>
    </>

  )
}
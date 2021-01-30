import React from 'react';
import Link from 'next/link'
import styles from 'styles/first-post.module.css'
export default function x() {
  return (
    <>
      <div>First Post
      <hr />
        <Link href="/">Link回首页</Link>
        <div className={styles.content}>1111</div>
      </div>
    </>

  )
}
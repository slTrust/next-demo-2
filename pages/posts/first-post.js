import React from 'react';
import Link from 'next/link'
export default function x() {
  return (
    <div>First Post
      <hr />
      回到首页
      <hr />
      <a href="/">a标签回首页，会重新请求</a>
      <hr />
      <Link href="/">Link回首页</Link>
    </div>
  )
}
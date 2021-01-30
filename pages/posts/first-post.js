import React, { useCallback } from 'react';
import Link from 'next/link'
console.log('组件执行了')
// console.log(window)  // 放开注视回报错，因为Node里没有 window
export default function x() {
  const clickMe = useCallback(() => {
    console.log('btn click,只在浏览器执行，不再Node控制台显示')
    console.log(window)
  }, [])
  return (
    <div>First Post
      <hr />
      回到首页
      <hr />
      <a href="/">a标签回首页，会重新请求</a>
      <hr />
      <Link href="/">Link回首页</Link>
      <button onClick={clickMe}>btn</button>
    </div>
  )
}
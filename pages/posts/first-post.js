import React, { useCallback } from 'react';
import Link from 'next/link'
import Head from 'next/head'
export default function x() {
  return (
    <>
      <Head>
        <title>我的FirstPost</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
      </Head>
      <div>First Post
      <hr />
        <Link href="/">Link回首页</Link>
      </div>
    </>

  )
}
import React from 'react';
import Link from 'next/link';
export default function x() {
  return (
    <>
      <div>home
        <Link href="/posts/index_bsr">posts BSR</Link>
        <Link href="/posts/index_ssg">posts SSG</Link>
      </div>
    </>
  )
}
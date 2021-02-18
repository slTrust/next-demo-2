import React from 'react';
import Link from 'next/link';
import {GetServerSideProps} from "next";
import {getDatabaseConnection} from '../lib/getDatabaseConnection';
console.log('执行了 index.tsx')
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

export const getServerSideProps:GetServerSideProps = async (context)=>{
    const connect = await getDatabaseConnection()// 第一次链接能不能用 get
    console.log('connect');
    return {
        props: {
            aaa:'aaaa'
        }
    }

}
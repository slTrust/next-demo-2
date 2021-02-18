import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {getDatabaseConnection} from '../lib/getDatabaseConnection';
console.log('执行了 index.tsx')
import {Post} from '../src/entity/Post';

type Props = {
  posts: Post[];
}

const index: NextPage<Props> = (props) => {
  const {posts} = props;
  return (
    <>
      <div>
          {posts.map(post => <div key={post.id}>{post.title}</div>)}
      </div>
    </>
  )
}
export default index;

export const getServerSideProps:GetServerSideProps = async (context)=>{
  const connection = await getDatabaseConnection()// 第一次链接能不能用 get
  const posts = await connection.manager.find(Post)
  return {
    props: {
      posts:JSON.parse(JSON.stringify(posts))
    }
  }
}
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
type Props = {
  browser: string;
}
const Index_SSR: NextPage<Props> = (props) => {
  return (
    <>
      <div>SSR服务端生成
        你的浏览器是：{props.browser}
      </div>
    </>
  )
}

export default Index_SSR;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers['user-agent'];
  return {
    props: {
      browser: ua
    }
  }
}
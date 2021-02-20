import '../styles/globals.scss'
import 'github-markdown-css'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <div className="hjx">
      <Head>
        <title>我的Blog</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </div>)
}

export default App

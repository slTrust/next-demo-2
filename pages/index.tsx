import {NextPage} from 'next';
import Link from 'next/link';


const Home: NextPage = () => {
    return (
        <>
            <div className="cover">
                <img src="/logo.png" alt=""/>
                <h1>我的博客</h1>
                <p>next.js搭建的博客</p>
                <p><Link href="/posts"><a>文章列表</a></Link></p>
            </div>
       <style jsx>{`
      .cover{
        height: 100vh;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      `}</style>
        </>
    );
};

export default Home;


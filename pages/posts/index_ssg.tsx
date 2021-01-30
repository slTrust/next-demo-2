import getPosts, { Post } from "lib/posts";
import Link from 'next/link';
import { NextPage } from "next";

interface Props {
  posts: Post[]
}
const PostsIndex: NextPage<Props> = (props) => {
  // 这个 posts是 前端/后端 都可以拿到的
  const { posts } = props;
  return (
    <div>
      Post Index(SSG)
      {posts.map(p => {
        return (
          <div key={p.id}>
            <Link href={`/posts/${p.id}`}>{p.id}</Link>
          </div>
        )
      })}
    </div >
  )
}

export default PostsIndex;

export const getStaticProps = async () => {
  const posts = await getPosts()
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}
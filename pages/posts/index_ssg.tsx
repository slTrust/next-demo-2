import { Post } from "hooks/usePosts";
import getPosts from "lib/posts";
import { NextPage } from "next";

interface Props {
  posts: Post[]
}
const PostsIndex: NextPage<Props> = (props) => {
  // 这个 posts是 前端/后端 都可以拿到的
  const { posts } = props;
  console.log(posts)
  return (
    <div>
      Post Index(SSG)
      {posts.map(p => {
        return (
          <div key={p.id}>{p.id}</div>
        )
      })}
    </div>
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
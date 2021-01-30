import { usePosts } from "hooks/usePosts";
import { NextPage } from "next";


const PostsIndex: NextPage = () => {
  const { isLoading, isEmpty, posts } = usePosts();
  return (
    <div>
      Post Index
      {isLoading ? <div>加载中...</div> :
        isEmpty ? <div>没有文章！</div> :
          posts.map(post => {
            return (<div key={post.id}>
              {post.id}
            </div>)
          })
      }
    </div>
  )
}

export default PostsIndex;
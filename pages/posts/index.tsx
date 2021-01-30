import { NextPage } from "next";
import axios from 'axios';
import { useEffect, useState } from "react";

type Posts = {
  id: string;
  date: string;
  title: string;
  content: string;
}
const PostsIndex: NextPage = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios.get('/api/v1/posts2').then(response => {
      setTimeout(() => {
        setPosts(response.data)
        if (response.data.length === 0) {
          setIsEmpty(true);
        }
        setIsLoading(false)
      }, 3000);
    })
  }, [])
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
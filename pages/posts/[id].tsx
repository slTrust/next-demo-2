import { getPost, getPostIds, Post } from "lib/posts";
import { NextPage } from "next";

type Props = {
  post: Post
}
const postShow: NextPage<Props> = (props) => {
  const { post } = props
  return (
    <div>
      文章详情
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.htmlContent }}>
      </article>

    </div>
  )
}

export default postShow;

export const getStaticPaths = async () => {
  const idList = await getPostIds();
  console.log(idList)
  return {
    paths: idList.map(id => ({ params: { id: id } })),
    fallback: false
  }
}

export const getStaticProps = async (x: any) => {
  const id = x.params.id;
  const post = await getPost(id);
  return {
    props: {
      post: JSON.parse(JSON.stringify(post))
    }
  }
}
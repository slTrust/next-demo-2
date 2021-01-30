import fs, { promises as fsPromise } from 'fs';
import path from "path";
import matter from 'gray-matter';
const markdownDir = path.join(process.cwd(), 'markdown')

export type Post = {
  id: string;
  date: string;
  title: string;
  content: string;
}
const getPosts = async () => {
  const fileNames = await fsPromise.readdir(markdownDir)
  const posts = fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName)
    const id = fileName.replace(/\.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');
    const { data: { title, date } } = matter(text);
    return { id, title, date }
  })
  return posts;
}

export default getPosts;

export const getPost = async (id: string) => {
  const fullPath = path.join(markdownDir, id + '.md')
  const text = fs.readFileSync(fullPath, 'utf-8');
  const { data: { title, date }, content } = matter(text);
  return { id, title, date, content }
}

export const getPostIds = async () => {
  const fileNames = await fsPromise.readdir(markdownDir)
  return fileNames.map(filename => filename.replace(/\.md$/g, ''))
}

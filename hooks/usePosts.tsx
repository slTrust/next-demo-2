import { useState, useEffect } from "react";
import axios from 'axios';

type Posts = {
  id: string;
  date: string;
  title: string;
  content: string;
}

export const usePosts = () => {
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
  return {
    posts,
    setPosts,
    isLoading,
    setIsLoading,
    isEmpty,
    setIsEmpty
  }
}
import { useState, useEffect } from "react";
import axios from "axios";

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  async function fetchPosts() {
    try {
      setIsError(null);
      setIsLoading(true);
      const res = await axios.get("http://localhost:4000/posts");
      setPosts(res.data.data);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, isLoading, isError, fetchPosts };
}

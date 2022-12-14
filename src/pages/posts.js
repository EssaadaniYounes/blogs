import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import { fetch } from '../utils/fetch'
function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetch({ data: {} });
      setData(posts)
    }
    getPosts();
  }, []);
  return (
    <div className="grid">
      {data.length > 0 && data.map(post =>
        <Post post={post} key={post.id} />
      )}

    </div>

  )
}

export default Posts
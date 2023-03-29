import React, { useState, useEffect } from "react";
import axios from "axios";

function Get() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(result.data);
    }

    fetchData();
  }, []);

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}

export default Get;

'use client';

import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function CSRPage() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="container">
      <h1>CSR Page</h1>

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.slice(0, 5).map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}
export const dynamic = 'force-dynamic';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Posts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log("Fetching posts on server...");

  return (
    <div className="container">
      <h1>Posts (SSR)</h1>

      {data.slice(0, 5).map((post: Post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

// runs on every request, gets fresh data (SSR)
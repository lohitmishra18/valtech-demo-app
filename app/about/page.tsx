export const dynamic = 'force-static'; // Define the page as static (SSG)

export default function About() {
  return (
    <div className="container">
      <h1>About Us (SSG)</h1>
      <p>This page is statically generated.</p>
    </div>
  );
}

// this page is statically generated at build time, not on every request (SSG)
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
      router.push("/login");
    } else {
      setChecked(true);
    }
  }, []);

  if (!checked) return null;

  return (
    <div className="container">
      <div className="topbar">
        <p>Welcome, {localStorage.getItem("userEmail")}</p>
      </div>
      <div className="banner">
        <h1>Welcome to Valtech App</h1>
      </div>      
    </div>
  );
}
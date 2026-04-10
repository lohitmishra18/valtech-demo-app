'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  const handleLogout = () => {
  const confirmLogout = confirm('Are you sure you want to logout?');

  if (confirmLogout) {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    document.cookie = "loggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push('/login');
  }
};

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
        <button className="logoutBtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="banner">
        <h1>Welcome to Valtech App</h1>
      </div>      
    </div>
  );
}
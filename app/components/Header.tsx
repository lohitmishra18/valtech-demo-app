'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    document.cookie =
      'loggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    router.push('/login');
  };

  return (
    <header className="header">
      <div className="nav">
        <h2 className="logo">Valtech Demo App</h2>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <div className="links desktop">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>SSG</Link>
          <Link href="/posts" className={pathname === '/posts' ? 'active' : ''}>SSR</Link>
          <Link href="/csr" className={pathname === '/csr' ? 'active' : ''}>CSR</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
          <span className="linkItem" onClick={handleLogout}>Logout</span>
        </div>
      </div>

      {open && (
        <div className="mobileMenu">
          <Link href="/">Home</Link>
          <Link href="/about">SSG</Link>
          <Link href="/posts">SSR</Link>
          <Link href="/csr">CSR</Link>
          <Link href="/contact">Contact</Link>
          <span className="linkItem" onClick={handleLogout}>Logout</span>
        </div>
      )}
    </header>
  );
}
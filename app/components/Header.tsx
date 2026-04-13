'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="nav">
        <h2>Valtech Demo App</h2>

        <div className="links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>SSG</Link>
          <Link href="/posts" className={pathname === '/posts' ? 'active' : ''}>SSR</Link>
          <Link href="/csr" className={pathname === '/csr' ? 'active' : ''}>CSR</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact Search</Link>
        </div>
      </div>
    </header>
  );
}
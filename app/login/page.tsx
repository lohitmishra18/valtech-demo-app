'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');

  const handleLogin = () => {
  if (!email || !password) {
    setError('Please enter email and password');
    return;
  }

  if (email === 'admin@demo.com' && password === '123456') {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userEmail', email);
    router.push('/');
  } else {
    setError('Invalid credentials');
  }
};

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Login</h1>

      <div className="form">
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        {error && <p className="error">{error}</p>}
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
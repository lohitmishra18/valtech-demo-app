'use client';

import { useState } from 'react';

export default function SearchableList({ data }: any) {
  const [search, setSearch] = useState('');

  const filtered = data.filter((user: any) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="input"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p>Showing {filtered.length} results</p>

      {filtered.length === 0 ? (
        <p>No users found</p>
      ) : (
        filtered.slice(0, 6).map((user: any) => (
          <div key={user.id} className="post">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        ))
      )}
    </div>
  );
}
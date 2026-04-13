export const dynamic = 'force-dynamic';
import SearchableList from '../components/ContactList';

export default async function Contact() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return (
    <div className="container">
      <h1>Contact Directory</h1>
    
      <SearchableList data={data} />
    </div>
  );
}
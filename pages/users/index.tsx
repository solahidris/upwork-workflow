import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Users() {
  return (
    <div className="bg-[#1B202A] min-h-[100vh] text-white">

      <Navbar />
      <p>Users Page</p>
      <Link href="/">Dashboard</Link>
      <Link href="/users">Users</Link>
      <Link href="/users/new">New User</Link>
    </div>
  );
}

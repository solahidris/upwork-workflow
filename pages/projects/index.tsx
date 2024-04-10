import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Projects() {
  return (
    <div className="bg-[#1B202A] min-h-[100vh] text-white">

      <Navbar />

      <p>Project Page</p>
      <Link href="/">Dashboard</Link>
      <Link href="/users">Users</Link>
      <Link href="/users/new">New User</Link>
    </div>
  );
}

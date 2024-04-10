import { useRouter } from 'next/router';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function UsersSlug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="bg-[#1B202A] min-h-[100vh] text-white">

      <Navbar />
      
      <p>User Profile: {slug}</p>
      <Link href="/">Dashboard</Link>
      <Link href="/users">Users</Link>
      <Link href={`/users/${slug}/edit`}>Edit Profile</Link>
    </div>
  );
}

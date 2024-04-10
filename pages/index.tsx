import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black min-h-[100vh] text-white p-8">
      <p>hi</p>
      <Link href="/">Home</Link>
    </div>
  );
}

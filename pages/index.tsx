import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#1B202A] min-h-[100vh] text-white">
      {/* <p>Dashboard Page</p> */}
      
      <Navbar />

    </div>
  );
}

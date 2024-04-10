import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";

export default function Navbar() {
  return (
    <div className="bg-black min-h-[100vh] w-[252px] text-white p-0 flex flex-col gap-5">

      <Image src="/Logo.png" width={100} height={100} alt="logoNavbar" className="px-4 w-[143px] pt-5" />
      
      <div className="flex flex-col text-[14px] gap-1">

        <div className="flex items-center gap-3 px-3 py-2">
          <Image src="/Home.png" width={1000} height={1000} alt="HomeNavbar" className="w-6 h-6 p-[3px] text-white" />
          <Link href="/">Dashboard</Link>
        </div>

        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-3">
            <Image src="/Icon.png" width={1000} height={1000} alt="IconNavbar" className="w-6 h-6 p-[3px] text-white" />
            <Link href="/users">Users</Link>
          </div>
          <Badge>3</Badge>
        </div>

        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-3">
            <Image src="/Home.png" width={1000} height={1000} alt="HomeNavbar" className="w-6 h-6 p-[3px] text-white" />
            <Link href="/projects">Projects</Link>
          </div>
          <Badge>4</Badge>
        </div>
        
        {/* Test - Use Later */}
        {/* <Link href="/users/[slug]" as="/users/someusername">Users.slug</Link> */}
        {/* Test - Use Later */}
        {/* <Link href="/projects/[slug]" as="/projects/someproject">Projects.slug</Link> */}
      </div>
    </div>
  );
}

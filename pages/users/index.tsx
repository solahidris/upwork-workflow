import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <div className="bg-[#1B202A] min-h-[100vh] text-white flex">
      {/* <p>Dashboard Page</p> */}

      <Navbar />

      <div className="flex flex-col w-full pl-[25px] pr-[46px] gap-6">
        {/* Page Title */}
        <div className="flex justify-between items-center py-[22px]">
          <p className="text-[24px] font-semibold">
            Users <span className="text-gray-400 pl-2">44 684</span>
          </p>
          <Button>Create new User</Button>
        </div>

        {/* Cards Mini */}
        <div className="flex flex-col gap-[14px]">
          {/* Cards Top*/}
          <div className="flex justify-center gap-5 w-full">
            {/* Left - 2 Rpws */}
            <div className="grid grid-cols-3 gap-5 w-full">
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Active last 30d</span>
                  <div className="flex gap-1">
                    <Image
                      src="/Shape.png"
                      width={1000}
                      height={1000}
                      alt="shapeTitle"
                      className="w-4 h-4"
                    />
                    <Image
                      src="/Shape.png"
                      width={1000}
                      height={1000}
                      alt="shapeTitle"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    20 827
                  </span>
                  <span className="">Wallets made transactions</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span>
                  <span className="font-semibold">15%</span> of all
                </span>
              </Card>

              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-yellow-400">
                    Influencers
                  </span>
                  <Image
                    src="/Shape.png"
                    width={1000}
                    height={1000}
                    alt="shapeTitle"
                    className="w-4 h-4"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    29 203
                  </span>
                  <span className="">3k+ Twitter followers</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span>
                  <span className="font-semibold">25%</span> of all
                </span>
              </Card>

              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div className="flex gap-2 items-center justify-between">
                  <span className="font-semibold">Twitter</span>
                  <Image
                    src="/twitter2-24.png"
                    width={1000}
                    height={1000}
                    alt="shapeTitle"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    15 037
                  </span>
                  <span className="">Profile available</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span>
                  <span className="font-semibold">23%</span> of all users
                </span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Tokens owned</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    128 402
                  </span>
                  <span>Total</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span>
                  <span className="font-semibold">95%</span> of wallets own
                  Tokens
                </span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div className="flex gap-2 items-center justify-between">
                  <span className="font-semibold text-cyan-300">
                    Early adopters
                  </span>
                  <Image
                    src="/twitter2-24.png"
                    width={1000}
                    height={1000}
                    alt="shapeTitle"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    2340
                  </span>
                  <span className="">Particinated in the first wave</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span>
                  <span className="font-semibold">30%</span> of invited by
                  Angelx
                </span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div className="flex gap-2 items-center justify-between">
                  <span className="font-semibold">Email</span>
                  <Image
                    src="/twitter2-24.png"
                    width={1000}
                    height={1000}
                    alt="shapeTitle"
                    className="w-5 h-5"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    3 928
                  </span>
                  <span className="">Contacts available</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span>
                  <span className="font-semibold">4%</span> of all
                </span>
              </Card>
            </div>

            {/* Right Bar Card */}
            <div className="h-full" style={{ width: "calc(33.333% - 10px)" }}>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3 h-full flex flex-col">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">Wallet balance in USD</span>
                  <span className="text-[#A2A8B4]/50">
                    Based on ETH, USDT, USDC, DAI
                  </span>
                </div>

                <div className="flex gap-[13px] text-center grow pt-4 bg-red-3000">
                  <div className="flex flex-col w-full">
                    <span className="text-[11px] pb-1">10k</span>
                    <span
                      className="bg-[#F97316] rounded-[4px]"
                      style={{ height: "100%" }}
                    >
                      .
                    </span>
                    <span className="text-[8px] pt-2">&lt;100</span>
                  </div>
                  <div className="flex flex-col w-full justify-end">
                    <span className="text-[11px] pb-1">6k</span>
                    <span
                      className="bg-[#F97316] rounded-[4px]"
                      style={{ height: "60%" }}
                    >
                      .
                    </span>
                    <span className="text-[8px] pt-2">100-1000</span>
                  </div>
                  <div className="flex flex-col w-full justify-end">
                    <span className="text-[11px] pb-1">3k</span>
                    <span
                      className="bg-[#F97316] rounded-[4px]"
                      style={{ height: "30%" }}
                    >
                      .
                    </span>
                    <span className="text-[8px] pt-2">1k-10k</span>
                  </div>
                  <div className="flex flex-col w-full justify-end">
                    <span className="text-[11px] pb-1">1k</span>
                    <span
                      className="bg-[#F97316] rounded-[4px]"
                      style={{ height: "10%" }}
                    >
                      .
                    </span>
                    <span className="text-[8px] pt-2">10k+</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Table Large */}
        <div className="w-full pb-[37px]">
          <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3 h-[296px] flex flex-col">
            <div className="flex justify-between">
              <div className="flex gap-6">
                <Input
                  className="bg-white/10 border-0"
                  placeholder="Search Users"
                ></Input>
                <span className="bg-white/10 self-center py-2 px-3 rounded-md text-white">
                  Filters
                </span>
                <span className="bg-white/10 self-center py-2 px-3 rounded-md text-white">
                  Sort
                </span>
              </div>
              <div>
                <Button
                  variant="ghost"
                  className=""
                  style={{ fontWeight: 400 }}
                >
                  {" "}
                  <Image
                    src="/twitter2-24.png"
                    width={1000}
                    height={1000}
                    alt="shapeTitle"
                    className="w-5 h-5 mr-2"
                  />
                  Export
                </Button>
              </div>
            </div>

            <div className="flex pt-3 gap-2">
              <Table>
                {/* <TableHeader>header</TableHeader> */}
                <TableHeader>
                  <TableHead>#</TableHead>
                  <TableHead>Contributions</TableHead>
                  <TableHead>Rank ^</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Labels ^</TableHead>
                  <TableHead>Balance, $</TableHead>
                  <TableHead>NFTs</TableHead>
                  <TableHead>Twitter</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead>Contacts</TableHead>
                  <TableHead></TableHead>
                </TableHeader>
                <TableBody>
                  {/* Row 1 */}
                  <TableRow className="border-0 text-white">
                    <TableCell className="text-slate-500">1</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/vercel.svg" className="bg-white" />
                      </Avatar>
                      Svetlana Sav...
                    </TableCell>
                    <TableCell>
                      <Badge className="border-green-400 border text-green-400 bg-green-900 w-7 rounded-lg justify-center">
                        92
                      </Badge>
                    </TableCell>
                    <TableCell>2.4y</TableCell>
                    <TableCell>
                      <Badge className="bg-transparent text-[8px]">
                        <span className="text-red-500 pr-1">@</span>Developer
                      </Badge>
                      <Badge className="bg-transparent text-[8px]">
                        <span className="text-blue-500 pr-1">@</span>Culture
                      </Badge>
                      <Badge className="bg-transparent text-[8px]">
                        <span className="text-yellow-500 pr-1">@</span>ENS
                      </Badge>
                      <Badge className="bg-transparent text-[8px]">
                        <span className="text-green-500 pr-1">@</span>Crypto
                        native
                      </Badge>
                      <Badge className="bg-transparent text-[8px]">
                        <span className="text-fuchsia-500 pr-1">@</span>Gamer
                      </Badge>
                    </TableCell>
                    <TableCell>20.1M</TableCell>
                    <TableCell>1k</TableCell>
                    <TableCell>33.5k</TableCell>
                    <TableCell>
                      <div className="flex">
                      <Avatar className="ml-[-10px] z-10 outline outline-[#252B36] outline-[3px]">
                        <AvatarImage src="/vercel.svg" className="bg-white" />
                      </Avatar>
                      <Avatar className="ml-[-10px] z-20 outline outline-[#252B36] outline-[3px]">
                        <AvatarImage src="/vercel.svg" className="bg-sky-300" />
                      </Avatar>
                      <Avatar className="ml-[-10px] z-30 outline outline-[#252B36] outline-[3px]">
                        <AvatarImage
                          src="/vercel.svg"
                          className="bg-emerald-300"
                        />
                      </Avatar>
                      </div>
                    </TableCell>
                    <TableCell><div className="flex">
                      <Image
                        src="/twitter2-24.png"
                        width={1000}
                        height={1000}
                        alt="shapeTitle"
                        className="w-5 h-5 mr-2"
                      />
                      <Image
                        src="/twitter2-24.png"
                        width={1000}
                        height={1000}
                        alt="shapeTitle"
                        className="w-5 h-5 mr-2"
                      />
                      <Image
                        src="/twitter2-24.png"
                        width={1000}
                        height={1000}
                        alt="shapeTitle"
                        className="w-5 h-5 mr-2"
                      />
                      <Image
                        src="/twitter2-24.png"
                        width={1000}
                        height={1000}
                        alt="shapeTitle"
                        className="w-5 h-5 mr-2"
                      />
                      </div>
                    </TableCell>
                    <TableCell><Button variant="ghost">...</Button></TableCell>
                  </TableRow>
                  {/* Row 2 */}
                  <TableRow className="border-0">
                    <TableCell>cell1</TableCell>
                    <TableCell>cell2</TableCell>
                    <TableCell>cell3</TableCell>
                    <TableCell>cell4</TableCell>
                    <TableCell>cell5</TableCell>
                    <TableCell>cell6</TableCell>
                    <TableCell>cell7</TableCell>
                    <TableCell>cell8</TableCell>
                    <TableCell>cell9</TableCell>
                    <TableCell>cell10</TableCell>
                    <TableCell>cell11</TableCell>
                  </TableRow>
                  {/* Row 3 */}
                  <TableRow className="border-0">
                    <TableCell>cell1</TableCell>
                    <TableCell>cell2</TableCell>
                    <TableCell>cell3</TableCell>
                    <TableCell>cell4</TableCell>
                    <TableCell>cell5</TableCell>
                    <TableCell>cell6</TableCell>
                    <TableCell>cell7</TableCell>
                    <TableCell>cell8</TableCell>
                    <TableCell>cell9</TableCell>
                    <TableCell>cell10</TableCell>
                    <TableCell>cell11</TableCell>
                  </TableRow>
                </TableBody>
                {/* <TableFooter>footer</TableFooter> */}
                {/* <TableCaption>caption</TableCaption> */}
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

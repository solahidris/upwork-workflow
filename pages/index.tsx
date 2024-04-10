import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="bg-[#1B202A] min-h-[100vh] text-white flex">
      {/* <p>Dashboard Page</p> */}

      <Navbar />

      <div className="flex flex-col w-full pl-[25px] pr-[46px] gap-6">
        {/* Page Title */}
        <p className="py-[22px] pl-[41px] text-[24px] font-semibold">
          Welcome 👋
        </p>

        {/* Cards Mini */}
        <div className="flex flex-col gap-[14px]">
          {/* Cards Top*/}
          <div className="flex justify-center gap-5 w-full">
            {/* Left - 2 Rpws */}
            <div className="grid grid-cols-3 gap-5 w-full">
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div className="flex gap-2 items-center">
                  <span className="font-semibold">Total Invested</span>
                  <Image src="/Shape.png" width={1000} height={1000} alt="shapeTitle" className="w-4 h-4"/>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    $ 370.3K
                  </span>
                  <span className="">Wallets made transactions</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span><span className="font-semibold">3%</span> of all</span>
              </Card>

              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div className="flex gap-2 items-center">
                  <span className="font-semibold">Total balance connected</span>
                  <Image src="/Shape.png" width={1000} height={1000} alt="shapeTitle" className="w-4 h-4"/>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    $ 208.2 M
                  </span>
                  <span className="">On Ethereum & BNB</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span><span className="font-semibold">$694.7</span> wallet balance average</span>
              </Card>

              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Total Users</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    120
                  </span>
                  <span className="">+23%</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span className="">95% have 10+ NFTs</span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Total Projects</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    12
                  </span>
                  <span>are live</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span><span className="font-semibold">50%</span> have been completed</span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div className="flex gap-2 items-center justify-between">
                  <span className="font-semibold">Twitter Connected</span>
                  <Image src="/twitter2-24.png" width={1000} height={1000} alt="shapeTitle" className="w-5 h-5"/>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[24px] font-semibold">
                    15 037
                  </span>
                  <span className="">Contacts available</span>
                </div>
                <div className="pt-[14px] pb-[7.5px]">
                  <Separator className="bg-[#465065]" />
                </div>
                <span><span className="font-semibold">23%</span> of all</span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Influencers</span>
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
                <span><span className="font-semibold">25%</span> of all</span>
              </Card>

            </div>

            {/* Right Bar Card */}
            <div className="h-full" style={{ width: "calc(33.333% - 10px)" }}>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3 h-[296px] flex flex-col">
                <div className="flex gap-2 items-center">
                  <span className="font-semibold">Wallet balance in USD</span>
                  <Image src="/Shape.png" width={1000} height={1000} alt="shapeTitle" className="w-4 h-4"/>
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

          {/* Cards Bottom*/}
          <div className="flex justify-center gap-5 w-full">
            {/* Left - 2 Rpws */}
            <div className="grid grid-cols-3 gap-5 w-full">
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Influencers</span>
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
                <span className="">25% of all</span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Influencers</span>
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
                <span className="">25% of all</span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Influencers</span>
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
                <span className="">25% of all</span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Influencers</span>
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
                <span className="">25% of all</span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Influencers</span>
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
                <span className="">25% of all</span>
              </Card>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3">
                <div>
                  <span className="font-semibold">Influencers</span>
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
                <span className="">25% of all</span>
              </Card>

              
            </div>

            {/* Right Bar Card */}
            <div className="h-full" style={{ width: "calc(33.333% - 10px)" }}>
              <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3 h-[296px] flex flex-col">
                <div className="flex gap-2 items-center">
                  <span className="font-semibold">Followers Repartition</span>
                  <Image src="/Shape.png" width={1000} height={1000} alt="shapeTitle" className="w-4 h-4"/>
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

        {/* Card Large */}
        <div className="w-full pb-[37px]">
          <Card className="bg-[#252B36] border-0 text-[#A2A8B4] text-[14px] px-5 py-3 h-[296px] flex flex-col">
            <div>
              <span className="font-semibold">Personas</span>
            </div>

            <div className="flex pt-3 gap-2">
              <div className="flex flex-col text-[11px] pb-[33px] gap-[32.25px] items-end">
                <span>40k</span>
                <span>30k</span>
                <span>20k</span>
                <span>10k</span>
                <span>0</span>
              </div>
              <div className="flex gap-[13px] text-center grow pt-4 pb-3">
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">37.2k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "93%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">31.5k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "78%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">26.4k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "66%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">22.8k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "57%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">17.9k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "45%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">13.5k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "34%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">37.2k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "29%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">4.7k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "12%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">2.8k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "7%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">2.6k</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "6.5%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">983</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "2.4%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
                <div className="flex flex-col w-full justify-end">
                  <span className="text-[11px] pb-1 text-white">0</span>
                  <span
                    className="bg-[#32D74B] rounded-[4px]"
                    style={{ height: "0.1%" }}
                  >
                    .
                  </span>
                  <span className="text-[8px] pt-2">Voter</span>
                </div>
                
              </div>
            </div>
          </Card>
        </div>

      </div>

    </div>
  );
}

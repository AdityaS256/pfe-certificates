import Image from "next/image";
import Navbar from "@/components/navbar";
import About from "@/components/about";
import { Raleway, JetBrains_Mono } from "next/font/google";

const raleway = Raleway({ subsets: ['latin']});
const jetbrains_mono = JetBrains_Mono({ subsets: ['latin']})

export default function Home() {
  return (
    <div className="bg-[#101010] flex flex-col w-screen h-full">
      <Navbar/>
      <div className="border-b border-white/15 mx-12 p-6 pt-4">
        <p className={`${jetbrains_mono.className} text-sm py-2 bg-gradient-to-r from-[#9046D4] to-[#FFA7FB] bg-clip-text text-transparent max-w-[90px]`}>ACM MPSTME</p>
        <p className={`${raleway.className} text-2xl`}>PFE - Participation Certificate</p>
      </div>
      <main className="flex m-8 justify-center gap-8">
        <Image className="border-2 border-[#9046D4]/50 rounded-2xl shadow-[0_5px_50px_-15px] shadow-[#9046D4]/50" src="/certificate.png" width="600" height="500"/>
        <About />
      </main>
    </div>
  );
}

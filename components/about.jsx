import { Raleway, JetBrains_Mono } from "next/font/google";

const raleway = Raleway({ subsets: ['latin']});
const jbm = JetBrains_Mono({subsets: ['latin']});

const About = () => {
    return (
        <div className={`${raleway.className} flex flex-col justify-between max-w-[400px] border border-white/15 bg-white/5 p-6 rounded-2xl`}>
            <div>
                <div className="pb-5 border-b border-white/50 mb-5">
                    <p className={`text-2xl`}>About this <span className="bg-gradient-to-r from-[#9046D4] to-[#FFA7FB] bg-clip-text text-transparent max-w-[120px]">Certificate</span></p>
                    <p className={` ${jbm.className} text-xs bg-gradient-to-r from-[#9046D4] to-[#FFA7FB] bg-clip-text text-transparent max-w-[100px]`}>ID: 1234567</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-md font-bold">PFE - Participation Certificate 2024</h3>
                        <p className="text-xs text-[#888888] line-clamp-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-md font-bold">Share this certificate</h3>
                        <div className="flex gap-2">
                            <p className="p-2 border px-4 rounded-md text-xs text-white border-[#9046D4]/25">
                                https://mpstmeacm.com/certificates/1234567
                            </p>
                            <button className="text-xs bg-[#101010] border border-[#9046D4]/50 px-4 rounded-md text-white">Copy</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-gradient-to-b from-[#be6ee4] to-[#FFA7FB] font-bold border border-[#9046D4] text-black p-2 rounded-md">Download Certificate</button>
            {/* <button className="bg-[#101010] border border-[#9046D4]/50 font-bold text-white p-2 rounded-md">
                <span className="bg-gradient-to-r from-[#9046D4] to-[#FFA7FB] bg-clip-text text-transparent max-w-[1200px]">
                    Download Certificate
                </span>
            </button> */}
        </div>
    )
}

export default About;
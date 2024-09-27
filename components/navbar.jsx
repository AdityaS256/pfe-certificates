import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-between p-3 px-10 m-3 border border-white/25 bg-white/5 rounded-lg">
            <Image src="/acm_pfe.svg" width="60" height="60"/>
            <Image src="/trc.svg" width="60" height="60" />
        </div>
    )
}

export default Navbar;
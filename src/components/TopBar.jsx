import Image from "next/image";
import logo from "../../public/icon/LOGO.svg";
import Link from "next/link";
const Topbar = () => {
    return (
        <div className="w-full min-h-[63px] lg:min-h-[83px] bg-[#006719] flex items-center justify-center h-16 relative">
            {/* Hamburger menu icon - chỉ hiện trên mobile */}
            <div className="absolute left-4 block md:hidden text-[#FED304] text-2xl">
                <button>
                    <span>&#9776;</span>
                </button>
            </div>
            {/* Logo ở giữa */}
            <div className="flex justify-center items-center max-w-[200px] lg:max-w-full">
                <Link href="/">
                    <Image src={logo} alt="logo" />
                </Link>
            </div>
        </div>
    );
};

export default Topbar;
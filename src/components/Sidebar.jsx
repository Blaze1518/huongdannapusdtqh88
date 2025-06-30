"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search } from 'lucide-react';

const menu = [
    {
        title: "Tải app BINANCE",
        children: [
            { title: "Hình ảnh", href: "/tai-app/anh" },
            { title: "Video", href: "/tai-app/video" }
        ],
    },
    {
        title: "Đăng ký tài khoản USDT",
        href: "/dang-ky",
        children: [],
    },
    {
        title: "Liên kết ví USDT",
        href: "/lien-ket-vi",
        children: [],
    },
    {
        title: "Rút tiền về ngân hàng",
        href: "/rut-tien-ngan-hang",
        children: [],
    },
    {
        title: "Nạp tiền",
        href: "/nap-tien",
        children: [],
    },
    {
        title: "Rút tiền",
        href: "/rut-tien",
        children: [],
    },
];

const Sidebar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(-1);

    return (
        <div className="max-w-[490px] h-[947px] bg-[url('/bg-sidebar.svg')] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg p-7 text-white">
            {/* Logo */}
            <div className="flex items-center justify-center mx-9 mt-3 mb-7">
                <Image
                    src="/icon/logo.svg"
                    alt="logo"
                    width={357}
                    height={50}
                    priority
                    className="w-[357px] h-[50px] object-contain"
                />
            </div>
            {/* Search box */}
            <div className="mb-2 relative mx-4">
                <input
                    type="text"
                    placeholder="Tìm Kiếm"
                    className="text-[18px] bg-white font-bold w-full rounded-full px-4 py-2.5 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Search />
                </span>
            </div>
            {/* Menu */}
            <div className="space-y-2">
                {menu.map((item, idx) => {
                    // Kiểm tra highlight
                    let isActive = false;
                    if (item.children.length > 0) {
                        isActive = item.children.some(child => child.href === pathname);
                    } else if (item.href) {
                        isActive = item.href === pathname;
                    }
                    // Render
                    return (
                        <div key={item.title} className="relative">
                            {item.children.length > 0 ? (
                                <>
                                    <button
                                        className={`cursor-pointer w-full flex justify-between items-center text-[21px] font-bold py-2 px-3 focus:outline-none ${isActive ? "text-[#FED304]" : "text-white"}`}
                                        onClick={() => setOpen(open === idx ? -1 : idx)}
                                        type="button"
                                    >
                                        <span>{item.title}</span>
                                        <span className="ml-2">
                                            <Image
                                                src={open === idx ? "/icon/UpStroke.svg" : "/icon/DownStroke.svg"}
                                                alt={open === idx ? "Mở" : "Đóng"}
                                                width={22}
                                                height={13}
                                            />
                                        </span>
                                    </button>
                                    {/* Children */}
                                    {open === idx && (
                                        <div className="pl-4 flex flex-col space-y-1">
                                            <div
                                                className="relative flex justify-center items-center"
                                                style={{
                                                    opacity: 0.8,
                                                    mixBlendMode: "color-dodge",
                                                    transform: "scaleY(-1)",
                                                }}
                                            >
                                                <img
                                                    src="/icon/divider.svg"
                                                    alt="divider"
                                                    style={{ width: "400px", height: "29.55px" }}
                                                    className="pointer-events-none select-none"
                                                    draggable={false}
                                                />
                                            </div>
                                            {item.children.map((child, cidx) => (
                                                <div key={child.title} className="flex flex-col">
                                                    <Link
                                                        href={child.href}
                                                        className={`text-[21px] font-bold px-9 cursor-pointer hover:text-[#FED304] ${pathname === child.href ? "text-[#FED304]" : "text-white"}`}
                                                    >
                                                        {child.title}
                                                    </Link>
                                                    {/* Divider cho child, không hiện dưới child cuối cùng */}
                                                    {cidx < item.children.length - 1 && (
                                                        <div
                                                            className="relative flex justify-center items-center"
                                                            style={{
                                                                opacity: 0.8,
                                                                mixBlendMode: "color-dodge",
                                                                transform: "scaleY(-1)",
                                                            }}
                                                        >
                                                            <img
                                                                src="/icon/divider.svg"
                                                                alt="divider"
                                                                style={{ width: "400px", height: "29.55px" }}
                                                                className="pointer-events-none select-none"
                                                                draggable={false}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href || "#"}
                                    className={`w-full flex justify-between items-center text-[21px] font-bold py-2 px-3 focus:outline-none ${isActive ? "text-[#FED304]" : "text-white"}`}
                                >
                                    <span>{item.title}</span>
                                </Link>
                            )}
                            {/* Divider cho cha, không hiện dưới mục cuối */}
                            {idx < menu.length - 1 && (
                                <div
                                    className="relative flex justify-center items-center"
                                    style={{
                                        opacity: 0.8,
                                        mixBlendMode: "color-dodge",
                                        transform: "scaleY(-1)",
                                    }}
                                >
                                    <img
                                        src="/icon/divider.svg"
                                        alt="divider"
                                        style={{ width: "400px", height: "29.55px" }}
                                        className="pointer-events-none select-none"
                                        draggable={false}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
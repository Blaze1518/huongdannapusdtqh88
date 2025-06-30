import PageHeaderWithBack from "@/components/PageHeaderWithBack";
import Image from "next/image";

export const metadata = {
    title: "Tải app Binance - QQ88",
    description: "Hướng dẫn tải app Binance chi tiết cho người mới tại QQ88.",
};

const steps = [
    {
        img: "/image/step1.svg",
        caption: "BƯỚC 1: TẠI TRANG CHỦ ẤN CHỌN [ TÀI KHOẢN ]",
    },
    {
        img: "/image/step2.svg",
        caption: "BƯỚC 2: TẠI TRANG CHỦ ẤN CHỌN [ TÀI KHOẢN ]",
    },
    {
        img: "/image/step3.svg",
        caption: "BƯỚC 3: TẠI TRANG CHỦ ẤN CHỌN [ TÀI KHOẢN ]",
    },
    {
        img: "/image/step4.svg",
        caption: "BƯỚC 4: TẠI TRANG CHỦ ẤN CHỌN [ TÀI KHOẢN ]",
    },
];

const videos = [
    {
        thumb: "/image/video1.svg",
        title: "Video hướng dẫn Đăng ký tài khoản USDT",
    },
    {
        thumb: "/image/video1.svg",
        title: "Video hướng dẫn Đăng ký tài khoản USDT",
    },
    {
        thumb: "/image/video1.svg",
        title: "Video hướng dẫn Đăng ký tài khoản USDT",
    },
];

const Video = () => {
    return (
        <div className="flex flex-col">
            {/* Tiêu đề mobile */}
            <div className="md:hidden flex items-center justify-center mb-4">
                <PageHeaderWithBack title="VIDEO HƯỚNG DẪN USDT" />
            </div>
            {/* Danh sách video desktop */}
            <div className="hidden md:flex items-center justify-center flex-row w-full gap-8 p-10">
                <div className="flex row items-center" style={{ height: '421px' }}>
                    <Image
                        src="/image/video1.svg"
                        alt="video"
                        width={1000}
                        height={484}
                        style={{ objectFit: 'cover', height: '484.812px', width: 'auto' }}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    {videos.map((v, idx) => (
                        <div
                            key={v.title + idx}
                            className="flex flex-col items-center w-[240px] text-center"
                        >
                            <Image
                                src={v.thumb}
                                alt={v.title}
                                width={240}
                                height={135}
                                className="object-cover rounded-md select-none"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Danh sách video mobile */}
            <div className="md:hidden flex flex-col w-full">
                {/* Video lớn */}
                <div className="w-full mb-2">
                    <Image
                        src="/image/video1.svg"
                        alt="video"
                        width={600}
                        height={340}
                        className="w-full h-auto object-cover rounded-md select-none"
                        draggable={false}
                    />
                </div>
                {/* Tiêu đề video lớn */}
                <span className="block font-bold text-[14px] text-black/80 text-start mb-4">
                    Video hướng dẫn Đăng ký tài khoản USDT
                </span>
                {/* Danh sách video nhỏ */}
                <div className="grid grid-cols-2 gap-4">
                    {videos.map((v, idx) => (
                        <div
                            key={v.title + idx}
                            className="flex flex-col items-center w-full text-center"
                        >
                            <Image
                                src={v.thumb}
                                alt={v.title}
                                width={180}
                                height={100}
                                className="object-cover rounded-md select-none w-full"
                                draggable={false}
                            />
                            <span className="text-[12px] font-medium text-black/80 truncate w-full block mt-1">
                                {v.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Tiêu đề */}
            <div className="hidden md:flex items-center justify-center mb-6">
                <h1 className="text-[32px] font-bold text-green-800 uppercase text-center leading-tight">
                    Hướng dẫn sử dụng usdt
                </h1>
            </div>
            {/* Danh sách bước */}
            <div className="hidden md:flex flex-wrap justify-center gap-8 mb-10">
                {steps.map((step, idx) => (
                    <div
                        key={step.caption + idx}
                        className="flex flex-col items-center w-[240px] text-center"
                    >
                        <Image
                            src={step.img}
                            alt={`Bước ${idx + 1}: ${step.caption}`}
                            width={240}
                            height={450}
                            className="mb-3 object-contain select-none"
                            draggable={false}
                            priority={idx === 0}
                        />
                        <span className="text-[14px] font-bold bg-green-700 text-white py-3 px-4 rounded-md leading-tight">
                            {step.caption}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Video;
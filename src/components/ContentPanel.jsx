import Image from "next/image";

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

const ContentPanel = () => {
    return (
        <div className="flex flex-col">
            {/* Tiêu đề */}
            <div className="flex items-center justify-center mb-6">
                <span className="text-[32px] font-bold text-green-800 uppercase text-center leading-tight">
                    Hướng dẫn sử dụng usdt
                </span>
            </div>
            {/* Danh sách bước */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
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
            {/* Tiêu đề video */}
            <div className="flex items-center justify-center mb-6">
                <span className="text-[32px] font-bold text-green-800 uppercase text-center leading-tight">
                    Video hướng dẫn usdt
                </span>
            </div>
            {/* Danh sách video */}
            <div className="flex flex-wrap justify-center gap-8">
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
                            className="mb-2 object-cover rounded-md select-none"
                            draggable={false}
                        />
                        <span className="text-[14px] font-medium text-black/80">{v.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentPanel;
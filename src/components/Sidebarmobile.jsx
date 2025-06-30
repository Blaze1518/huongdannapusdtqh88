import Card from "./Card";

const cardData = [
    {
        image: "/image/download-binance-app.svg",
        title: "Tải app binance",
        href: "/tai-app/anh",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    // Thêm các card khác ở đây
    {
        image: "/image/register-usdt-account.svg",
        title: "Đăng ký tài khoản usdt",
        href: "/dang-ky",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        image: "/image/link-wallet.svg",
        title: "Liên kết ví",
        href: "/lien-ket-vi",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        image: "/image/deposit-money.svg",
        title: "Nạp tiền",
        href: "/nap-tien",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        image: "/image/withdraw-to-bank.svg",
        title: "Rút tiền về ngân hàng",
        href: "/rut-tien-ngan-hang",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        image: "/image/withdraw-money.svg",
        title: "Rút tiền",
        href: "/rut-tien",
        videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
];

const Sidebarmobile = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full flex justify-center ">
                <span className="text-[#009224] text-[24px] font-bold text-center uppercase">
                    Hướng dẫn sử dụng usdt
                </span>
            </div>
            <div className="grid grid-cols-1 min-[375px]:grid-cols-2 gap-4 mt-4 px-2 w-full">
                {cardData.map((card, idx) => (
                    <Card key={idx} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Sidebarmobile;

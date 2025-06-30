import Marquee from "react-fast-marquee";
import Image from "next/image";

const notifications = [
    "QQ88 ✅✅ thương hiệu uy tín, sản phẩm đa dạng, an ninh bảo mật, giao dịch nhanh chóng, dịch vụ khách hàng chuyên nghiệp 24/7.",
    "🔥🔥BÙNG NỔ CHUỖI SỰ KIỆN: 💛💛 SINH NHẬT VÀNG QQ88 (Bắt đầu từ ngày 01/06/2025 - 30/06/2025) : 🎁SN01: SINH NHẬT VÀNG - RƯỚC NGÀN ƯU ĐÃI 🎁SN02: CƯỢC CÀNG CAO ƯU ĐÃI CÀNG LỚN - THƯỞNG TỚI 128,888K 🎁SN03: CƯỢC THẢ GA - HOÀN TRẢ CỰC ĐÃ 🎁SN04: NẠP 50 TẶNG 50 - NỔ HŨ BẮN CÁ MỖI NGÀY 🎁QQ88VIP: ĐẲNG CẤP LỊCH SỰ SANG TRỌNG - HƯỞNG THỤ DỊCH VỤ GIAI NHÂN TỪ A-Á",
    "Link tổng chính thức của chúng tôi là: https://www.qq8827.com/ ( PC ), 52999.com ( Mobile ) ✅ Hotline: 0908667888 ✅ Gmail: admin@QQ88.com 💥 Seri chuỗi sự kiện Sinh nhật Vàng QQ88 bắt đầu từ ngày 01/06/2025-30/06/2025 💥 Đẳng cấp, Lịch sự, Sang trọng-Hưởng thụ dịch vụ giai nhân từ A-Á 💥Xem Live ngay, rinh ngay Quà HOT(Thứ 4,6 và Chủ nhật hàng tuần) 💥Nạp đầu tặng 100% Nổ hũ bắn cá 💥 Hội viên VIP đầu tư một lần Lãi suất trọn đời 💥 Tuyển Đại Lý cấp 1 triết khấu cao💥Các khuyến lớn sẽ được QQ88 phát đều đặn hàng tháng vào các ngày 08-18-28 hàng tháng! 🧧 "
];

const NotificationBar = () => (
    <div className="w-full bg-green-800 text-white h-10 md:h-12 flex items-center px-2">
        <span className="flex items-center mr-2 shrink-0" aria-label="Thông báo">
            <Image src="/icon/speaker.svg" alt="Thông báo" width={20} height={20} />
        </span>
        <Marquee
            pauseOnHover
            gradient={false}
            speed={40}
            className="flex-1 min-w-0"
            aria-label="Thanh thông báo"
        >
            {notifications.map((item, idx) => (
                <span
                    key={idx}
                    className="mx-4 md:mx-8 text-xs md:text-sm whitespace-nowrap"
                >
                    {item}
                </span>
            ))}
        </Marquee>
    </div>
);

export default NotificationBar;
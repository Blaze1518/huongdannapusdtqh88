"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftCircle } from "lucide-react"; // hoặc dùng icon khác bạn thích

const PageHeaderWithBack = ({ title }) => {
    const router = useRouter();

    return (
        <div className="flex items-center gap-2 py-2">
            <button
                onClick={() => router.back()}
                aria-label="Quay lại"
                className="text-green-700 hover:text-green-900"
            >
                <ArrowLeftCircle size={24} />
            </button>
            <h1 className="text-[22px] md:text-[28px] font-bold text-green-700 uppercase">
                {title}
            </h1>
        </div>
    );
};

export default PageHeaderWithBack;
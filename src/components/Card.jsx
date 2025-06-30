import Image from 'next/image';
import Link from 'next/link';

const Card = ({ image, title, videoLink, href }) => {
    // Phần ảnh và tiêu đề
    const mainContent = (
        <div className="flex flex-col items-center gap-2">
            <Image src={image} alt={title} width={121} height={84} />
            <div className="text-[12px] font-bold text-[#806800] text-center uppercase whitespace-nowrap overflow-hidden w-full">
                {title}
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center gap-2 p-2 bg-white rounded-xl border border-green-400 shadow-md w-full mx-auto">
            {href ? (
                <Link href={href} className="w-full">{mainContent}</Link>
            ) : mainContent}
            {videoLink && (
                <a href={videoLink} target="_blank" rel="noopener noreferrer" className="w-full mt-2">
                    <div className="bg-green-700 text-white text-[11px] font-semibold rounded-md py-2 px-2 text-center hover:bg-green-800 transition">
                        VIDEO HƯỚNG DẪN
                    </div>
                </a>
            )}
        </div>
    );
};

export default Card;
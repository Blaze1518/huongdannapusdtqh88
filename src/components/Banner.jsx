import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full">
            {/* Banner desktop */}
            <div className="hidden md:block w-full">
                <Image
                    src="/image/banner-desktop.png"
                    alt="QQ88 Banner Desktop"
                    width={1920}
                    height={400}
                    priority
                    className="w-full h-auto"
                />
            </div>
            {/* Banner mobile */}
            <div className="block md:hidden w-full">
                <Image
                    src="/image/banner-mobile.png"
                    alt="QQ88 Banner Mobile"
                    width={600}
                    height={300}
                    priority
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Banner;
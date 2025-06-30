import "./globals.css";
import Topbar from "@/components/TopBar";
import NotificationBar from "@/components/NotificationBar";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "QQ88 - Hướng dẫn nạp tiền USDT",
  description: "QQ88 - Hướng dẫn nạp tiền USDT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen w-full bg-[url('/bg-main.svg')] bg-cover bg-center bg-no-repeat">
        <div className="w-full min-h-screen">
          <Topbar />
          <Banner />
          <NotificationBar />
          <div className="flex px-3 md:px-14 py-8">
            <div className="hidden md:flex flex-col">
              <Sidebar />
            </div>
            <div className="flex-1 flex justify-center items-center">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

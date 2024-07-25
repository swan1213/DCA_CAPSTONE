import Modal from "@/components/Modal";
import "./globals.css";
import ChartModal from "@/components/ChartModal";
import LoginModal from "@/components/LoginModal";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "DASHBOARD | DC AMBAL",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">
        <ToastProvider>
          {children}
          <LoginModal />
          <Modal />
          <ChartModal />
        </ToastProvider>
      </body>
    </html>
  );
}
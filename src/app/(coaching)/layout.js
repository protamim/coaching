import { Figtree } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntConfigProvider from "@/providers/antConfig";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Coaching",
  description: "Ezycourse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <AntdRegistry>
          <AntConfigProvider>
            <Navbar />
            <div className="flex items-start">
              <div className="hidden h-[calc(100vh-64px)] w-48 lg:flex items-center justify-center">
                <Sidebar />
              </div>
              <main className="bg-white flex-1 h-[calc(100vh-88px)] ml-6 mt-6 rounded-tl-2xl p-8 overflow-x-auto">
                {children}
              </main>
            </div>
          </AntConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

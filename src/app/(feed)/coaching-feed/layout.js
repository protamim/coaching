import { Figtree } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import { Divider } from "antd";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Coaching feed",
  description: "Ezycourse",
};

export default function CoachingFeedLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Navbar />
        <Divider className="my-0"/>
        <main className="max-w-[1320px] mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}

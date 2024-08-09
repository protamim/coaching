import { Figtree } from "next/font/google";
import "@/app/globals.css";
import { BuilderNavbar } from "@/components/shared";
import AntConfigProvider from "@/providers/antConfig";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Builder setting page",
  description: "Ezycourse",
};

const ElementBuilderSettingLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <AntConfigProvider>
          <BuilderNavbar />
          <main className="w-full flex items-center justify-center h-[calc(100vh-3.5rem)]">{children}</main>
        </AntConfigProvider>
      </body>
    </html>
  );
};

export default ElementBuilderSettingLayout;

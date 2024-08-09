import { Figtree } from "next/font/google";
import "@/app/globals.css";
import { BuilderNavbar } from "@/components/shared";
import { ElementsSidebar } from "@/components/pages/elementsBuilder";
import AntConfigProvider from "@/providers/antConfig";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Builder page",
  description: "Ezycourse",
};

export default function ElementsBuilderLayout({ children }) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <AntConfigProvider>
          <BuilderNavbar />
          <div className="flex items-start gap-x-4">
            <div className="hidden md:block">
              <ElementsSidebar />
            </div>
            <main className="w-full pr-3">{children}</main>
          </div>
        </AntConfigProvider>
      </body>
    </html>
  );
}

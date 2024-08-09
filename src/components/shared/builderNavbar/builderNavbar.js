"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { ElementsSidebar } from "@/components/pages/elementsBuilder";
import { useState } from "react";

const BuilderNavbar = () => {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebarOpen = () => {
    setIsOpen(isOpen ? false : true);
  };
  return (
    <>
      <nav className="relative bg-[var(--ezyPrimary)] h-14 w-full flex items-center gap-x-8 px-4 text-white">
        {/* back */}
        <Link
          href="/"
          className="flex items-center gap-x-2 pr-3 border-r border-gray-300 text-lg font-medium transition-all ease-in-out duration-300 hover:opacity-75"
        >
          <span>
            <IoArrowBack />
          </span>
          <p>Back</p>
        </Link>
        {/* nav lists */}
        <ul className="flex items-center gap-x-5">
          <li>
            <Link
              href="/elements-builder"
              className="text-lg font-medium transition-all ease-in-out duration-300 hover:opacity-75"
              style={
                currentPath === "/elements-builder"
                  ? { opacity: "0.75" }
                  : { opacity: "1" }
              }
            >
              Elements
            </Link>
          </li>
          <li>
            <Link
              href="/elements-builder/settings"
              className="text-lg transition-all ease-in-out duration-300 hover:opacity-75"
              style={
                currentPath === "/elements-builder/settings"
                  ? { opacity: "0.75" }
                  : { opacity: "1" }
              }
            >
              Settings
            </Link>
          </li>
        </ul>
        {/* Element Sidebar Button */}
        <button
          onClick={handleSidebarOpen}
          className="ml-auto transition-all ease-in-out duration-300 hover:opacity-75 md:hidden"
        >
          <span className="text-2xl">
            {isOpen ? <RxCross2 /> : <HiMiniBars3CenterLeft />}
          </span>
        </button>
        {/* Sidebar */}
        <div
          className="absolute left-0 max-w-sm z-[50] top-full shadow-2xl transition-all ease-in-out duration-300 md:hidden"
          style={
            isOpen
              ? { transform: "translateY(0)" }
              : { transform: "translateY(-110%)" }
          }
        >
          <ElementsSidebar />
        </div>
      </nav>
    </>
  );
};

export default BuilderNavbar;

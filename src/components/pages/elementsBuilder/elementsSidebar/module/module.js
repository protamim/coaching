"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Module = ({ title, icon, href }) => {
  const currentPath = usePathname();

  return (
    <>
      <Link
        href={href || "#"}
        className={`${
          currentPath === href && "border-[var(--ezyPrimary)]"
        } flex items-center flex-col gap-y-1 py-3 px-6 rounded-lg border border-gray-200 transition-all ease-in-out duration-300 hover:border-[var(--ezyPrimary)] hover:cursor-pointer`}
      >
        <span className="text-3xl font-semibold text-[var(--ezyGray600)]">
          {icon}
        </span>
        <p className="text-sm font-medium text-[var(--ezyGray600)]">{title}</p>
      </Link>
    </>
  );
};

export default Module;

import Link from "next/link";
import React from "react";
import { SideBarMenu } from "./side-bar-menu";

export const AdminSideBar = () => {
  return (
    <div className="flex flex-col justify-center items-centerl gap-10 min-h-screen min-w-[230px]">
      <Link href={"/admin"} className="flex gap-1 items-center text-3xl">
        <span className="font-bold">SILKY</span>
        <span className="text-neutral-800 dark:text-neutral-200">STORE</span>
      </Link>
      <div>
        <SideBarMenu />
      </div>
    </div>
  );
};

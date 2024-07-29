import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BellIcon, Search } from "lucide-react";
import React from "react";
import MobileSideBar from "../side-bar/mobile-side-bar";

export const AdminNavbar = () => {
  return (
    <div className="flex flex-col rounded-md gap-5">
      <div className="flex justify-between bg-white p-2 rounded-md">
        <div className="flex items-center gap-5">
          <div className="block md:hidden">
            <MobileSideBar />
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search anything here..."
              className="pl-8 outline-none border-none shadow-none focus:outline-none focus:border-none"
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <BellIcon />
          <Button variant="outline" className="w-[200px]">
            ADMIN INFOR
          </Button>
        </div>
      </div>
    </div>
  );
};

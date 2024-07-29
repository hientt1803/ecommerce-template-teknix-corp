import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { BellIcon, Search } from "lucide-react";

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
        <div className="flex gap-5 justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <BellIcon />
        </div>
      </div>
    </div>
  );
};

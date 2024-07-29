"use client";

import { HeaderCommand } from "@/components/command";
import { Button } from "@/components/ui/button";

import { RootState } from "@/stores/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { HeaderNavigation } from "./header-navigation";
import { UserDropdown } from "./user-dropdown";

export const MainNav = () => {
  // redux
  const userInfor = useSelector((state: RootState) => {
    state.user.currentUser;
  });
  const isUserNull = userInfor === null || userInfor === undefined;

  return (
    <div className="hidden md:flex gap-5 items-center">
      <HeaderCommand />
      <HeaderNavigation />
      <Link href={"/cart"}>
        <ShoppingCart className="cursor-pointer" />
      </Link>
      {isUserNull ? (
        <Link href={"/auth/login"}>
          <Button className="font-bold">LOGIN</Button>
        </Link>
      ) : (
        <UserDropdown />
      )}
    </div>
  );
};

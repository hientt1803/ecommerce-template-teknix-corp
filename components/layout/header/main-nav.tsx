import React from "react";
import { HeaderNavigation } from "./header-navigation";
import { SearchIcon, ShoppingCart } from "lucide-react";
import { ThemeToggle } from "@/components/provider";
import { HeaderCommand } from "@/components/command";

export const MainNav = () => {
  return (
    <div className="hidden md:flex gap-8 items-center">
      <HeaderCommand />
      <HeaderNavigation />
      <SearchIcon />
      <ShoppingCart />
      <ThemeToggle />
    </div>
  );
};

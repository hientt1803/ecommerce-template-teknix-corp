import { HeaderCommand } from "@/components/command";
import { ThemeToggle } from "@/components/provider";
import { ShoppingCart } from "lucide-react";
import { HeaderNavigation } from "./header-navigation";

export const MainNav = () => {
  return (
    <div className="hidden md:flex gap-5 items-center">
      <HeaderNavigation />
      <HeaderCommand />
      <ShoppingCart className="cursor-pointer" />
      <ThemeToggle />
    </div>
  );
};

import { HeaderCommand } from "@/components/command";
import { ThemeToggle } from "@/components/provider";
import { ShoppingCart } from "lucide-react";
import { HeaderNavigation } from "./header-navigation";
import Link from "next/link";

export const MainNav = () => {
  return (
    <div className="hidden md:flex gap-5 items-center">
      <HeaderNavigation />
      <HeaderCommand />
      <Link href={"/cart"}>
        <ShoppingCart className="cursor-pointer" />
      </Link>
      <ThemeToggle />
    </div>
  );
};

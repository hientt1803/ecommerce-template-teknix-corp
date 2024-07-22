"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, ShoppingCart } from "lucide-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { HeaderCommand } from "@/components/command";
import { HeaderNavigation } from "./header-navigation";
import { ThemeToggle } from "@/components/provider";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetHeader>
        <SheetTitle>
          <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
        </SheetTitle>
        <SheetDescription>
          <VisuallyHidden.Root>Description goes here</VisuallyHidden.Root>
        </SheetDescription>
      </SheetHeader>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          MENU
        </h2>
        <div className="flex flex-col items-start gap-5">
          <HeaderNavigation classname="flex flex-col justify-start items-start gap-3" />

          <div className="ml-[1.3rem]">
            <HeaderCommand />
          </div>
          <div className="flex gap-3 mt-10 ml-[1.3rem]">
            <ShoppingCart className="cursor-pointer" />
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

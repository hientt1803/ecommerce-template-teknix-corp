"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SideBarMenu } from "./side-bar-menu";

export default function MobileSideBar() {
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
        <div className="flex flex-col justify-center items-centerl gap-10 min-h-screen min-w-[230px]">
          <Link href={"/admin"} className="flex gap-1 items-center text-3xl">
            <span className="font-bold">SILKY</span>
            <span className="text-neutral-800 dark:text-neutral-200">
              STORE
            </span>
          </Link>
          <div>
            <SideBarMenu />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

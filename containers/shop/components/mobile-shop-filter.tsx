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
import { MenuIcon } from "lucide-react";
import React, { useState } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import dynamic from "next/dynamic";

const ShopFilter = dynamic(() =>
  import("./filter").then((mod) => mod.ShopFilter)
);

export const MobileShopFileter = () => {
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
          <MenuIcon className="w-10 h-10" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="w-full flex flex-col gap-10">
          <div>
            <h1>FILTER BY </h1>
          </div>
          <div className="flex flex-col items-start gap-5">
            <ShopFilter />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

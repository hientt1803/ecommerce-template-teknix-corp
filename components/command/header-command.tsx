"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { RootState } from "@/stores/store";
import { EnvelopeClosedIcon, GearIcon } from "@radix-ui/react-icons";
import { PersonStandingIcon, Search } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RatingStar from "../rating/rating";
import { Input } from "../ui/input";

export const HeaderCommand = () => {
  // hook
  const router = useRouter();

  // redux
  const productList = useSelector((state: RootState) => state.productList.data);

  // state
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleDirectToShopPage = (id: number) => {
    router.push(`shop/${id}`);
  };

  return (
    <>
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-8"
          onClick={() => setOpen((open) => !open)}
          placeholder="Press ⌘+K to search"
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {productList.map((product) => (
            <CommandItem
              key={product.id}
              onSelect={() => {
                handleDirectToShopPage(product.id);
                setOpen(false);
              }}
            >
              <div
                className="w-100 flex justify-between items-center gap-8"
                onClick={() => {
                  handleDirectToShopPage(product.id);
                  setOpen(false);
                }}
              >
                <div className="flex gap-1">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={150}
                    height={150}
                  />
                  <div className="flex flex-col gap-2">
                    <span>{product.title}</span>
                    <span className="font-bold">{product.price}$</span>
                    <div className="flex gap-2">
                      <Badge variant={"default"}>{product.category}</Badge>
                      <Badge variant={"default"}>{product.brand}</Badge>
                    </div>
                    <div>
                      <RatingStar
                        rating={Math.round(product.rating)}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CommandItem>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonStandingIcon className="mr-2 h-4 w-4" />
              <span>Cart</span>
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

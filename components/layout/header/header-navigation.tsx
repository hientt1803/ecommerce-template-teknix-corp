"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CATEGORIES_SAMPLE_DATA } from "@/lib/data";

const CATEGORIES_NAVIGATE = CATEGORIES_SAMPLE_DATA;

export const HeaderNavigation = ({ classname }: { classname?: string }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={classname}>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/shop" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Shop
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid justify-between gap-3 p-4 w-[240px] md:grid-cols-2">
              {CATEGORIES_NAVIGATE.map((cat, index) => (
                <ListItem key={index} title={cat} link={`/shop/${cat}`} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = ({
  className,
  title,
  children,
  link,
  ...props
}: {
  className?: string;
  title: string;
  children?: React.ReactNode;
  link?: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={link}
          className={cn(
            "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none uppercase text-underline-animation">
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";

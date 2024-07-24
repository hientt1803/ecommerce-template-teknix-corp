"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { filteredListProduct } from "@/stores/feature/products-slice";
import { RootState } from "@/stores/store";
import { IProduct } from "@/types";
import {
  Grid3X3,
  LayoutGridIcon,
  LucideFilterX,
  Search,
  SearchIcon,
  XCircleIcon,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MobileShopFileter } from "./mobile-shop-filter";

interface IShopHeaderFilter {
  layoutThirdColumn: boolean;
  setLayoutThirdColumn: (isShow: boolean) => void;
}

export const ShopHeaderFilter = ({
  layoutThirdColumn,
  setLayoutThirdColumn,
}: IShopHeaderFilter) => {
  // hook
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // redux
  const productList = useSelector(
    (state: RootState) => state.productList.data
  );
  const dispatch = useDispatch();

  // state
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);

  const sortProducts = (products: IProduct[], option: string) => {
    router.push(`shop/?sort-by=${option}`);

    switch (option) {
      case "alphabetical-asc":
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case "alphabetical-desc":
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      case "price-asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "date-asc":
        return [...products].sort(
          (a, b) => Number(a.meta.createdAt) - Number(b.meta.createdAt)
        );
      case "date-desc":
        return [...products].sort(
          (a, b) => Number(b.meta.createdAt) - Number(a.meta.createdAt)
        );
      default:
        return products;
    }
  };

  useEffect(() => {
    const savedSortOption = localStorage.getItem("sortOption");
    if (savedSortOption) {
      setSortOption(savedSortOption);
    }
  }, []);

  useEffect(() => {
    let filteredProducts = productList.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );

    filteredProducts = sortProducts(filteredProducts, sortOption);

    dispatch(filteredListProduct(filteredProducts));
  }, [searchText, sortOption, productList]);

  const handleSort = (option: string) => {
    setSortOption(option);
    localStorage.setItem("sortOption", option);
  };

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleClearFilter = () => {
    router.push(pathname);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="block md:hidden">
            <MobileShopFileter />
          </div>
          <Button
            variant={"outline"}
            className="flex gap-2"
            onClick={handleClearFilter}
          >
            <LucideFilterX /> Clear Filter
          </Button>
          <div className="flex justify-end items-center">
            <Button variant={"outline"}>
              {layoutThirdColumn ? (
                <LayoutGridIcon
                  onClick={() => setLayoutThirdColumn(!layoutThirdColumn)}
                />
              ) : (
                <Grid3X3
                  onClick={() => setLayoutThirdColumn(!layoutThirdColumn)}
                />
              )}
            </Button>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"}>Sort by</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60">
              <DropdownMenuGroup>
                <DropdownMenuItem>Best selling</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleSort("alphabetical-asc")}
                >
                  Alphabetically, A-Z
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleSort("alphabetical-desc")}
                >
                  Alphabetically, Z-A
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSort("price-asc")}>
                  Price, low to high
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSort("price-desc")}>
                  Price, high to low
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSort("date-asc")}>
                  Date, old to new
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSort("date-desc")}>
                  Date, new to old
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          {showSearchBarMobile ? (
            <XCircleIcon
              className="md:hidden w-6 h-6 mt-auto hover:animate-ping"
              onClick={() => setShowSearchBarMobile(!showSearchBarMobile)}
            />
          ) : (
            <SearchIcon
              className="md:hidden w-6 h-6 mt-auto hover:animate-ping"
              onClick={() => setShowSearchBarMobile(!showSearchBarMobile)}
            />
          )}
          <div className="hidden md:flex gap-3 w-full max-w-sm items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-8"
                onChange={handleOnChangeSearch}
              />
            </div>
          </div>
        </div>
      </div>
      {showSearchBarMobile && (
        <div className="w-full mt-10 transition-all">
          <div className="animate-accordion-up">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-8"
                onChange={handleOnChangeSearch}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

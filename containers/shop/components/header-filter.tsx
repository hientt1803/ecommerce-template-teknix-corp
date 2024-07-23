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
import { ListFilterIcon, Search, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MobileShopFileter } from "./mobile-shop-filter";
import { useRouter } from "next/navigation";

export const ShopHeaderFilter = () => {
  // hook
  const router = useRouter();

  // redux
  const productList = useSelector(
    (state: RootState) => state.productListSlice.data
  );
  const dispatch = useDispatch();

  // state
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");

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

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 items-center">
        <div className="block md:hidden">
          <MobileShopFileter />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>Sort by</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60">
            <DropdownMenuGroup>
              <DropdownMenuItem>Best selling</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort("alphabetical-asc")}>
                Alphabetically, A-Z
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSort("alphabetical-desc")}>
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
        <SearchIcon className="md:hidden w-10 h-10" />
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
  );
};

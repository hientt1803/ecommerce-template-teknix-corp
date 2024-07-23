"use client";

import { MainCard } from "@/components/card/main-card";
import { RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { ShopFilter } from "./filter";
import { ShopHeaderFilter } from "./header-filter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { filteredListProduct } from "@/stores/feature/products-slice";
export const ListProduct = () => {
  // hook
  const router = useRouter();
  const pathname = usePathname();
  const searchParam = useSearchParams();

  // redux
  const productList = useSelector(
    (state: RootState) => state.productListSlice.data
  );
  const listFilteredProduct = useSelector(
    (state: RootState) => state.productListSlice.searchedProductList
  );
  const dispath = useDispatch();

  useEffect(() => {
    let productFiltered = [];
    if (searchParam !== null) {
      if (searchParam?.get("sort-by-categories") !== null) {
        productFiltered = productList.filter((product) => {
          return product.category
            .toLowerCase()
            .includes(
              String(
                searchParam
                  ?.get("sort-by-categories")
                  ?.toLocaleLowerCase()
                  .toString()
              )
            );
        });
      } else {
        productFiltered = productList.filter((product) => {
          return product.tags.filter((tag) => {
            tag.includes(
              String(
                searchParam?.get("sort-by-tags")?.toLocaleLowerCase().toString()
              )
            );
          });
        });
      }

      dispath(filteredListProduct(productFiltered));
    }
  }, [searchParam]);

  return (
    <div>
      <div className="flex gap-10 mt-10">
        <div className="hidden md:flex flex-col gap-5">
          <ShopFilter />
        </div>

        <div className="flex-1">
          <ShopHeaderFilter />
          <div className="responsive-grid-column mt-10">
            {listFilteredProduct.length !== 0 ? (
              <>
                {listFilteredProduct.map((product) => (
                  <MainCard key={product.id} product={product} />
                ))}
              </>
            ) : (
              <>
                {productList.map((product) => (
                  <MainCard key={product.id} product={product} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

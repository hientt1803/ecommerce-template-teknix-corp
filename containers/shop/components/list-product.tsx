"use client";

import { MainCard } from "@/components/card/main-card";
import { RootState } from "@/stores/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProductApi } from "../api";
import { ShopFilter } from "./filter";
import { ShopHeaderFilter } from "./header-filter";
import { usePathname, useRouter } from "next/navigation";

export const ListProduct = () => {
  // hook
  const router = useRouter();
  const pathname = usePathname();

  // redux
  const productList = useSelector((state: RootState) => state.productList.data);
  const listFilteredProduct = useSelector(
    (state: RootState) => state.productList.searchedProductList
  );

  // state
  const [gridColumnShow, setGridColumnShow] = useState<boolean>(true);

  useEffect(() => {
    if (productList.length === 0) {
      getProductApi();
    }
  }, []);

  useEffect(() => {
    const searchOptions = localStorage.getItem("searchOptions");
    if (searchOptions) {
      router.push(`${pathname}?${searchOptions}`);
    }
  }, []);

  // useEffect(() => {
  //   let productFiltered = [];
  //   if (searchParam !== null) {
  //     if (searchParam?.get("sort-by-categories") !== null) {
  //       productFiltered = productList.filter((product) => {
  //         return product.category
  //           .toLowerCase()
  //           .includes(
  //             String(
  //               searchParam
  //                 ?.get("sort-by-categories")
  //                 ?.toLocaleLowerCase()
  //                 .toString()
  //             )
  //           );
  //       });
  //     } else {
  //       productFiltered = productList.filter((product) => {
  //         return product.tags.filter((tag) => {
  //           tag.includes(
  //             String(
  //               searchParam?.get("sort-by-tags")?.toLocaleLowerCase().toString()
  //             )
  //           );
  //         });
  //       });
  //     }

  //     dispath(filteredListProduct(productFiltered));
  //   }
  // }, [searchParam]);

  const handleShowGridLayout = (isShow: boolean) => {
    setGridColumnShow(isShow);
  };

  return (
    <div>
      <div className="flex gap-10 mt-10">
        <div className="hidden md:flex flex-col gap-5 min-w-[225px]">
          <ShopFilter />
        </div>

        <div className="flex-1">
          <ShopHeaderFilter
            layoutThirdColumn={gridColumnShow}
            setLayoutThirdColumn={handleShowGridLayout}
          />
          <div
            className={`grid sm:grid-cols-2 md:grid-cols-3 ${
              gridColumnShow ? "lg:grid-cols-4 " : "lg:grid-cols-3"
            } gap-6 mt-10 transition-all`}
          >
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

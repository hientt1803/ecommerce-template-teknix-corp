"use client";

import { MainCard } from "@/components/card/main-card";
import { filteredListProduct } from "@/stores/feature/products-slice";
import { RootState } from "@/stores/store";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopFilter } from "./filter";
import { ShopHeaderFilter } from "./header-filter";
import LoadingGlobal from "@/components/loading/global";
export const ListProduct = () => {
  // hook
  const searchParam = useSearchParams();

  // redux
  const productList = useSelector((state: RootState) => state.productList.data);
  // const loadingState = useSelector(
  //   (state: RootState) => state.globalState.loading
  // );
  const listFilteredProduct = useSelector(
    (state: RootState) => state.productList.searchedProductList
  );
  const dispath = useDispatch();

  // state
  const [gridColumnShow, setGridColumnShow] = useState<boolean>(true);

  // useEffect(() => {
  //   getProductApi();
  // }, []);

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

  const handleShowGridLayout = (isShow: boolean) => {
    setGridColumnShow(isShow);
  };

  // if (!loadingState) {
  //   return <LoadingGlobal />;
  // }

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

import { MainCard } from "@/components/card/main-card";
import { PRODUCT_SAMPLE_DATA } from "@/lib/data";
import { IProduct } from "@/types";
import React from "react";
import { ShopFilter } from "./filter";
import { ShopHeaderFilter } from "./header-filter";
export const ListProduct = () => {
  const listProduct: IProduct[] = PRODUCT_SAMPLE_DATA;

  return (
    <div>
      <div className="flex gap-10 mt-10">
        <div className="hidden md:flex flex-col gap-5">
          <ShopFilter />
        </div>

        <div className="flex-1">
          <ShopHeaderFilter />
          <div className="responsive-grid-column mt-10">
            {listProduct.map((product) => (
              <MainCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

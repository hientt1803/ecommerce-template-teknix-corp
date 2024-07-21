import { MainCard } from "@/components/card/main-card";
import { PRODUCT_SAMPLE_DATA } from "@/lib/data";
import { IProduct } from "@/types";
import React from "react";

export const ListProduct = () => {
  const listProduct: IProduct[] = PRODUCT_SAMPLE_DATA;

  return (
    <article>
      <div className="responsive-grid-column">
        {listProduct.map((product) => (
          <MainCard key={product.id} product={product} />
        ))}
      </div>
    </article>
  );
};

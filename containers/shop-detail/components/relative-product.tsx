"use client";

import { MainCard } from "@/components/card";
import { RootState } from "@/stores/store";
import { IProduct } from "@/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const RelativeProduct = () => {
  // redux
  const productList = useSelector((state: RootState) => state.productList.data);
  const productDetail = useSelector(
    (state: RootState) => state.productList.activeProduct
  );

  // state
  const [listrelativeProduct, setListrelativeProduct] = useState<IProduct[]>(
    []
  );

  useEffect(() => {
    const newData = productList.filter((product) => {
      return product.category
        .toLowerCase()
        .includes(
          productDetail !== null
            ? productDetail?.category?.toLocaleLowerCase()
            : ""
        );
    });

    setListrelativeProduct(newData);
  }, [productDetail, productList]);

  return (
    <div>
      <h2 className="scroll-m-20 text-3xl font-mono font-semibold text-start mt-20">
        Relative product you should buy
      </h2>
      <div className="responsive-grid-column mt-10">
        {listrelativeProduct.map((product) => (
          <MainCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

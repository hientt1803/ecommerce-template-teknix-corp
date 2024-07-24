"use client";

import { MainCard } from "@/components/card";
import { PRODUCT_SAMPLE_DATA } from "@/lib/data";
import { RootState } from "@/stores/store";
import { IProduct } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const RelativeProduct = () => {
  // hook
  const { id } = useParams();

  // redux
  const productList = useSelector(
    (state: RootState) => state.productList.data
  );

  // state
  const [listrelativeProduct, setListrelativeProduct] = useState<IProduct[]>(
    []
  );

  const detailProduct = PRODUCT_SAMPLE_DATA.find(
    (product) => product.id == Number(id)
  );

  useEffect(() => {
    if (!detailProduct) return;

    const newData = productList.filter((product) => {
      return product.category
        .toLowerCase()
        .includes(detailProduct?.category?.toLocaleLowerCase());
    });

    setListrelativeProduct(newData);
  }, [id, detailProduct]);

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

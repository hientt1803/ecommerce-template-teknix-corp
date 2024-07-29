"use client";

import { MainDialog } from "@/components/dialog";
import { ICart } from "@/types";
import { useEffect, useState } from "react";
import { ProductOrderItem } from "./product-order-item";
import { DetailDialog } from "./detail-dialog";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export const OrderTableBody = () => {
  const dataFromLocalStorage = localStorage.getItem("cartDetail");
  
  // redux
  const showDialog = useSelector(
    (state: RootState) => state.globalState.showDialog
  );

  // hook
  const [listProduct, setListProduct] = useState<ICart[]>([]);

  // state
  useEffect(() => {
    if (dataFromLocalStorage) {
      const data = JSON.parse(dataFromLocalStorage);
      setListProduct(data);
    }
  }, [dataFromLocalStorage]);

  return (
    <div>
      {listProduct.map((product) => (
        <ProductOrderItem key={product.id} product={product} />
      ))}
      {showDialog && <DetailDialog listProduct={listProduct}/>}
    </div>
  );
};

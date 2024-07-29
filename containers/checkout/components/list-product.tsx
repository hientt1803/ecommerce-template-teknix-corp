"use client";

import { Separator } from "@/components/ui/separator";
import { ICart } from "@/types";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { CheckoutPrice } from "./checkout-price";

export const ListProduct = () => {
  const localStorageValue = localStorage.getItem("cartDetail");
  const [cartCheckoutList, setCartCheckoutList] = useState<ICart[]>([]);

  useEffect(() => {
    if (localStorageValue) {
      const data = JSON.parse(localStorageValue);
      setCartCheckoutList(data);
    }
  }, [localStorageValue]);

  const totalPriceCaculate = useMemo(() => {
    let tempTotalPrice = 0;
    cartCheckoutList.map((item) => {
      tempTotalPrice += item.cartQuantity * item.price;
    });

    return Number(tempTotalPrice.toFixed(2));
  }, [cartCheckoutList]);

  return (
    <div className="bg-[#f9f9f9]">
      <div className="flex flex-col gap-3 justify-between p-20">
        {cartCheckoutList.map((item) => (
          <div key={item.id} className="grid grid-cols-6 gap-3 justify-between">
            <div className="col-span-1 items-center bg-white">
              <Image
                src={item.thumbnail}
                alt="checkout image"
                width={80}
                height={80}
              />
            </div>
            <span className="col-span-4 flex flex-col gap-1">
              <span className="font-semibold">{item.title}</span>
              <span>Quantity: x{item.cartQuantity}</span>
            </span>
            <span className="col-span-1 font-semibold">
              ${(item.price * item.cartQuantity).toFixed(2)}
            </span>
          </div>
        ))}

        <Separator />

        <CheckoutPrice totalPrice={totalPriceCaculate} />
      </div>
    </div>
  );
};

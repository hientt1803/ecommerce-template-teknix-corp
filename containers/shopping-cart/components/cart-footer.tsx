"use client";

import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import Link from "next/link";

export const CartFooter = () => {
  const listCart = useSelector((state: RootState) => state.cart.data);

  const EstimatedTotalPrice = useMemo(() => {
    let result = 0;
    listCart.forEach((item) => {
      result += item.price * item.cartQuantity;
    });

    return result.toFixed(2);
  }, [listCart]);

  return (
    <div>
      {listCart.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col justify-end items-end gap-3 mt-20">
            <h4 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 font-mono">
              Estimated total: {EstimatedTotalPrice}$
            </h4>
            <p className="text-neutral-700 max-w-80 text-end">
              Taxes, Discounts and shipping calculated at checkout
            </p>
            <Link href={"/checkout"}>
              <Button
                variant="default"
                className="p-2 w-[380px] h-10 rounded-sm font-bold text-neutral-300"
              >
                Check out
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

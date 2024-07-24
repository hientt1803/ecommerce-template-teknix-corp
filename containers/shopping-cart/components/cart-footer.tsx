"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export const CartFooter = () => {
  const listCart = useSelector((state: RootState) => state.cart.data);

  return (
    <div>
      {listCart.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="flex flex-col justify-end items-end gap-3 mt-20">
            <h4 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 font-mono">
              Estimated total: 200,00$
            </h4>
            <p className="text-neutral-700 max-w-80 text-end">
              Taxes, Discounts and shipping calculated at checkout
            </p>
            <Button
              variant="default"
              className="p-2 w-[340px] h-10 rounded-sm font-bold text-neutral-300"
            >
              Check out
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

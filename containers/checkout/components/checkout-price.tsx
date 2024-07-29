import { Separator } from "@/components/ui/separator";
import React from "react";

export const CheckoutPrice = ({
  totalPrice,
}: {
  totalPrice: number | string;
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span className="font-semibold">${totalPrice}</span>
      </div>
      <Separator className="my-3" />
      <div className="flex justify-between">
        <span>Total</span>
        <span className="font-semibold">${totalPrice}</span>
      </div>
    </div>
  );
};

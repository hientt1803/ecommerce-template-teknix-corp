import { Button } from "@/components/ui/button";
import React from "react";

export const OrderTablHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex justify-between items-center gap-3">
          <div className="flex flex-col items-center gap-3">
            <span className="font-bold">Order Number</span>
            <span className="font-normal">WUB8811</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="font-bold">Date placed</span>
            <span className="font-normal">Jul, 6 2024</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="font-bold">Total Amount</span>
            <span className="font-normal">$160,00</span>
          </div>
        </div>
        <div className="flex justify-end items-center gap-6">
          <Button variant={"outline"}>View Order</Button>
          <Button variant={"outline"}>View Invoice</Button>
        </div>
      </div>
    </div>
  );
};

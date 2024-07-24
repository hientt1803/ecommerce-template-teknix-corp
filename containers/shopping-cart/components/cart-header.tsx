import Link from "next/link";
import React from "react";

export const CartHeader = () => {
  return (
    <div className="flex justify-between items-end mb-10">
      <h2 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 font-mono">
        Your Cart
      </h2>
      <Link href={"/shop"} className="text-neutral-600 underline text-xl">
        Continue shopping
      </Link>
    </div>
  );
};

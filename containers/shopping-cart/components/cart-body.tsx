"use client";

import { GroupInputQuantity } from "@/components/input/group-input-quantity";
import {
  addItemToCart,
  deleteCart,
  updateCartQuantity,
} from "@/stores/feature/cart-slice";
import { RootState } from "@/stores/store";
import { IProduct } from "@/types";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CartBody = () => {
  // hook
  const listCart = useSelector((state: RootState) => state.cart.data);
  const dispatch = useDispatch();

  // state
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("cartDetail");
    if (dataFromLocalStorage) {
      const cartData = JSON.parse(dataFromLocalStorage);
      cartData.forEach((item: IProduct) => {
        if (!listCart.some((cartItem) => cartItem.id === item.id)) {
          dispatch(addItemToCart(item));
        }
      });
    }
  }, [dispatch, listCart]);

  const handleUpdateCart = (cartId: number, newQuantity: number) => {
    dispatch(
      updateCartQuantity({
        id: cartId,
        cartQuantity: newQuantity,
      })
    );
  };

  const handleDeleteCart = (cartId: number) => {
    dispatch(
      deleteCart({
        id: cartId,
      })
    );
  };

  return (
    <table className="w-full table-auto" suppressHydrationWarning>
      <thead>
        <tr className="detail-grid-layout flex justify-between gap-10 text-neutral-400 font-mono text-xl">
          <td className="detail-grid-col-1">PRODUCT</td>
          <div className="detail-grid-col-2 flex gap-64">
            <td>QUANTITY</td>
            <td>TOTAL</td>
          </div>
        </tr>
      </thead>
      <hr />
      <tbody>
        {listCart.map((cart) => {
          let totalPrice = 0;
          totalPrice = cart.price * cart.cartQuantity;

          return (
            <tr
              key={cart.id}
              className="detail-grid-layout justify-between gap-10 my-2"
            >
              <td className="detail-grid-col-1 flex gap-3">
                <Image
                  src={cart.thumbnail}
                  alt={cart.title}
                  width={120}
                  height={160}
                  className="bg-[#f5f5f5]"
                />
                <div className="flex flex-col gap-2">
                  <p className="max-w-80 text-wrap line-clamp-4 text-neutral-800">
                    {cart.title}
                  </p>
                  <p className="font-semibold">{cart.price}</p>
                  <p className="text-neutral-600">BLABLA</p>
                </div>
              </td>
              <div className="detail-grid-col-2 flex justify-between">
                <td className="flex justify-end items-center gap-8">
                  <GroupInputQuantity
                    quantity={cart.cartQuantity}
                    setQuantity={(newQuantity) =>
                      handleUpdateCart(cart.id, newQuantity)
                    }
                  />

                  <Trash2Icon
                    className="cursor-pointer"
                    onClick={() => handleDeleteCart(cart.id)}
                  />
                </td>
                <td className="flex justify-end items-center font-bold">
                  {totalPrice.toFixed(2).toString()}$
                </td>
              </div>
            </tr>
          );
        })}
      </tbody>
      <hr />
    </table>
  );
};

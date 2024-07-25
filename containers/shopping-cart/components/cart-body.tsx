"use client";

import { GroupInputQuantity } from "@/components/input/group-input-quantity";
import RatingStar from "@/components/rating/rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  addItemToCart,
  clearCart,
  deleteCart,
  updateCartQuantity,
} from "@/stores/feature/cart-slice";
import { RootState } from "@/stores/store";
import { IProduct } from "@/types";
import { toastSuccess } from "@/utils";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CartBody = () => {
  const dataFromLocalStorage = localStorage.getItem("cartDetail");

  // hook
  const listCart = useSelector((state: RootState) => state.cart.data);
  const dispatch = useDispatch();

  // state
  useEffect(() => {
    if (dataFromLocalStorage) {
      const data = JSON.parse(dataFromLocalStorage);

      dispatch(clearCart());
      data?.forEach((item: IProduct) => {
        dispatch(addItemToCart(item));
      });
    }
  }, [dataFromLocalStorage]);

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

    toastSuccess("Delete successfully!");
  };

  return (
    <div>
      {listCart.length !== 0 ? (
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
                    <Link href={`shop/${cart.id}`}>
                      <Image
                        src={cart.thumbnail}
                        alt={cart.title}
                        width={120}
                        height={160}
                        className="bg-[#f5f5f5]"
                      />
                    </Link>
                    <span className="flex flex-col gap-2">
                      <p className="max-w-80 text-wrap line-clamp-4 text-neutral-800">
                        {cart.title}
                      </p>
                      <p className="font-semibold">{cart.price}$</p>
                      <span className="text-neutral-600">
                        <Badge className="mb-2">{cart.category}</Badge>
                        <span className="flex gap-2">
                          <RatingStar
                            rating={Math.round(cart.rating)}
                            key={cart.id}
                            readOnly
                          />
                          {cart.rating}
                        </span>
                      </span>
                    </span>
                  </td>
                  <span className="detail-grid-col-2 flex justify-between">
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
                  </span>
                </tr>
              );
            })}
          </tbody>
          <hr />
        </table>
      ) : (
        <div className="mx-auto w-full flex flex-col justify-center items-center mt-64">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            CART EMPTY
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Come to see and buy something you like
          </p>
          <Link href="/shop" className="mt-5">
            <Button className="font-bold">Continue shopping</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

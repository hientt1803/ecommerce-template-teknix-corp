"use client";

import { GroupInputQuantity } from "@/components/input/group-input-quantity";
import RatingStar from "@/components/rating/rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRODUCT_SAMPLE_DATA } from "@/lib/data";
import { addItemToCart } from "@/stores/feature/cart-slice";
import { ICart } from "@/types";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { toastInfo, toastSuccess } from "../../../utils/toast";

export const ProductInformation = () => {
  // Hook
  const { id } = useParams();

  // redux
  const detailProduct = PRODUCT_SAMPLE_DATA.find(
    (product) => product.id == Number(id)
  );
  const dispatch = useDispatch();

  // state
  const [quantity, setQuantity] = useState<number>(1);

  const priceAfterDiscount = useMemo(() => {
    if (!detailProduct) return "0.00";

    const resultAfterDiscount =
      detailProduct.price * (detailProduct.discountPercentage / 100);
    const result = detailProduct.price - resultAfterDiscount;

    return result.toFixed(2).toString();
  }, [detailProduct]);

  const handleAddCart = () => {
    if (!detailProduct) return;

    let data: ICart[] = [];
    const localData = localStorage.getItem("cartDetail");
    if (localData !== null) {
      data = JSON.parse(localData);
    }

    const existingProduct = data.find((item) => item.id === detailProduct.id);
    if (existingProduct) {
      data = data.map((item) => {
        if (item.id === detailProduct.id) {
          quantity > 1
            ? (item.cartQuantity += quantity)
            : (item.cartQuantity += 1);
        }
        return item;
      });
      localStorage.setItem("cartDetail", JSON.stringify(data));
      toastInfo("Item quantity has been increased!");
    } else {
      data.push({ ...detailProduct, cartQuantity: 1 });
      localStorage.setItem("cartDetail", JSON.stringify(data));
      dispatch(addItemToCart({ ...detailProduct, cartQuantity: 1 }));
      toastSuccess("Add item to cart successfully!");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {detailProduct?.title}
      </h2>
      <div className="flex gap-2">
        <span className="font-bold text-4xl">{priceAfterDiscount}</span>
        <span className="text-neutral-700 line-through text-sm">
          {detailProduct?.price}
        </span>
      </div>
      {detailProduct?.rating && <RatingStar rating={detailProduct.rating} />}
      <div className="flex justify-between font-normal">
        <div>
          Brand: <Badge variant="default">{detailProduct?.brand}</Badge>
        </div>
        <div>
          Categories: <Badge variant="default">{detailProduct?.category}</Badge>
        </div>
      </div>
      <div className="mt-5 flex gap-3">
        <span>{detailProduct?.returnPolicy}</span> -
        <span>{detailProduct?.warrantyInformation}</span>
      </div>
      <span className="underline">{detailProduct?.shippingInformation}</span>

      <div className="flex flex-col gap-2 mt-2">
        <span>Size</span>
        <div className="flex gap-2 flex-wrap">
          <Button variant={"outline"}>S</Button>
          <Button variant={"outline"}>M</Button>
          <Button variant={"default"}>L</Button>
          <Button variant={"outline"}>XL</Button>
          <Button variant={"outline"}>XXL</Button>
        </div>
      </div>

      <div className="text-5xl my-5">
        <GroupInputQuantity
          quantity={quantity}
          setQuantity={(quantity) => setQuantity(quantity)}
        />
      </div>

      <div className="flex justify-between flex-col font-normal">
        <div className="font-bold">Stock: {detailProduct?.stock}</div>
        <span>
          Availability Status:{" "}
          <Badge variant="default">{detailProduct?.availabilityStatus}</Badge>{" "}
        </span>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <Button
          variant={"outline"}
          className="rounded-sm"
          onClick={handleAddCart}
        >
          ADD TO CART
        </Button>
        <Button variant={"default"} className="rounded-sm">
          BUY IT NOW
        </Button>
      </div>

      <div className="mt-5">
        <p className="text-neutral-700">Description</p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {detailProduct?.description}
        </p>
      </div>
    </div>
  );
};

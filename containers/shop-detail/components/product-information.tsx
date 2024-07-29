"use client";

import { GroupInputQuantity } from "@/components/input/group-input-quantity";
import RatingStar from "@/components/rating/rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/stores/feature/client/cart-slice";
import { RootState } from "@/stores/store";
import { ICart } from "@/types";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastInfo, toastSuccess } from "../../../utils/toast";

const COLOR_SAMPLE_DATA = [
  {
    id: 1,
    name: "S",
    selected: false,
  },
  {
    id: 2,
    name: "M",
    selected: false,
  },
  {
    id: 3,
    name: "L",
    selected: false,
  },
  {
    id: 4,
    name: "XL",
    selected: false,
  },
  {
    id: 5,
    name: "XXL",
    selected: false,
  },
  {
    id: 6,
    name: "3XL",
    selected: false,
  },
];

export const ProductInformation = () => {
  // redux
  const productDetail = useSelector(
    (state: RootState) => state.productList.activeProduct
  );
  const dispatch = useDispatch();

  // state
  const [quantity, setQuantity] = useState<number>(1);
  const [sizes, setSizes] = useState(COLOR_SAMPLE_DATA);
  const isDisable = productDetail ? productDetail?.stock < 1 : false;

  const priceAfterDiscount = useMemo(() => {
    if (!productDetail) return "0.00";

    const resultAfterDiscount =
      productDetail.price * (productDetail.discountPercentage / 100);
    const result = productDetail.price - resultAfterDiscount;

    return result.toFixed(2).toString();
  }, [productDetail]);

  const handleAddCart = () => {
    if (!productDetail) return;

    let data: ICart[] = [];
    const localData = localStorage.getItem("cartDetail");
    if (localData !== null) {
      data = JSON.parse(localData);
    }

    const existingProduct = data.find((item) => item.id === productDetail.id);
    if (existingProduct) {
      data = data.map((item) => {
        if (item.id === productDetail.id) {
          quantity > 1
            ? (item.cartQuantity += quantity)
            : (item.cartQuantity += 1);
        }
        return item;
      });
      localStorage.setItem("cartDetail", JSON.stringify(data));
      toastInfo("Item quantity has been increased!");
    } else {
      data.push({ ...productDetail, cartQuantity: 1 });
      localStorage.setItem("cartDetail", JSON.stringify(data));
      dispatch(addItemToCart({ ...productDetail, cartQuantity: 1 }));
      toastSuccess("Add item to cart successfully!");
    }
  };

  const handleSelectedSize = (id: number) => {
    const data = COLOR_SAMPLE_DATA.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });

    setSizes(data);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {productDetail?.title}
      </h2>
      <div className="flex gap-2">
        <span className="font-bold text-4xl">{priceAfterDiscount}</span>
        <span className="text-neutral-700 line-through text-sm">
          {productDetail?.price}
        </span>
      </div>
      {productDetail?.rating && (
        <RatingStar rating={Math.round(productDetail.rating)} readOnly />
      )}
      <div className="flex justify-between font-normal">
        <div>
          Brand: <Badge variant="default">{productDetail?.brand}</Badge>
        </div>
        <div>
          Categories: <Badge variant="default">{productDetail?.category}</Badge>
        </div>
      </div>
      <div className="mt-5 flex gap-3">
        <span>{productDetail?.returnPolicy}</span> -
        <span>{productDetail?.warrantyInformation}</span>
      </div>
      <span className="underline">{productDetail?.shippingInformation}</span>

      <div className="flex flex-col gap-2 mt-2">
        <span>Size</span>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((item) => (
            <Button
              key={item.id}
              variant={item.selected ? "default" : "outline"}
              onClick={() => handleSelectedSize(item.id)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="text-5xl my-5">
        <GroupInputQuantity
          quantity={quantity}
          setQuantity={(quantity) => setQuantity(quantity)}
        />
      </div>

      <div className="flex justify-between flex-col font-normal">
        <div className="font-bold">Stock: {productDetail?.stock}</div>
        <span>
          Availability Status:{" "}
          <Badge variant="default">{productDetail?.availabilityStatus}</Badge>{" "}
        </span>
      </div>

      <div className="flex flex-col gap-2 mt-3">
        <Button
          variant={"outline"}
          className="rounded-sm"
          onClick={handleAddCart}
          disabled={isDisable}
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
          {productDetail?.description}
        </p>
      </div>
    </div>
  );
};

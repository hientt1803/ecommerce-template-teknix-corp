import { Card, CardContent } from "@/components/ui/card";
import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import RatingStar from "../rating/rating";

export const MainCard = ({ product }: { product: IProduct }) => {
  /* The `useMemo` hook is being used to memoize the calculation of the `priceAfterDiscount` value in
  the `MainCard` component. */
  const priceAfterDiscount = useMemo(() => {
    const resultAfterDiscount =
      product.price * (product.discountPercentage / 100);
    const result = product.price - resultAfterDiscount;

    return result.toFixed(2).toString();
  }, [product.price, product.discountPercentage]);

  return (
    <Card
      className="group overflow-hidden transition-all border-none shadow-none hover:shadow-xl hover:translate-y-[-7px]"
      key={product.id}
    >
      <CardContent className="bg-[#f6f6f6]">
        <Link href={`/shop/${product.id}`}>
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover transition-transform group-hover:scale-[1.1]"
            height="200"
            src={product.thumbnail}
            width="200"
            loading="lazy"
          />
        </Link>
        <div className="grid gap-2">
          <div className="mt-2">
            <p className="line-clamp-1 text-sm">{product.title}</p>
            <div className="flex gap-1 flex-wrap">
              <span className="line-through text-neutral-500 text-sm align-text-bottom">
                {product.price}$
              </span>
              <span className="text-black font-semibold">
                {priceAfterDiscount}$
              </span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <RatingStar rating={Math.round(product.rating)} readOnly/>{" "}
            <span>{product.rating} of 5</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

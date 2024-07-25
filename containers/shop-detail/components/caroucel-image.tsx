"use client";

import { CaroucelImage } from "@/components/caroucel";
import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";

const ShopProductCaroucel = () => {
  const productDetail = useSelector(
    (state: RootState) => state.productList.activeProduct
  );

  if (!productDetail) {
    return null;
  }

  const images = productDetail?.images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });

  return (
    <div className="flex flex-col gap-3 w-full">
      <CaroucelImage images={images} />
    </div>
  );
};

export default ShopProductCaroucel;

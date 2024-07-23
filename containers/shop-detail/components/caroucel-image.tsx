"use client";

import NotFound from "@/app/not-found";
import { CaroucelImage } from "@/components/caroucel";
import { PRODUCT_SAMPLE_DATA } from "@/lib/data";
import { useParams } from "next/navigation";

const ShopProductCaroucel = () => {
  const { id } = useParams();

  const detailProduct = PRODUCT_SAMPLE_DATA.find(
    (product) => product.id == Number(id)
  );

  if (!detailProduct) {
    return <NotFound />;
  }

  const images = detailProduct?.images.map((image) => {
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

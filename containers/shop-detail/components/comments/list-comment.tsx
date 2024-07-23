"use client";

import { useParams } from "next/navigation";
import { CommentItem } from "./comment";
import { PRODUCT_SAMPLE_DATA } from "@/lib/data";

export const ListComment = () => {
  const { id } = useParams();

  const detailProduct = PRODUCT_SAMPLE_DATA.find(
    (product) => product.id == Number(id)
  );

  return (
    <>
      <div className="flex flex-wrap flex-col gap-3 overflow-y-scroll">
        {detailProduct?.reviews.map((review, index) => (
          <CommentItem review={review} key={index} />
        ))}
      </div>
    </>
  );
};

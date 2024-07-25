"use client";

import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";
import { CommentItem } from "./comment";

export const ListComment = () => {
  const detailProduct = useSelector(
    (state: RootState) => state.productList.activeProduct
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

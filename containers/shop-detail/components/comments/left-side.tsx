"use client";

import RatingDetail from "@/components/rating/rating";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { BellIcon, StarIcon } from "lucide-react";
import { WriteComment } from "./write-comment";
import RatingStar from "@/components/rating/rating";
import { useParams } from "next/navigation";
import { PRODUCT_SAMPLE_DATA } from "@/lib/data";

export const LeftSide = () => {
  const { id } = useParams();

  const detailProduct = PRODUCT_SAMPLE_DATA.find(
    (product) => product.id == Number(id)
  );

  return (
    <Card
      className={cn(
        "w-[380px] border-0 shadow-md rounded-none lg:sticky lg:top-14"
      )}
    >
      <CardHeader>
        <CardTitle className="text-3xl">Customer Review</CardTitle>
        <RatingStar rating={5} disable={true} />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-3">
          <BellIcon />
          <div className="flex-1 space-y-1">
            <span className="text-sm font-medium leading-none">
              Base on {detailProduct?.reviews.length} review
            </span>
          </div>
        </div>
        <div className="mt-4 border rounded-lg p-3 space-x-2">
          <div className="flex justify-start items-center gap-2">
            <StarIcon /> <Progress value={33} /> 33%
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <div>
          <div className="text-xl font-semibold">Share your thoughts</div>
          <div className="text-lg">
            If {"you’ve"} used this product, share your thoughts with other
            customers
          </div>
        </div>

        <WriteComment />
      </CardFooter>
    </Card>
  );
};

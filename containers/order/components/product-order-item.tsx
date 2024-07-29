import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { setShowDialog } from "@/stores/feature/client/global-slice";
import { ICart } from "@/types";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

export const ProductOrderItem = ({ product }: { product: ICart }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-cols-2" key={product.id}>
        <div className="flex justify-start items-center">
          <div className="flex flex-col items-center">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="font-bold">{product.title}</div>
            <div>
              <Badge variant={"default"}>{product.category}</Badge>
            </div>
            <p>Qty - {product.cartQuantity}</p>
            <p>OrderId: #266678</p>
          </div>
          <div className="flex flex-col items-center" />
        </div>
        <div className="flex justify-end items-center gap-6">
          <div className="font-bold">${product.price}</div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-4">
        <span className="flex gap-1">
          <CheckCircle /> Delivered On January 12,2021
        </span>
        <div className="flex gap-3">
          <span onClick={() => dispatch(setShowDialog(true))}>View product</span>
          <Separator orientation="vertical" />
          <span>Buy again</span>
        </div>
      </div>
    </>
  );
};

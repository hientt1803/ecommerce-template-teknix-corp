import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IProduct } from "@/types";

export const MainCard = ({ product }: { product: IProduct }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          alt="Product image"
          className="aspect-square w-full rounded-md object-cover"
          height="300"
          src={product.thumbnail}
          width="300"
        />
        <div className="grid grid-cols-3 gap-2">
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src={product.thumbnail}
              width="84"
            />
          </button>
          <button>
            <Image
              alt="Product image"
              className="aspect-square w-full rounded-md object-cover"
              height="84"
              src={product.thumbnail}
              width="84"
            />
          </button>
        </div>
        <div className="grid gap-2">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
            molestiae rerum accusantium, ipsum in nostrum incidunt nihil debitis
            et temporibus. Id fugiat ipsam iure quisquam, dolor mollitia
            delectus veniam.
          </p> */}
        </div>
      </CardContent>
    </Card>
  );
};

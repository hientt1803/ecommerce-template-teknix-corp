"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const GroupInputQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleOnChangeQuantity = (action: string) => {
    switch (action) {
      case "incr":
        setQuantity((prev) => prev + 1);
        break;

      case "descr":
        if (quantity < 2) {
          setQuantity(1);
        } else {
          setQuantity((prev) => prev - 1);
        }
        break;

      default:
        break;
    }
  };

  const handleOnChangeQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <span className="flex">
      <Button
        variant={"secondary"}
        className="border-none text-xl"
        onClick={() => handleOnChangeQuantity("descr")}
      >
        -
      </Button>
      <Input
        value={quantity}
        onChange={handleOnChangeQuantityInput}
        className="w-16 text-center border-none text-xl outline-none"
      />
      <Button
        variant={"secondary"}
        className="border-none text-xl"
        onClick={() => handleOnChangeQuantity("incr")}
      >
        +
      </Button>
    </span>
  );
};

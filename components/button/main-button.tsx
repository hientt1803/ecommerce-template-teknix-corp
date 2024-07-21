import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib";

type ButtonProps = {
  children: React.ReactNode;
  classname: string;
};

export const MainButton = ({ children, classname }: ButtonProps) => {
  return <Button className={cn("px-3", { classname })}>{children}</Button>;
};

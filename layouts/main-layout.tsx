import { IChildrenProps } from "@/types";
import React from "react";

const MainLayout = ({ children }: IChildrenProps) => {
  return <div>{children}</div>;
};

export default MainLayout;

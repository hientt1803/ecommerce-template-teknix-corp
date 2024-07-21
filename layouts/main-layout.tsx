import { MainFooter, MainHeader } from "@/components/layout";
import { IChildrenProps } from "@/types";
import React from "react";

const MainLayout = ({ children }: IChildrenProps) => {
  return (
    <React.Fragment>
      <MainHeader />
      {children}
      <MainFooter />
    </React.Fragment>
  );
};

export default MainLayout;

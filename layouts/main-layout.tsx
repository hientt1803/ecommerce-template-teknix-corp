"use client";

import { GlobalLoading } from "@/components/global";
import { MainFooter, MainHeader } from "@/components/layout/client";
import { getMeApi } from "@/containers/auth/api";
import { RootState } from "@/stores/store";
import { IChildrenProps } from "@/types";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MainLayout = ({ children }: IChildrenProps) => {
  const userInfor = useSelector((state: RootState) => {
    state.user.currentUser;
  });

  useEffect(() => {
    if (userInfor == null || userInfor == undefined) {
      getMeApi();
    }
  }, [userInfor]);

  return (
    <React.Fragment>
      <MainHeader />
      {children}
      <MainFooter />
    </React.Fragment>
  );
};

export default MainLayout;

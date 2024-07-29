"use client";

import { AdminSideBar } from "@/components/layout/admin";
import { AdminContent } from "@/components/layout/admin/content/content";
import { getMeApi } from "@/containers/auth/api";
import { RootState } from "@/stores/store";
import { IChildrenProps } from "@/types";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }: IChildrenProps) => {
  const userInfor = useSelector((state: RootState) => {
    state.user.currentUser;
  });

  useEffect(() => {
    if (userInfor == null || userInfor == undefined) {
      getMeApi();
    }
  }, [userInfor]);

  return (
    <div className="bg-[#f6f6f6]">
      <div className="container flex justify-center items-center gap-8">
        <div className="hidden md:flex">
          <AdminSideBar />
        </div>
        <div className="w-full">
          <AdminContent>{children}</AdminContent>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

import { IChildrenProps } from "@/types";
import React from "react";
import { AdminNavbar } from "../navbar/navbar";

export const AdminContent = ({ children }: IChildrenProps) => {
  return (
    <div className="flex flex-col">
      <AdminNavbar />
      <div className="mt-3 bg-white rounded-md p-2">{children}</div>
    </div>
  );
};

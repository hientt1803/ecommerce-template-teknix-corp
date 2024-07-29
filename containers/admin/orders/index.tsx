"use client";

import { Button } from "@/components/ui/button";
import { RootState } from "@/stores/store";
import { PlusCircle, ShareIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { MainDataTable } from "./components/data-table";
import { OrderDeleteModal } from "./components/order-delete";
import { OrderDetailModal } from "./components/order-modal";
import { PageBreadcrumb } from "@/components/breadcumb";

export const OrderContainer = () => {
  // redux
  const activeOrder = useSelector(
    (state: RootState) => state.orderAdmin.activeOrder
  );
  const dispatch = useDispatch();

  // logic
  console.log(activeOrder);

  return (
    <div className="">
      <div className="flex justify-between flex-wrap">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          <PageBreadcrumb segment="dashboard" page="Orders" />
        </h3>

        <div className="flex justify-end items-center flex-wrap gap-3 mb-6">
          {/* <Button variant={"outline"}>
            <ListFilterIcon /> Filter
          </Button> */}
          <Button variant={"outline"}>
            <ShareIcon /> Share
          </Button>
          <Button variant={"default"} disabled>
            <PlusCircle /> Create Order
          </Button>
        </div>
      </div>
      <MainDataTable />

      {/* Modal */}
      <OrderDetailModal />
      <OrderDeleteModal />
    </div>
  );
};

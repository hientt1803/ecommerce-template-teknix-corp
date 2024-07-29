"use client";

import { PageBreadcrumb } from "@/components/breadcumb";
import { Button } from "@/components/ui/button";
import { setActiveCustomer } from "@/stores/feature/admin/customer-slice";
import { setShowDialogUpdate } from "@/stores/feature/admin/global-slice";
import { RootState } from "@/stores/store";
import { PlusCircle, ShareIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { MainDataTable } from "./components/data-table";
import { ProductDeleteModal } from "./components/product-delete";
import { CustomerDetailModal } from "./components/product-modal";

export const CustomerContainer = () => {
  // redux
  const activeCustomer = useSelector(
    (state: RootState) => state.customerAdmin.activeCustomer
  );
  const dispatch = useDispatch();

  // logic
  const handleAddCustomer = () => {
    dispatch(setActiveCustomer(null));
    dispatch(setShowDialogUpdate(true));
  };

  const handleSaveCustomer = (product: any) => {
    dispatch(setShowDialogUpdate(true));
  };

  console.log(activeCustomer);
  return (
    <div className="">
      <div className="flex justify-between flex-wrap">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          <PageBreadcrumb segment="dashboard" page="Product" />
        </h3>

        <div className="flex justify-end items-center flex-wrap gap-3 mb-6">
          {/* <Button variant={"outline"}>
            <ListFilterIcon /> Filter
          </Button> */}
          <Button variant={"outline"}>
            <ShareIcon /> Share
          </Button>
          <Button variant={"default"} onClick={handleAddCustomer}>
            <PlusCircle /> Add Customer
          </Button>
        </div>
      </div>
      <MainDataTable />

      {/* Modal */}
      <CustomerDetailModal
        saveCustomer={handleSaveCustomer}
        initialData={activeCustomer}
      />
      <ProductDeleteModal />
    </div>
  );
};

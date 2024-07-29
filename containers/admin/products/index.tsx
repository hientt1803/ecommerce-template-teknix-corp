"use client";

import { Button } from "@/components/ui/button";
import { setShowDialogUpdate } from "@/stores/feature/admin/global-slice";
import { setActiveProduct } from "@/stores/feature/admin/products-slice";
import { RootState } from "@/stores/store";
import { PlusCircle, ShareIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { MainDataTable } from "./components/data-table";
import { ProductModal } from "./components/product-modal";
import { ProductDeleteModal } from "./components/product-delete";

export const ProductContainer = () => {
  // redux
  const activeProduct = useSelector(
    (state: RootState) => state.productAdmin.activeProduct
  );
  const showDialogUpdate = useSelector(
    (state: RootState) => state.globalAdmin.showDialogUpdate
  );
  const dispatch = useDispatch();

  // logic
  const handleAddProduct = () => {
    dispatch(setActiveProduct(null));
    dispatch(setShowDialogUpdate(true));
  };

  const handleSaveProduct = (product: any) => {
    dispatch(setShowDialogUpdate(true));
  };

  console.log(activeProduct);
  return (
    <div className="">
      <div className="flex justify-between flex-wrap">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Products
        </h3>

        <div className="flex justify-end items-center flex-wrap gap-3 mb-6">
          {/* <Button variant={"outline"}>
            <ListFilterIcon /> Filter
          </Button> */}
          <Button variant={"outline"}>
            <ShareIcon /> Share
          </Button>
          <Button variant={"default"} onClick={handleAddProduct}>
            <PlusCircle /> Add Product
          </Button>
        </div>
      </div>
      <MainDataTable />
      
      {/* Modal */}
      <ProductModal
        saveProduct={handleSaveProduct}
        initialData={activeProduct}
      />
      <ProductDeleteModal />
    </div>
  );
};

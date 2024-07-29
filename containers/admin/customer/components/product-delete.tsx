"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { setShowDialogDelete } from "@/stores/feature/admin/global-slice";

import { RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../api";

export const ProductDeleteModal = () => {
  // redux
  const showModalDelete = useSelector(
    (state: RootState) => state.globalAdmin.showDialogDelete
  );
  const activeCustomer = useSelector(
    (state: RootState) => state.customerAdmin.activeCustomer
  );
  const dispath = useDispatch();

  // state

  // logic
  const handleDeleteProduct = () => {
    deleteProduct(activeCustomer ? activeCustomer.id : 0);
  };

  console.log(activeCustomer);

  return (
    <Dialog open={showModalDelete}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Customer</DialogTitle>
          <DialogDescription>
            This action cannot be revesre, please be ensure you want delete this
            customer!
          </DialogDescription>
        </DialogHeader>
        <div className="leading-7 [&:not(:first-child)]:mt-6 text-center">
          Are you sure want to delete customer{" "}
          <span className="font-bold">{`"${
            activeCustomer?.fullname ? activeCustomer?.fullname : "test name"
          }"`}</span>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-4">
            <Button
              onClick={() => dispath(setShowDialogDelete(false))}
              variant="outline"
            >
              Cancel
            </Button>
            <Button onClick={handleDeleteProduct} variant="destructive">
              Delete
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

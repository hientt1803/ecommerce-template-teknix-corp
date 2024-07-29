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
import { deleteOrder } from "../api";

export const OrderDeleteModal = () => {
  // redux
  const showModalDelete = useSelector(
    (state: RootState) => state.globalAdmin.showDialogDelete
  );
  const activeOrder = useSelector(
    (state: RootState) => state.orderAdmin.activeOrder
  );
  const dispath = useDispatch();

  // state

  // logic
  const handleDeleteProduct = () => {
    deleteOrder(activeOrder ? activeOrder.id : 0);
  };

  console.log(activeOrder);

  return (
    <Dialog open={showModalDelete}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete order</DialogTitle>
          <DialogDescription>
            This action cannot be revesre, please be ensure you want delete this
            order!
          </DialogDescription>
        </DialogHeader>
        <div className="leading-7 [&:not(:first-child)]:mt-6 text-center">
          Are you sure want to delete order{" "}
          <span className="font-bold">{`"none"`}</span>
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

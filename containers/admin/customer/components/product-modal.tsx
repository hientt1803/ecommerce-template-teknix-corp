"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setShowDialogUpdate } from "@/stores/feature/admin/global-slice";
import { RootState } from "@/stores/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CustomerModalProps {
  saveCustomer: (product: any) => void;
  initialData?: any;
}

export const CustomerDetailModal: React.FC<CustomerModalProps> = ({
  saveCustomer,
  initialData,
}) => {
  // redux
  const showModalUpdate = useSelector(
    (state: RootState) => state.globalAdmin.showDialogUpdate
  );
  const dispatch = useDispatch();

  const [customerData, setCustomerData] = useState(initialData || {});

  useEffect(() => {
    setCustomerData(initialData || {});
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleCloseModalUpdate = () => {
    dispatch(setShowDialogUpdate(false));
  };

  const handleSubmit = () => {
    saveCustomer(customerData);
    handleCloseModalUpdate();
  };

  return (
    <Dialog open={showModalUpdate}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Customer</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">
            {initialData ? "Edit Customer" : "Add Customer"}
          </h2>
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="customer name"
              value={customerData.title || ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              id="price"
              placeholder="phone number"
              value={customerData.price || ""}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-4">
            <Button onClick={handleCloseModalUpdate} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="default">
              Save
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

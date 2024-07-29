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

interface ProductModalProps {
  saveProduct: (product: any) => void;
  initialData?: any;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  saveProduct,
  initialData,
}) => {
  // redux
  const showModalUpdate = useSelector(
    (state: RootState) => state.globalAdmin.showDialogUpdate
  );
  const dispatch = useDispatch();

  const [productData, setProductData] = useState(initialData || {});

  useEffect(() => {
    setProductData(initialData || {});
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleCloseModalUpdate = () => {
    dispatch(setShowDialogUpdate(false));
  };

  const handleSubmit = () => {
    saveProduct(productData);
    handleCloseModalUpdate();
  };

  return (
    <Dialog open={showModalUpdate}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save product</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">
            {initialData ? "Edit Product" : "Add Product"}
          </h2>
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="product title"
              value={productData.title || ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mb-4">
            <Label htmlFor="price">Price</Label>
            <Input
              type="text"
              id="price"
              placeholder="product price"
              value={productData.price || ""}
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

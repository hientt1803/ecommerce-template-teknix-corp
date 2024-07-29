"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { setShowDialogUpdate } from "@/stores/feature/admin/global-slice";
import { RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";

export const OrderDetailModal = () => {
  // redux
  const showModalUpdate = useSelector(
    (state: RootState) => state.globalAdmin.showDialogUpdate
  );
  const dispatch = useDispatch();

  const handleCloseModalUpdate = () => {
    dispatch(setShowDialogUpdate(false));
  };

  return (
    <Dialog open={showModalUpdate}>
      <DialogContent className="lg:min-w-[1000px]">
        <DialogHeader>
          <DialogTitle>Update Order</DialogTitle>
        </DialogHeader>

        <div className="p-4">
          <div className="flex justify-between mt-2">
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">
                ID: <span className="text-red-500">*</span>:
              </span>
              <span className="text-black font-bold">12-25-2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">
                order status: <span className="text-red-500">*</span>:
              </span>
              <span className="font-bold">
                <Badge variant={"success"}>PENDING</Badge>
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">
                Create at: <span className="text-red-500">*</span>:
              </span>
              <span className="text-black font-bold">12-25-2024</span>
            </div>
          </div>
          <hr className="mb-3" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-start">
              <span className="text-gray-500">
                Receiver name:<span className="text-red-500">*</span>:
              </span>
              <span className="text-black font-bold">HELU</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500">
                Receiver address: <span className="text-red-500">*</span>:
              </span>
              <span className="text-black font-bold">CAN THO</span>
            </div>
            <div className="flex flex-col items-end text-left">
              <span className="text-gray-500">
                Receiver phone: <span className="text-red-500">*</span>:
              </span>
              <span className="text-black font-bold">0704950790</span>
            </div>
            <div className="col-span-full flex items-center space-x-1 mt-2">
              <span className="text-gray-500">
                Notes: <span className="text-red-500">*</span>:
              </span>
              <span className="text-black font-bold">ghi chu</span>
            </div>
          </div>
          <hr />
          <div className="flex items-center space-x-1">
            <span className="text-gray-500">
              Total product count: <span className="text-red-500">*</span>:
            </span>
            <span className="text-black font-bold">35 san pham</span>
          </div>
          <div className="overflow-x-auto mt-5">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Product name</th>
                  <th className="px-4 py-3 text-center">Image</th>
                  <th className="px-4 py-3 text-center">Price</th>
                  <th className="px-4 py-3 text-center">Quantity</th>
                  <th className="px-4 py-3 text-center">Category</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 text-sm">1</td>
                  <td className="px-4 py-3 text-sm">t-shirst</td>
                  <td className="px-4 py-3 text-sm text-center">Image here</td>
                  <td className="px-4 py-3 text-sm text-center">100$</td>
                  <td className="px-4 py-3 text-sm text-center">150</td>
                  <td className="px-4 py-3 text-sm text-center">blouse</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <span className="flex justify-start items-center text-neutral-700">
              Total price: <strong> 100</strong> VNĐ
            </span>
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-4">
            <Button onClick={handleCloseModalUpdate} variant="outline">
              Cancel
            </Button>
            <Button variant="success">Confirm order</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

import { MainDialog } from "@/components/dialog";
import { ProductOrderItem } from "./product-order-item";
import { ICart } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

export const DetailDialog = ({ listProduct }: { listProduct: ICart[] }) => {
  // redux
  const showDialog = useSelector(
    (state: RootState) => state.globalState.showDialog
  );

  return (
    <MainDialog open={showDialog}>
      {listProduct.map((product) => (
        <ProductOrderItem key={product.id} product={product} />
      ))}
    </MainDialog>
  );
};

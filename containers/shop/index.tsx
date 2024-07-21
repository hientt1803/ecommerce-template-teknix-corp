// import { RootState } from "@/stores/store";
// import { useDispatch, useSelector } from "react-redux";
import { ListProduct } from "./components/list-product";

export const ShopContainer = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="container">
     <ListProduct />
    </div>
  );
};

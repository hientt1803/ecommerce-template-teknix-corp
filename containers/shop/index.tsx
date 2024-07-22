// import { RootState } from "@/stores/store";
// import { useDispatch, useSelector } from "react-redux";
import { ShopFilter } from "./components/filter";
import { ListProduct } from "./components/list-product";

export const ShopContainer = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="mb-10">
        <ShopFilter />
      </div>
      <div>
        <ListProduct />
      </div>
    </div>
  );
};

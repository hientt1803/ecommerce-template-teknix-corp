import { setLoading } from "@/stores/feature/global-slice";
import {
    setListProduct
} from "@/stores/feature/products-slice";
import { store } from "@/stores/store";
import { toastError } from "@/utils";
import axios from "axios";

export const getProductApi = async () => {
  store.dispatch(setLoading(true));
  await axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      if (res.status === 200) {
        store.dispatch(setListProduct(res.data.products));
      }
    })
    .catch((error) => {
      toastError(error);
    })
    .finally(() => {
      store.dispatch(setLoading(false));
    });
};

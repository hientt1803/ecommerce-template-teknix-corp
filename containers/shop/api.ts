import { setLoading } from "@/stores/feature/client/global-slice";
import { setListProduct } from "@/stores/feature/client/products-slice";
import { store } from "@/stores/store";
import { toastError } from "@/utils";
import axios from "axios";

export const getProductApi = async () => {
  store.dispatch(setLoading(true));
  await axios
    .get(process.env.NEXT_PUBLIC_API_URL + "products")
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

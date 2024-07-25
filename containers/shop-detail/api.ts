import { setLoading } from "@/stores/feature/global-slice";
import { setActiveProduct } from "@/stores/feature/products-slice";
import { store } from "@/stores/store";
import { toastError } from "@/utils";
import axios from "axios";

export const getProductById = async (id: number) => {
  store.dispatch(setLoading(true));
  await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}products/${id}`)
    .then((res) => {
      if (res.status === 200) {
        store.dispatch(setActiveProduct(res.data));
      }
    })
    .catch((error) => {
      toastError(error);
    })
    .finally(() => {
      store.dispatch(setLoading(false));
    });
};

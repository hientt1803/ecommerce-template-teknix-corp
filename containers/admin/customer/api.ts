import { setListProduct } from "@/stores/feature/admin/products-slice";
import { setLoading } from "@/stores/feature/client/global-slice";
import { store } from "@/stores/store";
import { toastError } from "@/utils";
import axios from "axios";

export const getProductList = async () => {
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

export const deleteProduct = async (id: number) => {
  store.dispatch(setLoading(true));
  await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`)
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

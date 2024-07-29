import { setListOrder } from "@/stores/feature/admin/order-slice";
import { setLoading } from "@/stores/feature/client/global-slice";
import { store } from "@/stores/store";
import { toastError } from "@/utils";
import axios from "axios";

export const getOrderList = async () => {
  store.dispatch(setLoading(true));
  await axios
    .get(process.env.NEXT_PUBLIC_API_URL + "orders")
    .then((res) => {
      if (res.status === 200) {
        store.dispatch(setListOrder(res.data));
      }
    })
    .catch((error) => {
      toastError(error);
    })
    .finally(() => {
      store.dispatch(setLoading(false));
    });
};

export const deleteOrder = async (id: number) => {
  store.dispatch(setLoading(true));
  await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`)
    .then((res) => {
      if (res.status === 200) {
        store.dispatch(setListOrder(res.data));
      }
    })
    .catch((error) => {
      toastError(error);
    })
    .finally(() => {
      store.dispatch(setLoading(false));
    });
};

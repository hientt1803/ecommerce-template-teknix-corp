import { login } from "@/stores/feature/client/auth-slice";
import { setLoading } from "@/stores/feature/client/global-slice";
import { setUser } from "@/stores/feature/client/user-slice";
import { store } from "@/stores/store";
import { toastError } from "@/utils";
import { axiosClient } from "@/utils/axios-client";
import axios from "axios";

/**
 * The `loginApi` function sends a POST request to the authentication token endpoint, dispatches
 * actions based on the response, and handles loading states and errors.
 */
export const loginApi = async (formData: any) => {
  store.dispatch(setLoading(true));
  axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/token`, formData)
    .then((res) => {
      store.dispatch(login(res.data.token));

      // window.location.href = "/shop";
      history.back();
    })
    .catch((error) => {
      toastError(error.message);
    })
    .finally(() => {
      store.dispatch(setLoading(false));
    });
};

/**
 * The function `getMeApi` makes a POST request to `/auth/get-me` endpoint to fetch user data and
 * handles loading state and error messages accordingly.
 */
export const getMeApi = async () => {
  store.dispatch(setLoading(true));
  axiosClient
    .post(`/auth/get-me`)
    .then((res) => {
      store.dispatch(setUser(res.data));
    })
    .catch((error) => {
      toastError(error.message);
    })
    .finally(() => {
      store.dispatch(setLoading(false));
    });
};

// import { setLoading } from "@/stores/feature/global-slice";
// import { setListProduct } from "@/stores/feature/products-slice";
// import { store } from "@/stores/store";
// import { toastError, toastSuccess } from "@/utils";
// import axios from "axios";

// export const getProductApi = async () => {
//   await axios
//     .get("https://dummyjson.com/products")
//     .then((res) => {
//       store.dispatch(
//         setLoading({
//           status: true,
//         })
//       );
//       if (res.status === 200) {
//         store.dispatch(setListProduct(res.data));
//         toastSuccess("Load data completed");
//       }
//       console.log(res);
//     })
//     .catch((error) => {
//       toastError(error);
//     })
//     .finally(() => {
//       setLoading({
//         status: false,
//       });
//     });
// };

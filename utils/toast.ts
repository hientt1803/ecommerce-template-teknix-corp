import { Flip, toast, ToastPosition } from "react-toastify";

const DEFAULT_CONFIG = {
  position: "top-right" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Flip,
};

export const toastSuccess = (message = "This is success!", config = {}) => {
  toast.success(message, { ...DEFAULT_CONFIG, ...config });
};

export const toastWarning = (message = "This is a warning!", config = {}) => {
  toast.warning(message, { ...DEFAULT_CONFIG, ...config });
};

export const toastError = (message = "Something went wrong!", config = {}) => {
  toast.error(message, { ...DEFAULT_CONFIG, ...config });
};

export const toastInfo = (
  message = "Here is some information!",
  config = {}
) => {
  toast.info(message, { ...DEFAULT_CONFIG, ...config });
};

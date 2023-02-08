export function SuccessToast(message, toastContext) {
  toastContext?.dispatch({
    type: "new-toast",
    value: {
      open: true,
      severity: "success",
      message: message,
      seconds: 1900,
    },
  });
}

export const ErrorToast = (message, toastContext) => {
  toastContext?.dispatch({
    type: "new-toast",
    value: {
      open: true,
      severity: "error",
      message: message,
      seconds: 1900,
    },
  });
};

export const initialState = {
  open: false,
  severity: undefined,
  message: "",
  seconds: 0,
  messages: [],
};

export const reducer = (state, action) => {
  switch (action?.type) {
    case "close":
      return { ...state, open: false };
    case "new-toast":
      return {
        open: action.value.open,
        severity: action.value.severity,
        message: action.value.message,
        seconds: action.value.seconds,
        messages: action.value.messages,
      };
  }
};

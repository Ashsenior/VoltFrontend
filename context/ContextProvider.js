import React, { createContext, useReducer } from "react";
import {
  initialState as toastInitialState,
  reducer as toastReducer,
} from "./reducers/toastReducers";
import ToastMessage from "../components/common/toasts/toast-message";

import {
  initialState as startupInitialState,
  reducer as startupReducer,
} from "./reducers/startupReducer";
export const Context = createContext(null);

const ContextProvider = Context.Provider;

const ContextProviderWrapper = ({ children }) => {
  const [toastData, toastDispatch] = useReducer(
    toastReducer,
    toastInitialState
  );
  const [startupData, startupDispatch] = useReducer(
    startupReducer,
    startupInitialState
  );
  const store = {
    Toast: { state: toastData, dispatch: toastDispatch },
    Startup: { state: startupData, dispatch: startupDispatch },
  };

  return (
    <ContextProvider value={store}>
      {children}
      <ToastMessage
        open={toastData.open}
        message={toastData.message}
        severity={toastData.severity}
        seconds={toastData.seconds}
        messages={toastData.messages}
        handleClose={() => toastDispatch({ type: "close", value: "" })}
      />
    </ContextProvider>
  );
};

export default ContextProviderWrapper;

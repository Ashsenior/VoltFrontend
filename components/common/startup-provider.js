import { createContext, useContext } from "react";

// Create Context object.
const StartupContext = createContext();

// Export Provider.
export function MenuProvider(props) {
  const { value, children } = props;

  return (
    <StartupContext.Provider value={value}>{children}</StartupContext.Provider>
  );
}

// Export useContext Hook.
export function useStartupContext() {
  return useContext(StartupContext);
}

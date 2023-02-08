import { useReducer } from "react";
import { createContext } from "react";

const AppLeaderContext = createContext({
  state: {
    leaders: [],
  },
  dispatch: () => {},
});

const leaderReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SetLeaders:
      return {
        ...state,
        leaders: [],
      };
    default:
      return state;
  }
};

const LeaderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(leaderReducer, {
    leaders: [],
  });
  return (
    <AppLeaderContext.Provider value={{ state, dispatch }}>
      {children}
    </AppLeaderContext.Provider>
  );
};

export { AppLeaderContext, LeaderContextProvider };

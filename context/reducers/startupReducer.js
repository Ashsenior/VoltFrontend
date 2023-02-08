export const initialState = {
  startupKey: {},
};

export const reducer = (state, action) => {
  switch (action?.type) {
    case "selected_startup":
      return { ...state, startupKey: action.value };
    default:
      return state;
  }
};

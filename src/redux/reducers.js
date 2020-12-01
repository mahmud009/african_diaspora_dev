import global from "./state";

const mainReducer = (state = global, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default mainReducer;

const INITIAL_STATE = { result: null, searchType: null };

const setResultReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_EXPRESS_RESULT":
      return { ...state, result: action.payload, searchType: "express" };
    case "SET_D2D_RESULT":
      return { ...state, result: action.payload, searchType: "doorToDoor" };
    case "SET_FREIGHT_RESULT":
      return { ...state, result: action.payload, searchType: "freight" };
    default:
      return { ...state };
  }
};
export default setResultReducer;

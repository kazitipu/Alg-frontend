const INITIAL_STATE = { parcelObj: "" };

const setParcelObjReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PARCEL_OBJ":
      return { ...state, parcelObj: action.payload };
    default:
      return { ...state };
  }
};
export default setParcelObjReducer;

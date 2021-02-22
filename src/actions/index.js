import {
  getAllExpressRatesParcel,
  getAllExpressRatesDocument,
} from "../components/firebase/firebase.utils";

export const getAllExpressRatesParcelRedux = () => async (dispatch) => {
  const expressRatesParcelArray = await getAllExpressRatesParcel();
  dispatch({
    type: "GET_ALL_EXPRESS_RATES_PARCEL",
    payload: expressRatesParcelArray,
  });
};

export const getAllExpressRatesDocumentRedux = () => async (dispatch) => {
  const documentExpressRatesArray = await getAllExpressRatesDocument();
  dispatch({
    type: "GET_ALL_DOCUMENT_EXPRESS_RATES",
    payload: documentExpressRatesArray,
  });
};

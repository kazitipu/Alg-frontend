import {
  getAllExpressRatesParcel,
  getAllExpressRatesDocument,
  setBookingRequest,
  getAllD2DRates,
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

export const getAllD2DRatesRedux = (freightType, country) => async (
  dispatch
) => {
  const allD2DRatesAirArray = await getAllD2DRates(freightType, country);
  dispatch({
    type: "GET_ALL_D2D_RATES",
    payload: allD2DRatesAirArray,
  });
};

export const setExpressResultRedux = (result) => {
  return {
    type: "SET_EXPRESS_RESULT",
    payload: result,
  };
};
export const setD2dResultRedux = (result) => {
  return {
    type: "SET_D2D_RESULT",
    payload: result,
  };
};

export const setBookingRequestRedux = (bookingObj) => async (dispatch) => {
  const uploadedBookingObj = await setBookingRequest(bookingObj);
  dispatch({
    type: "SET_BOOKING_REQUEST",
    payload: uploadedBookingObj,
  });
};

import { combineReducers } from "redux";
import setCurrentUserReducer from "./currentUser";
import setOrdersReducer from "./orders";
import setPaymentsReducer from "./payments";
import setProductsReducer from "./products";
import setLotsReducer from "./lots";
import setOrdersAlgReducer from "./ordersAlg";
import setExpressRatesDocumentsReducer from "./expressRatesDocuments";
import setExpressRatesParcelReducer from "./expressRatesParcel";
import setD2DRatesReducer from "./d2dRates";
import setResultReducer from "./ratesResult";
import setBookingRequestReducer from "./bookingRequest";
import setAdminsReducer from "./admins";
import setParcelObj from "./setParcelObj";
const rootReducer = combineReducers({
  currentUser: setCurrentUserReducer,
  lots: setLotsReducer,
  orders: setOrdersReducer,
  payments: setPaymentsReducer,
  products: setProductsReducer,
  ordersAlg: setOrdersAlgReducer,
  expressRatesDocuments: setExpressRatesDocumentsReducer,
  expressRatesParcel: setExpressRatesParcelReducer,
  d2dRates: setD2DRatesReducer,
  result: setResultReducer,
  bookingRequests: setBookingRequestReducer,
  admins: setAdminsReducer,
  parcelObj: setParcelObj,
});

export default rootReducer;

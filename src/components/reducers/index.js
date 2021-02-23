import { combineReducers } from "redux";
import setAdminsReducer from "./admins";
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
const rootReducer = combineReducers({
  lots: setLotsReducer,
  orders: setOrdersReducer,
  payments: setPaymentsReducer,
  admins: setAdminsReducer,
  products: setProductsReducer,
  ordersAlg: setOrdersAlgReducer,
  expressRatesDocuments: setExpressRatesDocumentsReducer,
  expressRatesParcel: setExpressRatesParcelReducer,
  d2dRates: setD2DRatesReducer,
  result: setResultReducer,
  bookingRequests: setBookingRequestReducer,
});

export default rootReducer;

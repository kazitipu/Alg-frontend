const INITIAL_STATE = { bookingRequests: [] };

const setBookingRequestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_BOOKING_REQUEST":
      return {
        ...state,
        bookingRequests: [...state.bookingRequests, action.payload],
      };
    default:
      return { ...state };
  }
};
export default setBookingRequestReducer;

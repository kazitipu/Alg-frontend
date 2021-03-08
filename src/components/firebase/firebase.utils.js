import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXDRYV_c6zKlhnmZSYCu9i0eBhNDJfo94",
  authDomain: "alg-frontend.firebaseapp.com",
  projectId: "alg-frontend",
  storageBucket: "alg-frontend.appspot.com",
  messagingSenderId: "727083865163",
  appId: "1:727083865163:web:ac807ede63fd56689e29ce",
  measurementId: "G-J59TH8LBYT",
};
firebase.initializeApp(firebaseConfig);

export var googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
  display: "popup",
});

export var facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
  prompt: "select_account",
  display: "popup",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const singInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    console.log("snapshot doesnt exist");
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      console.log("creating snapshot");
      const userCount = await incrementUserCountByOne();
      await userRef.set({
        userId: userCount < 10 ? `0${userCount}` : userCount,
        uid: userAuth.uid,
        // displayName,
        email,
        createdAt,
        ordersArray: [],
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

const incrementUserCountByOne = async () => {
  const countRef = firestore.doc(`userCount/count`);
  const snapShot = await countRef.get();
  if (!snapShot.exists) {
    try {
      countRef.set({
        userCount: 1,
      });
    } catch (error) {
      alert(error);
    }
  } else {
    try {
      countRef.update({
        userCount: snapShot.data().userCount + 1,
      });
    } catch (error) {
      alert(error);
    }
  }
  const updatedSnapShot = await countRef.get();
  return updatedSnapShot.data().userCount;
};

export const getAllExpressRatesDocument = async () => {
  const expressRatesDocumentsCollectionRef = firestore.collection(
    "expressRatesDocuments"
  );
  try {
    const expressRatesDocuments = await expressRatesDocumentsCollectionRef.get();
    const expressRatesDocumentsArray = [];
    expressRatesDocuments.forEach((doc) => {
      expressRatesDocumentsArray.push(doc.data());
    });
    return expressRatesDocumentsArray;
  } catch (error) {
    alert(error);
  }
};
export const getAllExpressRatesParcel = async () => {
  const expressRatesParcelCollectionRef = firestore.collection(
    "expressRatesParcel"
  );
  try {
    const expressRatesParcel = await expressRatesParcelCollectionRef.get();
    const expressRatesParcelArray = [];
    expressRatesParcel.forEach((doc) => {
      expressRatesParcelArray.push(doc.data());
    });
    return expressRatesParcelArray;
  } catch (error) {
    alert(error);
  }
};

export const getAllD2DRates = async (freightType, country) => {
  const d2dRatesCollectionRef = firestore.collection(
    `d2d-rates-${freightType}-${country}`
  );
  try {
    const d2dRates = await d2dRatesCollectionRef.get();
    const d2dRatesArray = [];
    d2dRates.forEach((doc) => {
      d2dRatesArray.push(doc.data());
    });
    return d2dRatesArray;
  } catch (error) {
    alert(error);
  }
};

export const getAllLots = async () => {
  const lotsCollectionRef = firestore.collection("lots");
  try {
    const lots = await lotsCollectionRef.get();
    const lotsArray = [];
    lots.forEach((doc) => {
      lotsArray.push(doc.data());
    });
    return lotsArray;
  } catch (error) {
    alert(error);
  }
};

export const setBookingRequest = async (bookingObj) => {
  const bookingId = Math.round(Math.random() * 1000000 - 1);
  const bookingRef = firestore.doc(`bookingRequest/${bookingId}`);
  const snapShot = await bookingRef.get();
  if (!snapShot.exists) {
    try {
      await bookingRef.set({
        bookingId,
        ...bookingObj,
      });
      console.log(snapShot.data());
      const uploadedSnapShot = await bookingRef.get();
      setBookingArrayOfUser({ bookingId, bookingObj });
      return uploadedSnapShot.data();
    } catch (error) {
      alert(error);
    }
  } else {
    alert(
      "there is already a booking with similar uid, please try again later"
    );
  }
};

export const setBookingArrayOfUser = async (bookingObj) => {
  console.log(bookingObj);
  console.log("set booking array of user is getting called");
  const userRef = firestore.doc(`users/${bookingObj.bookingObj.userId}`);
  const snapShot = await userRef.get();
  console.log(snapShot.data());
  try {
    userRef.update({
      bookingArray: snapShot.data().bookingArray
        ? [...snapShot.data().bookingArray, bookingObj]
        : [bookingObj],
    });
  } catch (error) {
    alert(error);
  }
};

// Orders
export const updateOrder = async (orderObj) => {
  const lotOrdersRef = firestore.doc(
    `orders${orderObj.shipmentMethod}/${orderObj.lotNo}`
  );
  try {
    const snapShot = await lotOrdersRef.get();
    const filteredOrdersArrayOfLot = snapShot
      .data()
      .orders.filter((order) => order.parcelId !== orderObj.parcelId);
    await lotOrdersRef.update({
      lotNo: orderObj.lotNo,
      orders: [...filteredOrdersArrayOfLot, orderObj],
    });
    const updatedUser = await updateToMyParcelOfUser(orderObj);
    return updatedUser;
  } catch (error) {
    alert(error);
  }
};

export const updateToMyParcelOfUser = async (orderObj) => {
  console.log("update to my parcel of user is called");
  console.log(orderObj.customerUid);
  const userRef = firestore.doc(`users/${orderObj.customerUid}`);
  try {
    const snapShot = await userRef.get();
    console.log(snapShot.data());
    const filteredMyParcelArrayOfUser = snapShot
      .data()
      .parcelArray.filter((parcel) => parcel.parcelId !== orderObj.parcelId);
    userRef.update({
      parcelArray: [...filteredMyParcelArrayOfUser, orderObj],
      id: orderObj.customerUid,
    });
    const updatedSnapShotOfUser = await userRef.get();
    return updatedSnapShotOfUser.data();
  } catch (error) {}
};

export default firebase;

import React, { useEffect } from "react";
import { Component } from "react";
import MainNavigation from "./components/MainNavigation";
import { connect } from "react-redux";
import { setCurrentUserRedux } from "./actions/index";
import {
  auth,
  createUserProfileDocument,
  firestore,
} from "../src/components/firebase/firebase.utils";
import { ToastContainer, toast } from "react-toastify";

class App extends Component {
  unsuscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        toast.success("You are successfully logged in.");
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log(snapShot.data());
          this.props.setCurrentUserRedux({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        // const cartRef = firestore.doc(`carts/${userAuth.uid}`);
        // cartRef.onSnapshot((snapShot) => {
        //   if (snapShot.exists) {
        //     this.props.setReduxCart(snapShot.data().cart);
        //   }
        // });
        // const wishlistRef = firestore.doc(`wishlists/${userAuth.uid}`);
        // wishlistRef.onSnapshot((snapShot) => {
        //   if (snapShot.exists) {
        //     this.props.setReduxWishlist(snapShot.data().wishlist);
        //   }
        // });
      } else {
        this.props.setCurrentUserRedux({ displayName: "", email: "" });
        // this.props.setReduxCart([]);
        // this.props.setReduxWishlist([]);
      }
    });
  };

  componentWillUnmount() {
    // const { cartItems } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot((snapShot) => {
    //       this.props.setCurrentUser({ id: snapShot.id, ...snapShot.data() });
    //     });
    //   } else {
    //     this.props.setCurrentUser({ displayName: "", email: "", password: "" });
    //   }
    // });
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <MainNavigation />
        <ToastContainer />
      </>
    );
  }
}

export default connect(null, { setCurrentUserRedux })(App);

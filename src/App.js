import React, { useEffect } from "react";
import { Component } from "react";
import MainNavigation from "./components/MainNavigation";
import {
  auth,
  createUserProfileDocument,
} from "../src/components/firebase/firebase.utils";

class App extends Component {
  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // userRef.onSnapshot((snapShot) => {
        //   this.props.setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        // });
      } else {
        // this.props.setCurrentUser({ displayName: "", email: "", password: "" });
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <MainNavigation />
      </>
    );
  }
}

export default App;

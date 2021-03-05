import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import HomeOne from "./home/homeOne";
import HomeThree from "./home/homeThree";
import NotFound from "./pages/notfound";
import Pricing from "./pages/pricing";
import Services from "./services/services";
import ServiceDetails from "./services/servicedetails/Content";
import BlogList from "./blog/bloglist";
import BlogStandard from "./blog/blogstandard";
import ProjectGrid from "./projects/projectgrid";
import ProjectMasonary from "./projects/projectmasonary";
import ProjectSingle from "./projects/projectsingle";
import Typography from "./pages/typography";
import ShortCodes from "./pages/shortcodes";
import RequestQuote from "./pages/requestquote";
import About from "./about";
import Contact from "./contact/contactus";
import ContactusOption from "./contact/contactusoption";
import BlogGrid from "./blog/bloggrid";
import BlogSingle from "./blog/blogsingle";
import UserPanel from "./userPanel";
import { connect } from "react-redux";

// user panel
import Dashboard from "./userPanel/dashboard";
import MyBooking from "./userPanel/myBooking/myBooking";
import MyParcel from "./userPanel/myParcel/myParcel";

const MainNavigation = (props) => {
  const { currentUser } = props;

  useEffect(() => {
    console.log("currentUser updated");
  }, [currentUser]);

  return (
    <Router basename={"/"}>
      <Switch>
        <Route path="/" exact component={HomeThree} />
        <Route path="/home-one" exact component={HomeOne} />

        <Route path="/pricing" exact component={Pricing} />
        <Route path="/requestquote" exact component={RequestQuote} />
        <Route path="/shortcodes" exact component={ShortCodes} />
        <Route path="/typography" exact component={Typography} />
        {/** About Services Contact */}
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/servicedetails" exact component={ServiceDetails} />
        {/* <Route path="/contact" exact component={Contact} /> */}
        <Route path="/contact" exact component={ContactusOption} />
        {/** Blog */}
        <Route path="/recent-news" exact component={BlogList} />
        <Route path="/blogsingle" exact component={BlogSingle} />
        {/** Projects */}
        <Route path="/projectgrid" exact component={ProjectGrid} />
        <Route path="/projectmasonary" exact component={ProjectMasonary} />
        <Route path="/projectsingle" exact component={ProjectSingle} />
        <UserPanel>
          <Route
            path="/user/:userId"
            exact
            component={() =>
              currentUser.displayName ? <Dashboard /> : <Redirect to="/" />
            }
          />
          <Route
            path="/user-my-booking"
            exact
            component={() =>
              currentUser.displayName ? <MyBooking /> : <Redirect to="/" />
            }
          />
          <Route
            path="/user-my-parcel"
            exact
            component={() =>
              currentUser.displayName ? <MyParcel /> : <Redirect to="/" />
            }
          />
        </UserPanel>
        {/** invalid routes redirection */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};
export default connect(mapStateToProps)(MainNavigation);

import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Mentors from "../Mentors/Mentors";
import SignIn from "../SignIn/SignIn";
import HomePage from "../HomePage/HomePage";
import AccountStudent from "../Account/AccountStudent";

function MainPage() {
  return (
    <>
      <div>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/mentors">
          <Mentors />
        </Route>
        <Route path="/:location/signin">
          <SignIn />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route path="/account">
          <AccountStudent />
        </Route>
      </div>
    </>
  );
}

export default MainPage;

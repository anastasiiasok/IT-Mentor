import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import Mentors from "../Mentors/Mentors";

function Main() {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <br></br>
      <Link to="/profile">Profile</Link>
      <br></br>

      <Link to="/mentors">All Mentors</Link>
      <br></br>

      <Switch>
        <Route exact path="/"></Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/mentors">
          <Mentors />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;

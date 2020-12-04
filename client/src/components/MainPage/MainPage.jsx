import React from "react";

import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeAuth, setUser, initState } from "../../store/actions";
import Profile from "../Profile/Profile";
import Mentors from "../Mentors/Mentors";
import SignIn from "../SignIn/SignIn";
import HomePage from "../HomePage/HomePage";
import AccountStudent from "../Account/AccountStudent";

function MainPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getData = async () => {

      const res = await fetch("http://localhost:3100/user/init");
      const result = await res.json();
      dispatch(changeAuth(true));
      dispatch(setUser(result));
      if (result.mentors !== undefined) {
        dispatch(initState(result.mentors.map((mentor) => mentor._id)));

      // !!!!COMMENT NEXT LINE BEFORE BUILD
      // const res = await fetch('http://localhost:3100/user/init');

      //UNCOMMENT NEXT LINE BEFORE BUILD
      const res = await fetch(
        'https://servertestmentor.herokuapp.com/user/init'
      );
      if (res.status !== 515) {
        const result = await res.json();
        dispatch(changeAuth(true));
        dispatch(setUser(result));
        if (result.mentors !== undefined) {
          dispatch(initState(result.mentors.map((mentor) => mentor._id)));
        }

      }
    };
    getData();
  }, []);
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

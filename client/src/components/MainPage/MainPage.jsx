import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Mentors from '../Mentors/Mentors';
import SignUp from '../SignUp/SignUp';
import HomePage from '../HomePage/HomePage';
function MainPage() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>

          <Route exact path='/profile'>
            <Profile />
          </Route>

          <Route exact path='/mentors'>
            <Mentors />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default MainPage;

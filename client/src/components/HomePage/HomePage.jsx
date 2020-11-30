import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './style.css';
import Mentors from '../Mentors/Mentors';

function HomePage() {
  return (
    <>
      <div class='main-heading'>
        Learn technology, solve complex problems, <br />
        prepare for future online interviews
      </div>
      <div class='find-bottom'>
        <div class='find-text'>
          <Link to='/mentors'>Find Mentor</Link>
        </div>
      </div>
      <p class='subheading'>Find your mentor among 90+ professionals</p>
      <Switch>
        <Route exact path='/mentors'>
          <Mentors />
        </Route>
      </Switch>

      <div class='tag-box'>
        <span class='tag'>
          <a href='#'>&#123;JAVA&#125;</a>
        </span>
        <span class='tag'>
          <a href='#'>&#123;Python&#125;</a>
        </span>
        <span class='tag'>
          <a href='#'>&#123;JavaScript&#125;</a>
        </span>
        <span class='tag'>
          <a href='#'>&#123;React&#125;</a>
        </span>
        <span class='tag'>
          <a href='#'>&#123;NodeJS&#125;</a>
        </span>
      </div>
    </>
  );
}

export default HomePage;

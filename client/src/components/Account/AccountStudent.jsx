import React from "react";
import "./styles.css";

function AccountStudent() {
  return (
    <div>
      <div className="account">
        <div>
          <div className="nav">
            <h1>Student's Name </h1>
            <h1 className="schedule">
              Schedule{" "}
              <img className="calendar" src="calendar.png" width="160"></img>
            </h1>
            <br></br>
            <br></br>
            <h1>
              Liked Mentors <i class="fas fa-user-friends"></i>
            </h1>
          </div>
        </div>
        <div className="logout">
          <a href="#" className="btn yellow">
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccountStudent;

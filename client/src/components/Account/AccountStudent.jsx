import React from "react";
import "./styles.css";

function AccountStudent() {
  return (
    <div>
      <div className="account">
        <div>
          <div className="nav">
            <h1>Student's Name </h1>
            <h1>
              Schedule{" "}
              <img className="calendar" src="calendar.png" width="160"></img>
            </h1>

            <h1>
              Liked Mentors <i class="far fa-thumbs-up"></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountStudent;

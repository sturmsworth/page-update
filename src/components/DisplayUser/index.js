import React from "react";

// located in constants folder
// this controls the application closing date
// for ease of use, both entries are stored as strings
// update this yearly
import { applicationClosingDate } from "../../constants/builders";

const DisplayUser = ({ userFirstName, userLastName }) => {
  return (
    <div className="row mb-5">
      <div className="col">
        <p className="h3">
          {userFirstName && userLastName
            ? `Welcome ${userFirstName} ${userLastName}`
            : `Welcome`}
        </p>
        <p className="h5">
          Thank you for your interest in the{" "}
          {"20" + (new Date().getYear() - 99)} Session
        </p>
        <p className="h5">
          {`Application closes ${applicationClosingDate.date} at ${
            applicationClosingDate.time
          }.`}
        </p>
      </div>
    </div>
  );
};
export default DisplayUser;

import React from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import ApplicantInformationCard from "../../components/ApplicantInformationCard";

const ApplicantInformation = () => {
  return (
    <UserContext.Consumer>
      {userContext => {
        const { authObject, signedIn } = userContext;
        return authObject && signedIn ? (
          <ApplicantInformationCard />
        ) : (
          <Redirect to="/" />
        );
      }}
    </UserContext.Consumer>
  );
};

export default ApplicantInformation;

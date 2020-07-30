import React from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import GuardianInformationCard from "../../components/GuardianInformationCard";

const GuardianInformation = () => {
  return (
    <UserContext.Consumer>
      {userContext => {
        const { authObject, signedIn } = userContext;
        return authObject && signedIn ? (
          <GuardianInformationCard />
        ) : (
          <Redirect to="/" />
        );
      }}
    </UserContext.Consumer>
  );
};

export default GuardianInformation;

import React from "react";
import TermsTwoCard from "../../components/TermsTwoCard";
import { LANDING } from "../../constants/routes";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const TermsTwo = () => {
  return (
    <UserContext.Consumer>
      {userContext => {
        const { signedIn, authObject } = userContext;
        return signedIn && authObject ? (
          <TermsTwoCard />
        ) : (
          <Redirect to={LANDING} />
        );
      }}
    </UserContext.Consumer>
  );
};

export default TermsTwo;

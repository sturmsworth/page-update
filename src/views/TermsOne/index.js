import React from "react";
import TermsOneCard from "../../components/TermsOneCard";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { LANDING } from "../../constants/routes";

const TermsOne = () => (
  <UserContext.Consumer>
    {userContext => {
      const { signedIn, authObject } = userContext;
      return signedIn && authObject ? (
        <TermsOneCard />
      ) : (
        <Redirect to={LANDING} />
      );
    }}
  </UserContext.Consumer>
);

export default TermsOne;

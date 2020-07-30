import React, { Component } from "react";
import AttachmentsFormCard from "../../components/AttachmentsFormCard";
import { UserContext } from "../../context/UserContext";
import { ACCOUNT } from "../../constants/routes";
import { Redirect } from "react-router-dom";

class Attachments extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          const { signedIn, authObject } = userContext;
          return signedIn && authObject ? (
            <AttachmentsFormCard />
          ) : (
            <Redirect to={ACCOUNT} />
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Attachments;

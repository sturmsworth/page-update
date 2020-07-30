import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { db } from "../../constants/firebase";

class PopupCard extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          const { userInfo, setApplicationCompleted } = userContext;
          return (
            <div className="modal">
              <div className="row">
                <div className="col">
                  This will lock your application and submit it for
                  verification. Are you sure you want to do this?
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 py-2">
                  <div className="btn btn-success" onClick={null}>
                    Yes
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 py-2">
                  <div className="btn btn-danger">No</div>
                </div>
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default PopupCard;

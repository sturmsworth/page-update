import React, { Component } from "react";
import seal from "./page-seal.png";
import { auth, firebase } from "../../constants/firebase";
import * as stuff from "../../constants/mails";
import { Link } from "react-router-dom";
import { LANDING } from "../../constants/routes";
import { UserContext } from "../../context/UserContext";
import MemberTable from "../MemberTable";
import Masthead from "../Masthead";

class MemberSignInCard extends Component {
  state = {
    error: null
  };

  initiateMemberLogin = signIn => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(result => {
        if (result) {
          const user = result.user;
          if (
            user.email === stuff.SIS ||
            user.email === stuff.ltrumbo ||
            user.email === stuff.bfinch ||
            user.email === stuff.jpalmore ||
            user.email === stuff.mhorch ||
            user.email === stuff.psturman ||
            user.email === stuff.rramsey ||
            user.email === stuff.sschaar ||
            user.email === stuff.pinfo ||
            user.email === stuff.district01 ||
            user.email === stuff.district02 ||
            user.email === stuff.district03 ||
            user.email === stuff.district04 ||
            user.email === stuff.district05 ||
            user.email === stuff.district06 ||
            user.email === stuff.district07 ||
            user.email === stuff.district08 ||
            user.email === stuff.district09 ||
            user.email === stuff.district10 ||
            user.email === stuff.district11 ||
            user.email === stuff.district12 ||
            user.email === stuff.district13 ||
            user.email === stuff.district14 ||
            user.email === stuff.district15 ||
            user.email === stuff.district16 ||
            user.email === stuff.district17 ||
            user.email === stuff.district18 ||
            user.email === stuff.district19 ||
            user.email === stuff.district20 ||
            user.email === stuff.district21 ||
            user.email === stuff.district22 ||
            user.email === stuff.district23 ||
            user.email === stuff.district24 ||
            user.email === stuff.district25 ||
            user.email === stuff.district26 ||
            user.email === stuff.district27 ||
            user.email === stuff.district28 ||
            user.email === stuff.district29 ||
            user.email === stuff.district30 ||
            user.email === stuff.district31 ||
            user.email === stuff.district32 ||
            user.email === stuff.district33 ||
            user.email === stuff.district34 ||
            user.email === stuff.district35 ||
            user.email === stuff.district36 ||
            user.email === stuff.district37 ||
            user.email === stuff.district38 ||
            user.email === stuff.district39 ||
            user.email === stuff.district40
          ) {
            this.setState(
              {
                error: null
              },
              () => {
                signIn(user);
              }
            );
          } else {
            this.setState(
              {
                error: `You do not have permission to access these features.`
              },
              () => auth.signOut()
            );
          }
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          const { error } = this.state;
          const { handleMemberSignIn, signedIn, userInfo } = userContext;

          const { district } = userInfo;

          return signedIn && userInfo.userType === "m3m133r" ? (
            <div className="py-5 my-5 container-fluid">
              <MemberTable district={district} />
            </div>
          ) : (
            <Masthead>
              <section id="login" className="pt-5 mt-5 pb-5 mb-5">
                <div className="container-fluid text-center col-lg-5 col-sm-10 bg-white px-5 py-5 rounded">
                  <div className="row">
                    <div className="col">
                      <img
                        src={seal}
                        alt="Page Seal"
                        className="img-thumbnail border-0 pb-4"
                      />
                    </div>
                  </div>
                  {error ? (
                    <div className="container text-danger">
                      <div className="row">
                        <div className="col">{error}</div>
                      </div>
                      <div className="row">
                        <div className="col pb-3">
                          <Link to={LANDING}>
                            <button className="btn btn-lg custom-buttons">
                              Return Home
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="row">
                    <div className="col">
                      <button
                        className="btn btn-lg custom-buttons"
                        onClick={() =>
                          this.initiateMemberLogin(handleMemberSignIn)
                        }
                      >
                        Member Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </Masthead>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default MemberSignInCard;

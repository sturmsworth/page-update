import React from "react";

import Masthead from "../../components/Masthead";
import AboutDivs from "../../components/AboutDivs";

import { headerStyles } from "../../styles";
import { Link, Redirect } from "react-router-dom";
import { SIGN_IN, CREATE_ACCOUNT, ACCOUNT } from "../../constants/routes";

import { UserContext } from "../../context/UserContext";

const Landing = () => (
  <UserContext.Consumer>
    {userContext => {
      const { signedIn, authObject } = userContext;
      return !signedIn && !authObject ? (
        <div>
          <Masthead>
            <div className="container animated fadeIn">
              <div className="row" style={headerStyles.text}>
                <div className="col-12">
                  <h2 className="animated slideInLeft">
                    Welcome{" "}
                    <span className="attention">
                      <i>Prospective Pages!</i>
                    </span>
                  </h2>
                  <h3 className="animated slideInRight">
                    {" "}
                    We're{" "}
                    <span className="attention">
                      <i>excited</i>
                    </span>{" "}
                    to have you.
                  </h3>
                  <h4>
                    Please log in, create an account, or scroll down to learn
                    more about us.
                  </h4>
                </div>
              </div>
              <div className="col-12">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <Link to={SIGN_IN}>
                        <button className="btn btn-lg btn-primary btn-block custom-buttons">
                          Sign In
                        </button>
                      </Link>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <Link to={CREATE_ACCOUNT}>
                        <button className="btn btn-lg btn-secondary btn-block">
                          Create Account
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Masthead>
          <AboutDivs />
        </div>
      ) : (
        <Redirect to={ACCOUNT} />
      );
    }}
  </UserContext.Consumer>
);

export default Landing;

import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { UserContext } from "../../context/UserContext";

const NavBar = () => (
  <UserContext.Consumer>
    {userContext => {
      const { signedIn, handleSignOut, userInfo } = userContext;
      const userType = userInfo.userType;
      return signedIn && userType === 0 ? (
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark shadow"
          style={{ backgroundColor: "#301503" }}
        >
          <div className="container">
            <Link className="navbar-brand" to={ROUTES.LANDING}>
              Senate Page Leadership Program
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTES.ACCOUNT}>
                    <button className="btn btn-outline-light btn-block">
                      Home
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={ROUTES.CONTACT}>
                    <button className="btn btn-outline-light btn-block">
                      Contact
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <div className="nav-link">
                    <button
                      className="btn custom-buttons"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : signedIn && (userType === "ch4c1m1n" || userType === "m3m133r") ? (
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark shadow"
          style={{ backgroundColor: "#301503" }}
        >
          <div className="container">
            <Link className="navbar-brand" to={ROUTES.LANDING}>
              Senate Page Leadership Program
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTES.ADMIN}>
                    <button className="btn btn-outline-light btn-block">
                      Home
                    </button>
                  </Link>
                </li>

                <li className="nav-item">
                  <div className="nav-link">
                    <button
                      className="btn custom-buttons"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark shadow"
          style={{ backgroundColor: "#301503" }}
        >
          <div className="container">
            <Link className="navbar-brand" to={ROUTES.LANDING}>
              Senate Page Leadership Program
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTES.LANDING}>
                    <button className="btn btn-outline-light btn-block">
                      Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTES.ABOUT}>
                    <button className="btn btn-outline-light btn-block">
                      About
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTES.CONTACT}>
                    <button className="btn btn-outline-light btn-block">
                      Contact
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTES.SIGN_IN}>
                    <button className="btn custom-buttons">Sign In</button>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={ROUTES.CREATE_ACCOUNT}>
                    <button className="btn btn-secondary btn-block">
                      Create Account
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }}
  </UserContext.Consumer>
);

export default NavBar;

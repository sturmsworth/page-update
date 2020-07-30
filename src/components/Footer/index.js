import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import * as ROUTES from "../../constants/routes";

class Footer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          const { signedIn, authObject } = userContext;
          return (
            <section className="footers">
              <footer
                className="container-fluid pt-3"
                style={{ backgroundColor: "#601806", color: "whitesmoke" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-8">
                      <div>
                        <h3 className="text-uppercase">
                          Welcome Prospective Pages
                        </h3>
                        <p>
                          Please use any of the following links to navigate your
                          application process
                        </p>
                        <p>
                          This site is best viewed using the Google Chrome web
                          browser. You can download it below.
                        </p>
                        <a
                          href="https://www.google.com/chrome/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-lg btn-outline-light">
                            Download <i className="fab fa-chrome" />
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="col-3 ml-1 pt-1">
                      <div className="row">
                        <h3 className="text-uppercase">Links</h3>
                      </div>
                      <div className="row">
                        {signedIn && authObject ? (
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                to={ROUTES.ACCOUNT}
                                style={{ color: "whitesmoke" }}
                              >
                                Home
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={ROUTES.CONTACT}
                                style={{ color: "whitesmoke" }}
                              >
                                Contact
                              </Link>
                            </li>

                            <li>
                              <a
                                href="https://lis.virginia.gov/lis.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "whitesmoke" }}
                              >
                                Session Tracking
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://www.virginia.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "whitesmoke" }}
                              >
                                Virginia.gov
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://whosmy.virginiageneralassembly.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "whitesmoke" }}
                              >
                                Who's My Legislator?
                              </a>
                            </li>
                          </ul>
                        ) : (
                          <ul className="list-unstyled">
                            <li>
                              <Link
                                to={ROUTES.LANDING}
                                style={{ color: "whitesmoke" }}
                              >
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={ROUTES.ABOUT}
                                style={{ color: "whitesmoke" }}
                              >
                                About
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={ROUTES.CONTACT}
                                style={{ color: "whitesmoke" }}
                              >
                                Contact
                              </Link>
                            </li>
                            <li>
                              <Link
                                to={ROUTES.SIGN_IN}
                                style={{ color: "whitesmoke" }}
                              >
                                Sign In
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={ROUTES.CREATE_ACCOUNT}
                                style={{ color: "whitesmoke" }}
                              >
                                Create Account
                              </Link>
                            </li>

                            <li>
                              <a
                                href="https://lis.virginia.gov/lis.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "whitesmoke" }}
                              >
                                Session Tracking
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://www.virginia.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "whitesmoke" }}
                              >
                                Virginia.gov
                              </a>
                            </li>

                            <li>
                              <a
                                href="https://whosmy.virginiageneralassembly.gov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "whitesmoke" }}
                              >
                                Who's My Legislator?
                              </a>
                            </li>

                            <li>
                              <Link
                                to={ROUTES.ADMIN}
                                style={{ color: "whitesmoke" }}
                              >
                                Admin
                              </Link>
                            </li>

                            <li>
                              <Link
                                to={ROUTES.MEMBERS}
                                style={{ color: "whitesmoke" }}
                              >
                                Members
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
              <footer style={{ backgroundColor: "#301503" }} className="pt-3">
                <div className="container-fluid text-center">
                  <div className="row">
                    <div className="col-12">
                      <p style={{ color: "whitesmoke" }}>
                        &copy;{"20" + (new Date().getYear() - 100)} Senate of
                        Virginia
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </section>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default Footer;

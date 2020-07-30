import React, { useState, useContext } from "react";

// api
import { initiateAdminLogin } from "../../constants/firebase/firebase-api";

// react router
import { Link } from "react-router-dom";

// images
import seal from "./page-seal.png";

// routes
import { LANDING } from "../../constants/routes";

// context
import { UserContext } from "../../context/UserContext";

// components
import AdminTable from "../AdminTable";
import Masthead from "../Masthead";

const AdminSignInCard = () => {
  const [error, setError] = useState(null);

  const { handleAdminSignIn, signedIn, userInfo } = useContext(UserContext);

  return signedIn && userInfo.userType === "ch4c1m1n" ? (
    <div className="py-5 my-5 container-fluid">
      <AdminTable />
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
                onClick={() => initiateAdminLogin(handleAdminSignIn, setError)}
              >
                Administrator Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
    </Masthead>
  );
};
export default AdminSignInCard;

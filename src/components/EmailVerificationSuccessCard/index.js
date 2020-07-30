import React from "react";
import { Link } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";

const EmailVerificationSuccessCard = () => {
  return (
    <section id="reg-complete">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <p className="h5">Your email address has been verified</p>
            </div>
            <div className="card-body">
              <p>
                Thank you for completing the verification process. Please click
                below to sign in.
              </p>
              <Link className="btn btn-lg btn-primary" to={SIGN_IN}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerificationSuccessCard;

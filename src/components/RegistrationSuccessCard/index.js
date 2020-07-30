import React from "react";
import { Link } from "react-router-dom";
import { LANDING } from "../../constants/routes";

const RegistrationSuccessCard = () => {
  return (
    <section id="reg-complete">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <p className="h5">Thank you for registering.</p>
            </div>
            <div className="card-body">
              <p>
                You've just completed the first step towards completing your
                Senate Page application.
              </p>
              <p>
                A verification email will be sent to you shortly from SPLP
                Admin. If none appears in your inbox please check your email
                spam filters and confirm the email address was correct.
              </p>
              <Link className="btn btn-lg btn-primary" to={LANDING}>
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSuccessCard;

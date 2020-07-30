import React, { Component } from "react";
import Masthead from "../../components/Masthead";
import { Redirect } from "react-router-dom";
import { auth } from "../../constants/firebase";
import { LANDING } from "../../constants/routes";
import { customDivStyles } from "../../styles";

class PasswordResetCard extends Component {
  state = {
    email: null,
    redirect: false,
    error: null
  };

  getEmail = e => {
    this.setState({
      email: e.target.value,
      error: null
    });
  };

  submitReset = state => {
    const actionCodeSettings = {
      url: `https://apps.senate.virginia.gov/page-application/`,
      handleCodeInApp: true
    };
    auth
      .sendPasswordResetEmail(state, actionCodeSettings)
      .then(() => {
        this.setState({
          redirect: true
        });
      })
      .catch(err =>
        this.setState({
          ...this.state,
          error: err.message
        })
      );
  };

  render() {
    return this.state.redirect ? (
      <Redirect to={LANDING} />
    ) : (
      <Masthead>
        <section id="create-account">
          <div className="container-fluid text-center shadow">
            <div className="col-12">
              <div className="card h-100">
                <div className="card-body">
                  <h3 className="card-title" style={customDivStyles.titles}>
                    Reset Password
                  </h3>
                  <p>
                    Please enter the email address you used to register your
                    account. Once entered you will be emailed directions on how
                    to reset your password. If you <i>do not</i> receive an
                    email, <i>check your spam filters</i> and try again.
                  </p>
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="form-row py-3">
                      <div className="form-group col-12">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Email Address"
                          id="password-reset-email"
                          onChange={this.getEmail}
                        />
                      </div>
                    </div>
                  </form>
                  {this.state.error ? (
                    <div className="row">
                      <div className="col">
                        <p className="text-danger">{this.state.error}</p>
                      </div>
                    </div>
                  ) : null}
                  <button
                    className="btn btn-lg custom-buttons px-5"
                    onClick={() => this.submitReset(this.state.email)}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Masthead>
    );
  }
}

export default PasswordResetCard;

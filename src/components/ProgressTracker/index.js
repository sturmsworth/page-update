import React from "react";
import { FormControlContext } from "../../context/FormControlContext";
import { UserContext } from "../../context/UserContext";

import Popup from "reactjs-popup";

class ProgressTracker extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          return (
            <FormControlContext.Consumer>
              {formControlContext => {
                const { formControl } = formControlContext;
                const {
                  applicationSubmitted,
                  // verified,
                  setApplicationCompleted,
                  handleOpenPopup,
                  handleClosePopup,
                  adminVerification
                } = userContext;

                const keys = Object.keys(formControl);
                const filterTrue = keys.filter(k => {
                  return formControl[k];
                });

                const amountComplete = filterTrue.length;
                const getPercent = (amountComplete / 5) * 100;
                const setProgressColor = getPercent => {
                  if (getPercent <= 20) {
                    return "bg-danger";
                  } else if (getPercent > 20 && getPercent <= 60) {
                    return "bg-warning";
                  } else if (getPercent > 60 && getPercent !== 100) {
                    return "bg-success";
                  } else {
                    return "custom-buttons";
                  }
                };

                const handleStatusText = (
                  applicationCompleted,
                  adminVerification
                ) => {
                  if (applicationCompleted && !adminVerification) {
                    return "Awaiting Verification";
                  } else if (!applicationCompleted && !adminVerification) {
                    return "Application in Progress";
                  } else if (applicationCompleted && adminVerification) {
                    return "Application received and verified. Awaiting selection.";
                  }
                };

                const checkIfCompletedAndSubmitted = (
                  percentage,
                  submitted
                ) => {
                  if (percentage === 100 && !submitted) {
                    return true;
                  } else {
                    return false;
                  }
                };

                const checkIfStartingApplication = percentage => {
                  if (percentage === 0) {
                    return true;
                  } else {
                    return false;
                  }
                };

                return (
                  <section className="progress-tracker">
                    <div className="container">
                      {checkIfStartingApplication(getPercent) ? (
                        <div className="card text-center bg-primary text-white mb-2">
                          <div className="card-body">
                            <h5 className="card-title">
                              <b>
                                <u>
                                  You Look New here, Let us Give you the Rundown
                                </u>
                              </b>
                            </h5>
                            <div className="card-text text-left">
                              Welcome to our new Senate Page Leadership Program
                              web application. Here are a few quick tips to get
                              you started:
                              <br />
                              <ul>
                                <li>
                                  Each step must be marked as complete AND
                                  submitted in order for it to count. This
                                  ensures that we know the entirety of the
                                  application is complete before we start
                                  verifying its contents.
                                </li>
                                <li>
                                  You can save your application progress at any
                                  time by clicking "Save Current Progress"
                                  during steps 1-4. All attachments in Step 5
                                  must be uploaded and sent together.
                                </li>
                                <li>
                                  The steps do not have to be completed in
                                  order. Take your time and complete them at
                                  your own pace.
                                </li>
                                <li>
                                  All necessary attachment downloads can be
                                  found in Step 5 or in the "Form Downloads" box
                                  below.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {checkIfCompletedAndSubmitted(
                        getPercent,
                        applicationSubmitted
                      ) ? (
                        <div className="card text-center bg-primary text-white mb-2">
                          <div className="card-body">
                            <h5 className="card-title">
                              You're almost finished!
                            </h5>
                            <div className="card-text">
                              We're all set to receive your application, but
                              there's one more step. Please take a moment ensure
                              all your details and attachments are correct, then
                              click "Submit Application" below when you're
                              ready.
                            </div>
                          </div>
                        </div>
                      ) : null}

                      <div className="card text-center mb-2">
                        <div className="card-body">
                          <h5 className="card-title">Form Downloads</h5>
                          <div className="card-text text-left">
                            <p>
                              Below you will find a list of required forms.
                              These should be completed and saved in a PDF
                              format with a size no larger than 5MB before being
                              uploaded as part of Step 5
                            </p>
                            <br />
                            <ul>
                              <li>
                                <b>School Endorsement Form</b> -{" "}
                                <a
                                  href="https://firebasestorage.googleapis.com/v0/b/page-application-c791e.appspot.com/o/2020%20Page%20School%20Endorsement%20Form.pdf?alt=media&token=d258e1a0-45c8-4c87-9c87-eff470c50014"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Link
                                </a>
                              </li>
                              <li>
                                <b>Applicant Extracurricular Activities</b> -{" "}
                                <a
                                  href="https://firebasestorage.googleapis.com/v0/b/page-application-c791e.appspot.com/o/SPLP%20Activities.pdf?alt=media&token=def2c15b-4ddd-48fd-8e43-62b27c64f3b9"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Link
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <h1>Your Progress Snapshot:</h1>
                        </div>
                      </div>

                      <div className="card text-center my-3">
                        <div className="card-body">
                          <h5 className="card-title">Percentage Complete:</h5>
                          <div className="progress" style={{ height: "50px" }}>
                            <div
                              className={`progress-bar ${setProgressColor(
                                getPercent
                              )}`}
                              role="progressbar"
                              aria-valuenow={getPercent}
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: `${getPercent}%` }}
                            >
                              <h5>{getPercent === 100 ? `Complete` : null}</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card text-center my-3">
                        <div className="card-body">
                          <h5 className="card-title">Status:</h5>
                          <p className="card-text text-secondary">
                            {handleStatusText(
                              applicationSubmitted,
                              adminVerification
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="text-center my-3">
                        {getPercent === 100 ? (
                          applicationSubmitted ? (
                            <button className="btn btn-lg btn-disabled btn-block py-3">
                              Application Submitted
                            </button>
                          ) : (
                            <div>
                              <button
                                className="btn btn-lg custom-buttons btn-block py-3"
                                onClick={() => handleOpenPopup()}
                              >
                                Submit Application
                              </button>
                              <Popup
                                open={userContext.popup}
                                onClose={handleClosePopup}
                              >
                                <div className="container p-5 text-center">
                                  <div className="row">
                                    <div className="col">
                                      This will lock your application and submit
                                      it for verification. Once you do this you
                                      cannot go back. Are you sure you're ready
                                      to submit?
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 py-2">
                                      <button
                                        className="btn btn-block btn-success"
                                        onClick={setApplicationCompleted}
                                      >
                                        Yes
                                      </button>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 py-2">
                                      <button
                                        className="btn btn-block btn-danger"
                                        onClick={null}
                                      >
                                        No
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </Popup>
                            </div>
                          )
                        ) : (
                          <button className="btn btn-lg btn-disabled btn-block py-3">
                            Submit Application
                          </button>
                        )}
                      </div>
                    </div>
                  </section>
                );
              }}
            </FormControlContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ProgressTracker;

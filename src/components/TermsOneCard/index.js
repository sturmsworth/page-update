import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { TermsFormContext } from "../../context/TermsFormContext";
import { Redirect } from "react-router-dom";
import { TERMS_TWO } from "../../constants/routes";

class TermsOneCard extends Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const { redirect } = this.state;
    return !redirect ? (
      <UserContext.Consumer>
        {userContext => {
          return (
            <TermsFormContext.Consumer>
              {termsFormContext => {
                const {
                  termsForm,
                  setTermsOneApplicant,
                  setTermsOneGuardian
                } = termsFormContext;
                const { termsOneApplicant, termsOneGuardian } = termsForm;
                return (
                  <section className="terms mt-5 pt-5">
                    <div className="container pt-3">
                      <div className="row">
                        <div className="col">
                          <h3 className="text-uppercase">
                            Application for 2020 Session
                          </h3>
                          <h5 className="text-uppercase">
                            Applications should be submitted no earlier than
                            August 5 and no later than October 16, 2019.
                          </h5>
                          <p>
                            Applicants should read all instructions with
                            parents/legal guardians before submitting a
                            completed application.{" "}
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <h5 className="text-uppercase">
                            I. General Information
                          </h5>
                          <hr style={{ borderWidth: "3px" }} />
                          <p>
                            Please read this section carefully and completely.
                            Highlights of the Senate Page Leadership Program
                            (SPLP) are included in this section. If you apply
                            for the program, you should not plan vacations and
                            activities during the legislative session and your
                            school break may occur during this time. Discuss
                            this application with your family, your principal,
                            and your teachers before it is submitted. Senate
                            Pages are required to work on state holidays during
                            session.
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <h5 className="text-uppercase">II. Application</h5>
                          <hr style={{ borderWidth: "3px" }} />
                          <p>
                            Persons interested in Senate Page appointments
                            should complete the online application. The
                            applicant is responsible for completing and
                            submitting his/her application. We encourage
                            parents/legal guardians to assist with the
                            application process. The House Page Program is a
                            separate application with different requirements and
                            deadlines. The following items are required to
                            submit your application online:
                          </p>
                          <ol>
                            <li>
                              School Endorsement form - completed by your
                              principal and guidance counselor.{" "}
                            </li>
                            <li>
                              Two professional letters of recommendation,
                              addressed to your state Senator. (Letters should
                              be scanned together as one file) Letters of
                              recommendation can come from teachers, coaches,
                              civic leaders, Senators, or Delegates. You do not
                              need a letter of endorsement from a legislator.
                            </li>
                            <li>
                              A personal essay of no more than 300 words on one
                              of the following topics:
                            </li>
                            <ul>
                              <li>
                                Discuss something your locality does well. What
                                is something on which they could improve and how
                                may that be achieved?
                              </li>
                              <li>
                                Define leadership and discuss three qualities a
                                young person must possess to be a successful
                                leader.
                              </li>
                            </ul>
                          </ol>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <h5 className="text-uppercase">
                            III. Checklist for Applicants
                          </h5>
                          <hr style={{ borderWidth: "3px" }} />
                          <p>
                            Before completing the online application, please
                            make sure you have completed all information fields
                            and have attached the following:
                          </p>
                          <ol>
                            <li>
                              Applicant Photo (JPEG only, file not to exceed
                              10MB)
                            </li>
                            <li>
                              Activities Form (.pdf only, file not to exceed
                              5MB)
                            </li>
                            <li>Essay (.pdf only, file not to exceed 5MB)</li>
                            <li>
                              School Endorsement form (.pdf only, file not to
                              exceed 5MB)
                            </li>
                            <li>
                              Two letters of recommendation (.pdf only, file not
                              to exceed 5MB)
                            </li>
                          </ol>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <h5 className="text-uppercase">IV. Questions?</h5>
                          <hr style={{ borderWidth: "3px" }} />
                          <p>
                            Please call us at (804) 698-7410 or send an e-mail
                            to pageinfo@senate.virginia.gov with any questions
                            about the program or application. Selections are
                            usually made by mid-December for the upcoming
                            legislative session in January.
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="terms-page-one-applicant"
                              checked={termsOneApplicant}
                              onChange={setTermsOneApplicant}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="terms-page-one-applicant"
                            >
                              I (the applicant) reviewed and understand the
                              above information.
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="terms-page-one-applicant"
                              checked={termsOneGuardian}
                              onChange={setTermsOneGuardian}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="terms-page-one-guardian"
                            >
                              I (the parent/legal guardian) reviewed and
                              understand the above information.
                            </label>
                          </div>
                        </div>
                      </div>

                      {termsOneApplicant && termsOneGuardian ? (
                        <div className="row text-center mb-3">
                          <div className="col">
                            <div className="continue px-2 py-2">
                              <button
                                className="btn btn-lg btn-primary"
                                onClick={this.setRedirect}
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="row text-center mb-3">
                            <div className="col">
                              <div className="continue px-2 py-2">
                                <button
                                  className="btn btn-lg btn-secondary"
                                  onClick={null}
                                >
                                  Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                );
              }}
            </TermsFormContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    ) : (
      <Redirect to={TERMS_TWO} />
    );
  }
}

export default TermsOneCard;

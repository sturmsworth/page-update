import React from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { signInSchema } from "../../constants/schemas";
import seal from "./page-seal.png";
import { UserContext } from "../../context/UserContext";
import { ApplicantFormContext } from "../../context/ApplicantFormContext";
import { MiscFormContext } from "../../context/MiscFormContext";
import { FormControlContext } from "../../context/FormControlContext";
import { AttachmentsContext } from "../../context/AttachmentsContext";
import { GuardianFormContext } from "../../context/GuardianFormContext";
import { TermsFormContext } from "../../context/TermsFormContext";
import { Redirect } from "react-router-dom";
import {
  ACCOUNT,
  CREATE_ACCOUNT,
  PASSWORD_RESET
} from "../../constants/routes";

class SignInCard extends React.Component {
  activateAnimation = () => {
    setTimeout(() => {
      return `animated shake`;
    }, 1000);
  };
  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          return (
            <ApplicantFormContext.Consumer>
              {applicantFormContext => {
                return (
                  <MiscFormContext.Consumer>
                    {miscFormContext => {
                      return (
                        <FormControlContext.Consumer>
                          {formControlContext => {
                            return (
                              <AttachmentsContext.Consumer>
                                {attachmentsContext => {
                                  return (
                                    <GuardianFormContext.Consumer>
                                      {guardianFormContext => {
                                        return (
                                          <TermsFormContext.Consumer>
                                            {termsFormContext => {
                                              const {
                                                setInitialStateApplicant,
                                                setInitialStateApplicantErrors
                                              } = applicantFormContext;
                                              const {
                                                setInitialStateAttachments
                                              } = attachmentsContext;

                                              const {
                                                setInitialStateFormControl
                                              } = formControlContext;

                                              const {
                                                setInitialStateGuardian,
                                                setInitialStateGuardianErrors
                                              } = guardianFormContext;

                                              const {
                                                setInitialStateMisc,
                                                setInitialStateMiscErrors
                                              } = miscFormContext;

                                              const {
                                                setInitialStateTerms
                                              } = termsFormContext;

                                              const {
                                                signInError,
                                                handleSignIn,
                                                handleSignInError,
                                                signedIn,
                                                userInfo
                                                // userInfo
                                              } = userContext;

                                              return signedIn &&
                                                userInfo.userType === 0 ? (
                                                <Redirect to={ACCOUNT} />
                                              ) : (
                                                <Formik
                                                  initialValues={{
                                                    email: "",
                                                    password: ""
                                                  }}
                                                  validationSchema={
                                                    signInSchema
                                                  }
                                                  onSubmit={values => {
                                                    handleSignIn(
                                                      values.email,
                                                      values.password,
                                                      setInitialStateTerms,
                                                      setInitialStateApplicant,
                                                      setInitialStateApplicantErrors,
                                                      setInitialStateGuardian,
                                                      setInitialStateGuardianErrors,
                                                      setInitialStateMisc,
                                                      setInitialStateMiscErrors,
                                                      setInitialStateAttachments,
                                                      setInitialStateFormControl
                                                    );
                                                  }}
                                                >
                                                  {({ errors, touched }) => {
                                                    return (
                                                      <section
                                                        id="login"
                                                        className="pt-4 pb-3"
                                                      >
                                                        <div
                                                          className={`container-fluid text-center col-lg-5 col-sm-10 bg-white px-5 py-5 rounded ${
                                                            signInError
                                                              ? "animated shake"
                                                              : null
                                                          }`}
                                                        >
                                                          <Form>
                                                            <div className="row">
                                                              <div className="col">
                                                                <img
                                                                  src={seal}
                                                                  alt="Page Seal"
                                                                  className="img-thumbnail border-0 pb-4"
                                                                />
                                                                <div className="form-group">
                                                                  <Field
                                                                    name="email"
                                                                    className="form-control"
                                                                    placeholder="Email address"
                                                                    type="email"
                                                                  />
                                                                </div>

                                                                <div className="form-group">
                                                                  <Field
                                                                    name="password"
                                                                    className="form-control"
                                                                    placeholder="Password"
                                                                    type="password"
                                                                  />
                                                                </div>

                                                                {signInError ? (
                                                                  <div className="text-danger pb-3">
                                                                    {handleSignInError(
                                                                      signInError
                                                                    )}
                                                                  </div>
                                                                ) : null}

                                                                <button
                                                                  type="submit"
                                                                  className="btn btn-lg btn-block custom-buttons"
                                                                >
                                                                  Sign in
                                                                </button>
                                                              </div>
                                                            </div>
                                                          </Form>

                                                          <div className="row mt-3">
                                                            <div className="col">
                                                              <Link
                                                                to={
                                                                  CREATE_ACCOUNT
                                                                }
                                                              >
                                                                Create an
                                                                account
                                                              </Link>
                                                            </div>
                                                          </div>

                                                          <div className="row m-1">
                                                            <div className="col">
                                                              <Link
                                                                to={
                                                                  PASSWORD_RESET
                                                                }
                                                              >
                                                                Forgot Password
                                                              </Link>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </section>
                                                    );
                                                  }}
                                                </Formik>
                                              );
                                            }}
                                          </TermsFormContext.Consumer>
                                        );
                                      }}
                                    </GuardianFormContext.Consumer>
                                  );
                                }}
                              </AttachmentsContext.Consumer>
                            );
                          }}
                        </FormControlContext.Consumer>
                      );
                    }}
                  </MiscFormContext.Consumer>
                );
              }}
            </ApplicantFormContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default SignInCard;

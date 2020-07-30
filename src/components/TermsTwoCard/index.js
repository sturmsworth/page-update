import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { TermsFormContext } from "../../context/TermsFormContext";
import { FormControlContext } from "../../context/FormControlContext";
import { Redirect } from "react-router-dom";
import { db } from "../../constants/firebase";
import { ACCOUNT } from "../../constants/routes";

const spanStyles = {
  fontWeight: "bold",
  color: "#3e899f",
  textDecoration: "underline"
};

class TermsTwoCard extends Component {
  state = {
    redirect: false,
    error: false
  };

  setErrorMessage = () => {
    this.setState({
      ...this.state,
      error: "You must click 'Accept' before you may continue."
    });
  };

  // setRedirectAndSubmit = (firstName, lastName, termsForm, formControl) => {
  //   this.setState({
  //     redirect: true
  //   });

  //   const batch = db.batch();
  //   const terms = db
  //     .collection("users")
  //     .doc(`${lastName}, ${firstName}`)
  //     .collection("forms")
  //     .doc("termsForm");
  //   const formCompletion = db
  //     .collection("users")
  //     .doc(`${lastName}, ${firstName}`)
  //     .collection("forms")
  //     .doc("formControl");

  //   batch.set(terms, { ...termsForm });
  //   batch.set(formCompletion, { ...formControl });
  //   batch.commit().catch(err => console.log(err.code, err.message));
  // };

  setRedirectAndSubmit = (email, termsForm, formControl) => {
    this.setState({
      redirect: true
    });

    const userRef = db.collection("users").doc(`${email}`);

    userRef.update({
      "forms.termsForm": {
        ...termsForm
      },
      formControl: {
        ...formControl
      }
    });
  };

  render() {
    const { redirect } = this.state;
    return (
      <FormControlContext.Consumer>
        {formControlContext => (
          <UserContext.Consumer>
            {userContext => (
              <TermsFormContext.Consumer>
                {termsFormContext => {
                  const { userInfo } = userContext;
                  const { email } = userInfo;
                  const {
                    termsForm,
                    setTermsTwoApplicant,
                    setTermsTwoGuardian
                  } = termsFormContext;
                  const { termsTwoApplicant, termsTwoGuardian } = termsForm;
                  const {
                    setTermsFormCompleted,
                    formControl
                  } = formControlContext;
                  return !redirect ? (
                    <section className="terms mt-5 pt-5">
                      <div className="container pt-3">
                        <div className="row">
                          <div className="col">
                            <h3 className="text-uppercase">
                              General Information
                            </h3>

                            <p>
                              Pursuant to the Rules of the Senate adopted on
                              January 13, 2016, the members of the Senate elect
                              twenty Pages. In addition, six Pages are appointed
                              by the leadership of the Senate to serve during a
                              legislative session. The Clerk of the Senate may
                              appoint additional Pages.
                            </p>

                            <p>
                              Senate Pages cannot be less than 13 or more than
                              14 years of age at the time of election or
                              appointment (January 8, 2020). They are elected or
                              appointed for a term of one session and are not
                              eligible for reelection or reappointment. In order
                              to provide this opportunity for as many young
                              people as possible, persons who have served as a
                              page in the House of Delegates are not eligible to
                              serve as a Senate Page.
                            </p>

                            <p>
                              <span style={spanStyles}>Activity Fee:</span>{" "}
                              Applicants who receive admission to the program
                              will be required to submit a $50.00 activity fee
                              at orientation.
                            </p>

                            <p>
                              <span style={spanStyles}>
                                Applicants should have an A or B average
                              </span>{" "}
                              in school at the time of appointment. The school
                              endorsement form must be signed by the appropriate
                              persons and included with your completed
                              application. Students admitted to the program will
                              be required to submit their latest report card or
                              transcript with employment forms. The Senate
                              Clerk's Office reserves the right to rescind
                              offers of admission to the program upon receipt of
                              academic standing records.{" "}
                            </p>

                            <p>
                              <span style={spanStyles}>Notification:</span>{" "}
                              Selections are usually made in mid-December. All
                              applicants will be notified by mail, email, and
                              through our online SPLP Application Program. Those
                              who receive admission to the program will be
                              issued a handbook and employment forms.{" "}
                            </p>

                            <p>
                              <span style={spanStyles}>Orientation:</span>{" "}
                              Orientation will be held on Capitol Square on
                              Sunday, January 5, 2020. Attendance is mandatory
                              for Pages and parents/legal guardians. Additional
                              training for Pages will be held on January 6 and
                              7.{" "}
                            </p>

                            <p>
                              <span style={spanStyles}>
                                Attire and Appearance:
                              </span>{" "}
                              Senate Pages are required to wear a standard-cut,
                              wool or polyester, navy blue blazer at all times
                              while on duty. Girls must wear white blouses or
                              turtleneck tops, gray slacks, and coordinating
                              socks. Boys must wear white shirts, gray slacks,
                              and ties that coordinate with gray and navy.
                              Comfortable, black walking shoes and a warm coat
                              to go over the blazer are required. Hair must be
                              neatly groomed and should not cover the name
                              badge. Bangs must be trimmed above the eye-brows.
                            </p>

                            <p>
                              <span style={spanStyles}>
                                Conduct and Decorum:
                              </span>{" "}
                              Each Senate Page is held to a strict code of
                              professional conduct at all times. Those who do
                              not follow the program handbook shall be subject
                              to suspension or dismissal from the program. Upon
                              suspension or dismissal from the program, their
                              school will be notified.
                            </p>

                            <p>
                              <span style={spanStyles}>Duties:</span> Senate
                              Pages work 8:30 a.m. - 5:00 p.m. Monday - Thursday
                              and 8:30 a.m. - Noon on Friday. Pages are expected
                              to work the entire session (Wednesday, January 8 -
                              Friday, March 6, 2020). Each Senate Page will be
                              tasked with various job assignments such as
                              staffing committee meetings (in a backup clerk
                              capacity), answering telephone calls, providing
                              basic concierge services and speaking to the
                              public or visiting delegations about their
                              experience and role in the legislative process.
                              Please do not apply if you are a member of a
                              sports team or organized activity from which you
                              can not be excused during the legislative session.
                              Pages will not be excused for sports team
                              games/championships, band concerts, or other
                              organized activity's function. Consider all
                              activities and personal/team commitments carefully
                              before applying to the Senate Page Leadership
                              Program.{" "}
                            </p>

                            <p>
                              <span style={spanStyles}>Housing:</span> Hotel
                              residency is required for all program participants
                              beginning on Sunday evening. The entire class will
                              check out for the week on Friday mornings. Housing
                              arrangements are made for Senate Pages at a hotel
                              within walking distance of the Capitol. The Senate
                              Clerk's Office makes the reservations, roommate
                              assignments, and provides a couple to chaperone.
                              The cost of the hotel room is billed to the Senate
                              Clerk's Office. Senate Pages have a curfew of
                              10:30 p.m.{" "}
                            </p>

                            <p>
                              <span style={spanStyles}>Salary:</span> The salary
                              is $145.00 per week. Chapter 879 of the 2008 Acts
                              of the General Assembly directs the Commonwealth
                              of Virginia to disburse payroll and per diem
                              checks through direct deposit to a checking or
                              savings account. This is a mandatory requirement
                              for all persons on state payrolls. Pages also
                              receive a weekly per diem of $125.00.
                            </p>

                            <p>
                              <span style={spanStyles}>Study Hall:</span> Senate
                              Pages and their parents are responsible for
                              obtaining their schoolwork and making sure it is
                              returned to their school. Senate Pages are
                              required to attend a monitored study hall on
                              Monday through Thursday nights from 7:00 p.m. to
                              9:00 p.m. These sessions are held at the hotel.
                              Only the Clerk of the Senate can excuse a Page
                              from study hall. Schoolwork assignments are to be
                              obtained by the Page from his/her teachers. The
                              Senate tutors do not make work assignments. They
                              are available to assist the students with the
                              assignments from their schools.{" "}
                            </p>

                            <p>
                              <span style={spanStyles}>Transportation:</span>{" "}
                              Transportation arrangements to and from home are
                              the responsibility of each Senate Page and his/her
                              parents. Senate Pages are not allowed to ride in
                              motor vehicles driven by anyone other than a
                              member of his/her family, a Senator or Delegate,
                              or a member of the Clerk's staff unless written
                              authorization from a parent or guardian is on file
                              in the Senate Clerk's Office.
                            </p>

                            <p>
                              <span style={spanStyles}>Medical Emergency:</span>{" "}
                              The Senate Clerk's Office has an agreement with
                              the Pediatrics Department of Virginia Commonwealth
                              University Medical Center to provide emergency
                              medical service for Senate Pages. Parents are
                              responsible for the cost of treatment and will be
                              billed by VCU. Parents should advise the Senate
                              Clerk's Office if their insurance would not cover
                              treatment.{" "}
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
                                checked={termsTwoApplicant}
                                onChange={setTermsTwoApplicant}
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
                                checked={termsTwoGuardian}
                                onChange={setTermsTwoGuardian}
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

                        {termsTwoApplicant && termsTwoGuardian ? (
                          <div className="row text-center mb-5">
                            <div className="col">
                              <div className="accept px-2 py-2">
                                <button
                                  className="btn btn-lg btn-primary mr-5"
                                  onClick={() =>
                                    setTermsFormCompleted(termsForm)
                                  }
                                >
                                  Accept
                                </button>
                                <button
                                  className={
                                    formControl.termsCompleted
                                      ? "btn btn-lg btn-primary"
                                      : "btn btn-lg btn-secondary"
                                  }
                                  onClick={() =>
                                    this.setRedirectAndSubmit(
                                      email,
                                      termsForm,
                                      formControl
                                    )
                                  }
                                >
                                  Submit and Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="row text-center mb-5">
                            <div className="col">
                              <div className="accept px-2 py-2">
                                <button
                                  className="btn btn-lg btn-secondary mr-5"
                                  onClick={null}
                                >
                                  Accept
                                </button>
                                <button
                                  className={
                                    formControl.termsCompleted
                                      ? "btn btn-lg btn-primary"
                                      : "btn btn-lg btn-secondary"
                                  }
                                  onClick={null}
                                >
                                  Submit and Continue
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </section>
                  ) : (
                    <Redirect to={ACCOUNT} />
                  );
                }}
              </TermsFormContext.Consumer>
            )}
          </UserContext.Consumer>
        )}
      </FormControlContext.Consumer>
    );
  }
}

export default TermsTwoCard;

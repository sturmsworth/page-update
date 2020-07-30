import React from "react";
import { Formik, Field, Form } from "formik";
import { Redirect } from "react-router-dom";
import { auth } from "../../constants/firebase";
import { REGISTRATION_SUCCESS } from "../../constants/routes";
import { customDivStyles } from "../../styles";

import { signUpSchema } from "../../constants/schemas";

class CreateAccount extends React.Component {
  state = {
    redirect: false,
    errMessage: null
  };

  setRedirect = () => {
    this.setState({
      redirect: !this.state.redirect
    });
  };

  render() {
    const { redirect, errMessage } = this.state;
    return redirect ? (
      <Redirect to={REGISTRATION_SUCCESS} />
    ) : (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordCompare: ""
        }}
        validationSchema={signUpSchema}
        validateOnChange
        onSubmit={values => {
          console.log(values);
          auth
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
              const user = auth.currentUser;
              const actionCodesettings = {
                // CHANGE THIS FOR BUILDS
                url: `https://apps.senate.virginia.gov/page-application/`,
                handleCodeInApp: true
              };
              user
                .updateProfile({
                  displayName: `${values.firstName} ${values.lastName}`
                })
                .then(() => {
                  user
                    .sendEmailVerification(actionCodesettings)
                    .then(() => console.log("email sent"))
                    .catch(err => console.log(err));
                })
                .then(() => auth.signOut());
            })
            .then(() => this.setRedirect())
            .catch(err => {
              return this.setState({
                errMessage: err.message
              });
            });
        }}
      >
        {({ errors, touched }) => {
          return (
            <section id="create-account">
              <div className="container-fluid text-center shadow">
                <div className="col-12">
                  <div className="card h-100">
                    <div className="card-body">
                      <h3
                        className="card-title py-3"
                        style={customDivStyles.titles}
                      >
                        REGISTER A NEW ACCOUNT
                      </h3>
                      <Form>
                        <div className="form-row">
                          <div className="form-group col-lg-6 col-sm-12">
                            <Field
                              name="firstName"
                              className="form-control"
                              placeholder="First Name"
                            />
                            {errors.firstName && touched.firstName ? (
                              <div style={{ color: "red" }}>
                                {errors.firstName}
                              </div>
                            ) : null}
                          </div>

                          <div className="form-group col-lg-6 col-sm-12">
                            <Field
                              name="lastName"
                              className="form-control"
                              placeholder="Last Name"
                            />
                            {errors.lastName && touched.lastName ? (
                              <div style={{ color: "red" }}>
                                {errors.lastName}
                              </div>
                            ) : null}
                          </div>

                          <div className="form-group col-12">
                            <Field
                              name="email"
                              className="form-control"
                              placeholder="Email Address"
                            />
                            {errors.email && touched.email ? (
                              <div style={{ color: "red" }}>{errors.email}</div>
                            ) : null}
                          </div>

                          <div className="form-group col-12">
                            <Field
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              type="password"
                            />
                            {errors.password && touched.password ? (
                              <div style={{ color: "red" }}>
                                {errors.password}
                              </div>
                            ) : null}
                          </div>

                          <div className="form-group col-12">
                            <Field
                              name="passwordCompare"
                              className="form-control"
                              placeholder="Confirm Password"
                              type="password"
                            />
                            {errors.passwordCompare &&
                            touched.passwordCompare ? (
                              <div style={{ color: "red" }}>
                                {errors.passwordCompare}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        {errMessage ? (
                          <div className="text-danger pb-3">{errMessage}</div>
                        ) : null}
                        {Object.keys(errors).length === 0 &&
                        Object.keys(touched).length !== 0 ? (
                          <button
                            className="btn btn-lg custom-buttons"
                            type="submit"
                          >
                            Create Account
                          </button>
                        ) : (
                          <button
                            className="btn btn-lg btn-secondary"
                            type="button"
                          >
                            Create Account
                          </button>
                        )}
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </Formik>
    );
  }
}

export default CreateAccount;

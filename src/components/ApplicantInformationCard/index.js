import React, { Component, useContext, useState } from "react";
import CustomInput from "../CustomInput";
import { Redirect } from "react-router-dom";
import { ACCOUNT } from "../../constants/routes";

import { UserContext } from "../../context/UserContext";
import { ApplicantFormContext } from "../../context/ApplicantFormContext";
import { FormControlContext } from "../../context/FormControlContext";
import { StatusContext } from "../../context/StatusContext";

class ApplicationInformationCard extends Component {
  state = {
    submissionError: null,
  };

  setSubmissionError = (complete) => {
    if (complete) {
      this.setState({
        submissionError: null,
      });
    } else {
      this.setState({
        submissionError: `You must set your form as "Completed" before you can submit.`,
      });
    }
  };

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => {
          return (
            <StatusContext.Consumer>
              {(statusContext) => {
                return (
                  <ApplicantFormContext.Consumer>
                    {(applicantFormContext) => {
                      return (
                        <FormControlContext.Consumer>
                          {(formControlContext) => {
                            const { userInfo } = userContext;
                            const { email } = userInfo;
                            const {
                              savedMessages,
                              setSavedApplicantForm,
                            } = statusContext;
                            const {
                              handleApplicantPrefixChange,
                              handleApplicantFirstNameChange,
                              handleApplicantMiddleNameChange,
                              handleApplicantMiddleNameBlur,
                              handleApplicantLastNameChange,
                              handleApplicantSuffixChange,
                              handleApplicantSuffixOnBlur,
                              handleApplicantAddressOneChange,
                              handleApplicantAddressTwoChange,
                              handleApplicantAddressTwoOnBlur,
                              handleApplicantPreferredNameChange,
                              handleApplicantPreferredNameOnBlur,
                              handleApplicantCityChange,
                              handleApplicantStateChange,
                              handleApplicantZipCodeChange,
                              handleApplicantDOBChange,
                              handleApplicantEmailChange,
                              handleApplicantHouseApplyChange,
                              handleApplicantHouseServiceChange,
                              handleApplicantHouseServiceYearChange,
                              handleApplicantHouseServiceYearBlur,
                              handleApplicantPhoneNumberChange,
                              submitApplicantForm,
                              applicantForm,
                              applicantFormErrors,
                            } = applicantFormContext;
                            const {
                              applicantPrefix,
                              applicantFirstName,
                              applicantMiddleName,
                              applicantLastName,
                              applicantSuffix,
                              applicantAddressOne,
                              applicantAddressTwo,
                              applicantPreferredName,
                              applicantCity,
                              applicantState,
                              applicantZipCode,
                              applicantPhoneNumber,
                              applicantDOB,
                              applicantEmail,
                              applicantHouseApply,
                              applicantHouseService,
                              applicantHouseServiceYear,
                            } = applicantForm;
                            const {
                              setApplicantFormCompleted,
                              openApplicantFormToEditing,
                              formControlErrorMessage,
                              formControl,
                            } = formControlContext;
                            const applicantFormCompleted =
                              formControl.applicantFormCompleted;
                            return !applicantFormContext.redirect ? (
                              <div className="container mt-5 pt-5">
                                <div className="row">
                                  <div className="col">
                                    <div className="form-control">
                                      <div className="card">
                                        <div className="card-body">
                                          <div className="col-12">
                                            <h5 className="card-title">
                                              Applicant Information
                                            </h5>
                                            <p className="card-text">
                                              Please fill all fields with the{" "}
                                              <i>applicant's</i> (not the
                                              parent/guardian's) information.
                                            </p>
                                            <p className="card-text pb-3">
                                              <span className="text-danger">
                                                *
                                              </span>{" "}
                                              indicates a required field
                                            </p>
                                          </div>

                                          <form>
                                            <div className="col-12">
                                              <h5>Personal Information:</h5>
                                            </div>
                                            {/* applicantPrefix */}
                                            <CustomInput
                                              label
                                              inputCol="col-sm-12 col-md-8 col-lg-4"
                                              labelName="Preferred Prefix (Required)"
                                              inputId="applicant-prefix"
                                              inputType="select"
                                              selectOptionHidden="Choose One"
                                              selectOptions={[
                                                {
                                                  name: "Mr.",
                                                },
                                                {
                                                  name: "Ms.",
                                                },
                                              ]}
                                              required
                                              completed={applicantFormCompleted}
                                              inputValue={applicantPrefix}
                                              inputOnChange={
                                                handleApplicantPrefixChange
                                              }
                                              error={
                                                applicantFormErrors.applicantPrefix
                                              }
                                            />
                                            {/* applicantFirstName */}
                                            <CustomInput
                                              label
                                              inputCol="col-sm-12 col-md-8 col-lg-6"
                                              labelName="Applicant's First Name (Required)"
                                              inputId="applicant-first-name"
                                              inputType="text"
                                              inputPlaceholder="First Name"
                                              required
                                              inputValue={applicantFirstName}
                                              inputOnChange={
                                                handleApplicantFirstNameChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantFirstName
                                              }
                                            />

                                            {/* applicantMiddleName */}
                                            <CustomInput
                                              label
                                              inputCol="col-sm-12 col-md-8 col-lg-6"
                                              labelName="Applicant's Middle Name"
                                              inputId="applicant-last-name"
                                              inputType="text"
                                              inputPlaceholder="First Name"
                                              inputValue={applicantMiddleName}
                                              inputOnChange={
                                                handleApplicantMiddleNameChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantMiddleName
                                              }
                                              inputOnBlur={() =>
                                                handleApplicantMiddleNameBlur(
                                                  applicantMiddleName
                                                )
                                              }
                                            />

                                            {/* applicantLastName */}
                                            <CustomInput
                                              label
                                              inputCol="col-sm-12 col-md-8 col-lg-6"
                                              labelName="Applicant's Last Name (Required)"
                                              inputId="applicant-last-name"
                                              inputType="text"
                                              inputPlaceholder="Last Name"
                                              required
                                              inputValue={applicantLastName}
                                              inputOnChange={
                                                handleApplicantLastNameChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantLastName
                                              }
                                            />

                                            {/* applicantSuffix */}
                                            <CustomInput
                                              label
                                              inputCol="col-sm-12 col-md-8 col-lg-4"
                                              labelName="Suffix"
                                              inputId="applicant-suffix"
                                              inputType="text"
                                              inputPlaceholder="Suffix"
                                              inputValue={applicantSuffix}
                                              inputOnChange={
                                                handleApplicantSuffixChange
                                              }
                                              inputOnBlur={() =>
                                                handleApplicantSuffixOnBlur(
                                                  applicantSuffix
                                                )
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantSuffix
                                              }
                                            />

                                            {/* applicantPreferredName */}
                                            <CustomInput
                                              label
                                              inputCol="col-sm-12 col-md-8 col-lg-6"
                                              labelName="Preferred Name"
                                              inputId="applicant-preferred-name"
                                              inputType="text"
                                              inputPlaceholder="Kate, Jimmy, Bobby, etc."
                                              inputValue={
                                                applicantPreferredName
                                              }
                                              inputOnChange={
                                                handleApplicantPreferredNameChange
                                              }
                                              inputOnBlur={() =>
                                                handleApplicantPreferredNameOnBlur(
                                                  applicantPreferredName
                                                )
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantPreferredName
                                              }
                                            />
                                            {/* applicantAddressOne */}
                                            <CustomInput
                                              label
                                              inputCol="col-sm-12 col-md-8 col-lg-8"
                                              labelName="Address (Required)"
                                              inputId="applicant-address-one"
                                              inputType="text"
                                              inputPlaceholder="Street and number"
                                              required
                                              inputValue={applicantAddressOne}
                                              inputOnChange={
                                                handleApplicantAddressOneChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantAddressOne
                                              }
                                            />
                                            {/* applicantAddressTwo */}
                                            <CustomInput
                                              inputCol="col-sm-12 col-md-8 col-lg-8"
                                              inputId="applicant-address-two"
                                              inputType="text"
                                              inputPlaceholder="Apartment, suite, unit, building, floor, etc."
                                              inputValue={applicantAddressTwo}
                                              inputOnChange={
                                                handleApplicantAddressTwoChange
                                              }
                                              inputOnBlur={() =>
                                                handleApplicantAddressTwoOnBlur(
                                                  applicantAddressTwo
                                                )
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantAddressTwo
                                              }
                                            />
                                            {/* applicantCity */}
                                            <CustomInput
                                              label
                                              required
                                              inputCol="col-sm-12 col-md-8 col-lg-4"
                                              labelName="City (Required)"
                                              inputId="applicant-city"
                                              inputType="text"
                                              inputPlaceholder="City"
                                              inputValue={applicantCity}
                                              inputOnChange={
                                                handleApplicantCityChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantCity
                                              }
                                            />
                                            {/* applicantState */}
                                            <CustomInput
                                              label
                                              required
                                              inputCol="col-sm-12 col-md-8 col-lg-4"
                                              labelName="State (Required)"
                                              inputId="applicant-state"
                                              inputType="text"
                                              inputPlaceholder="Abbreviated (Example: VA, MD, etc.)"
                                              inputValue={applicantState}
                                              inputOnChange={
                                                handleApplicantStateChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantState
                                              }
                                            />
                                            {/* applicantZipCode */}
                                            <CustomInput
                                              label
                                              required
                                              inputCol="col-sm-12 col-md-8 col-lg-4"
                                              labelName="Zip (Required)"
                                              inputId="applicant-zip"
                                              inputType="text"
                                              inputPlaceholder="Example: 22042"
                                              inputValue={applicantZipCode}
                                              inputOnChange={
                                                handleApplicantZipCodeChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantZipCode
                                              }
                                            />
                                            {/* applicantPhoneNumber */}
                                            <CustomInput
                                              label
                                              required
                                              inputCol="col-sm-12 col-md-8 col-lg-4"
                                              labelName="Phone Number (Required)"
                                              inputId="applicant-phone-number"
                                              inputType="text"
                                              inputPlaceholder="Example: (555)555-5555"
                                              inputValue={applicantPhoneNumber}
                                              inputOnChange={
                                                handleApplicantPhoneNumberChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantPhoneNumber
                                              }
                                            />
                                            {/* applicantDOB */}
                                            <CustomInput
                                              label
                                              required
                                              inputCol="col-sm-12 col-md-8 col-lg-4"
                                              labelName="Applicant Date of Birth (Required)"
                                              inputId="applicant-dob"
                                              inputType="text"
                                              inputPlaceholder="Example: MM/DD/YYYY"
                                              inputValue={applicantDOB}
                                              inputOnChange={
                                                handleApplicantDOBChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantDOB
                                              }
                                            />
                                            {/* applicantEmail */}
                                            <CustomInput
                                              label
                                              required
                                              inputCol="col-sm-12 col-md-8 col-lg-6"
                                              labelName="Applicant Email Address (Required)"
                                              inputId="applicant-email"
                                              inputType="text"
                                              inputPlaceholder="example@example.com"
                                              inputValue={applicantEmail}
                                              inputOnChange={
                                                handleApplicantEmailChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantEmail
                                              }
                                            />
                                            {/* applicantHouseApply */}
                                            <CustomInput
                                              label
                                              required
                                              inputCol="col-sm-12 col-md-8 col-lg-6"
                                              labelName="Have you also applied to be a House Page
                                                this year? (Required)"
                                              inputId="applicant-house-apply"
                                              inputType="select"
                                              selectOptionHidden="Choose One"
                                              selectOptions={[
                                                {
                                                  name: "Yes",
                                                },
                                                {
                                                  name: "No",
                                                },
                                              ]}
                                              inputValue={applicantHouseApply}
                                              inputOnChange={
                                                handleApplicantHouseApplyChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantHouseApply
                                              }
                                            />
                                            {/* applicantHouseService */}
                                            <CustomInput
                                              label
                                              required
                                              inputCol="col-sm-12 col-md-8 col-lg-6"
                                              labelName="Have you ever served as a House Page? (Required)"
                                              inputId="applicant-house-past"
                                              inputType="select"
                                              selectOptionHidden="Choose One"
                                              selectOptions={[
                                                {
                                                  name: "Yes",
                                                },
                                                {
                                                  name: "No",
                                                },
                                              ]}
                                              inputValue={applicantHouseService}
                                              inputOnChange={
                                                handleApplicantHouseServiceChange
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantHouseService
                                              }
                                            />
                                            {/* applicantHouseServiceYear */}
                                            <CustomInput
                                              label
                                              inputCol="col-sm-12 col-md-8 col-lg-6"
                                              labelName="If applicable, what year did you serve
                                                as a House Page?"
                                              inputId="applicant-house-past-year"
                                              inputType="text"
                                              inputPlaceholder="Example: YYYY"
                                              inputValue={
                                                applicantHouseServiceYear
                                              }
                                              inputOnChange={
                                                handleApplicantHouseServiceYearChange
                                              }
                                              inputOnBlur={() =>
                                                handleApplicantHouseServiceYearBlur(
                                                  applicantHouseServiceYear
                                                )
                                              }
                                              completed={applicantFormCompleted}
                                              error={
                                                applicantFormErrors.applicantHouseServiceYear
                                              }
                                            />
                                          </form>

                                          {/* SAVED MESSAGE */}
                                          {savedMessages.applicantForm ? (
                                            <div className="form-group col text-center">
                                              <h5 className="text-success">
                                                {savedMessages.applicantForm}
                                              </h5>
                                              {/* <Link to={ACCOUNT}>
                                                <button className="btn btn-lg custom-buttons">
                                                  Return to Account Page
                                                </button>
                                              </Link> */}
                                            </div>
                                          ) : null}

                                          {/* COMPLETION ERROR  MESSAGE */}
                                          {formControlErrorMessage ? (
                                            <div className="form-group col text-center">
                                              <h5 className="text-danger">
                                                {formControlErrorMessage}
                                              </h5>
                                            </div>
                                          ) : null}

                                          {/* SUBMISSION ERROR MESSAGE */}
                                          {this.state.submissionError ? (
                                            <div className="form-group col text-center">
                                              <h5 className="text-danger">
                                                {this.state.submissionError}
                                              </h5>
                                            </div>
                                          ) : null}

                                          <div className="form-group col">
                                            <button
                                              onClick={() =>
                                                setSavedApplicantForm(
                                                  email,
                                                  applicantForm,
                                                  applicantFormErrors
                                                )
                                              }
                                              className="btn btn-lg custom-buttons btn-block"
                                            >
                                              Save Current Progress
                                            </button>

                                            {applicantFormCompleted ? (
                                              <button
                                                onClick={
                                                  openApplicantFormToEditing
                                                }
                                                className="btn btn-lg custom-buttons btn-block"
                                              >
                                                Open for Editing
                                              </button>
                                            ) : (
                                              <button
                                                onClick={() =>
                                                  setApplicantFormCompleted(
                                                    applicantFormErrors
                                                  )
                                                }
                                                className="btn btn-lg custom-buttons btn-block"
                                              >
                                                Set as Complete
                                              </button>
                                            )}
                                            {applicantFormCompleted ? (
                                              <button
                                                onClick={() =>
                                                  submitApplicantForm(
                                                    email,
                                                    applicantForm,
                                                    applicantFormErrors,
                                                    formControl
                                                  )
                                                }
                                                className="btn btn-lg custom-buttons btn-block"
                                              >
                                                Submit
                                              </button>
                                            ) : (
                                              <button
                                                onClick={() =>
                                                  this.setSubmissionError(
                                                    applicantFormCompleted
                                                  )
                                                }
                                                className="btn btn-lg btn-block btn-secondary"
                                              >
                                                Submit
                                              </button>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <Redirect to={ACCOUNT} />
                            );
                          }}
                        </FormControlContext.Consumer>
                      );
                    }}
                  </ApplicantFormContext.Consumer>
                );
              }}
            </StatusContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ApplicationInformationCard;

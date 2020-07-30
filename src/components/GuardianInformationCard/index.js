import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { GuardianFormContext } from "../../context/GuardianFormContext";
import { FormControlContext } from "../../context/FormControlContext";
import { StatusContext } from "../../context/StatusContext";
import CustomInput from "../../components/CustomInput";
import { Redirect } from "react-router-dom";
import { ACCOUNT } from "../../constants/routes";

class GuardianInformationCard extends Component {
  state = {
    submissionError: null
  };

  setSubmissionError = complete => {
    if (complete) {
      this.setState({
        submissionError: null
      });
    } else {
      this.setState({
        submissionError: `You must set your form as "Completed" before you can submit.`
      });
    }
  };

  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          return (
            <StatusContext.Consumer>
              {statusContext => {
                return (
                  <FormControlContext.Consumer>
                    {formControlContext => {
                      return (
                        <GuardianFormContext.Consumer>
                          {guardianFormContext => {
                            const { userInfo } = userContext;
                            const { email } = userInfo;
                            const { savedMessages, setSavedGuardianForm } = statusContext
                            const {
                              handleGuardianOnePrefixChange,
                              handleGuardianTwoPrefixChange,
                              handleGuardianOneFirstNameChange,
                              handleGuardianTwoFirstNameChange,
                              handleGuardianTwoFirstNameBlur,
                              handleGuardianOneMiddleNameChange,
                              handleGuardianTwoMiddleNameChange,
                              handleGuardianOneMiddleNameBlur,
                              handleGuardianTwoMiddleNameBlur,
                              handleGuardianOneLastNameChange,
                              handleGuardianTwoLastNameChange,
                              handleGuardianTwoLastNameBlur,
                              handleGuardianOneSuffixChange,
                              handleGuardianTwoSuffixChange,
                              handleGuardianOneSuffixBlur,
                              handleGuardianTwoSuffixBlur,
                              handleGuardianOneAddressOneChange,
                              handleGuardianTwoAddressOneChange,
                              handleGuardianTwoAddressOneBlur,
                              handleGuardianOneAddressTwoChange,
                              handleGuardianTwoAddressTwoChange,
                              handleGuardianOneAddressTwoBlur,
                              handleGuardianTwoAddressTwoBlur,
                              handleGuardianOneCityChange,
                              handleGuardianTwoCityChange,
                              handleGuardianTwoCityBlur,
                              handleGuardianOneZipCodeChange,
                              handleGuardianTwoZipCodeChange,
                              handleGuardianTwoZipCodeBlur,
                              handleGuardianOneStateChange,
                              handleGuardianTwoStateChange,
                              handleGuardianTwoStateBlur,
                              handleGuardianOneTelephoneOneChange,
                              handleGuardianOneTelephoneTwoChange,
                              handleGuardianOneTelephoneThreeChange,
                              handleGuardianOneTelephoneTwoBlur,
                              handleGuardianOneTelephoneThreeBlur,
                              handleGuardianTwoTelephoneOneChange,
                              handleGuardianTwoTelephoneTwoChange,
                              handleGuardianTwoTelephoneThreeChange,
                              handleGuardianTwoTelephoneOneBlur,
                              handleGuardianTwoTelephoneTwoBlur,
                              handleGuardianTwoTelephoneThreeBlur,
                              handleGuardianOneTelephoneOneTypeChange,
                              handleGuardianOneTelephoneTwoTypeChange,
                              handleGuardianOneTelephoneThreeTypeChange,
                              handleGuardianTwoTelephoneOneTypeChange,
                              handleGuardianTwoTelephoneTwoTypeChange,
                              handleGuardianTwoTelephoneThreeTypeChange,
                              handleGuardianOneEmailChange,
                              handleGuardianTwoEmailChange,
                              handleGuardianTwoEmailBlur,
                              submitGuardianForm,
                              guardianForm,
                              guardianFormErrors,
                              redirect
                            } = guardianFormContext;
                            const {
                              guardianOnePrefix,
                              guardianOneFirstName,
                              guardianOneMiddleName,
                              guardianOneLastName,
                              guardianOneSuffix,
                              guardianOneAddressOne,
                              guardianOneAddressTwo,
                              guardianOneCity,
                              guardianOneState,
                              guardianOneZipCode,
                              guardianOneTelephoneOne,
                              guardianOneTelephoneOneType,
                              guardianOneTelephoneTwo,
                              guardianOneTelephoneTwoType,
                              guardianOneTelephoneThree,
                              guardianOneTelephoneThreeType,
                              guardianOneEmail,
                              guardianTwoPrefix,
                              guardianTwoFirstName,
                              guardianTwoMiddleName,
                              guardianTwoLastName,
                              guardianTwoSuffix,
                              guardianTwoAddressOne,
                              guardianTwoAddressTwo,
                              guardianTwoCity,
                              guardianTwoState,
                              guardianTwoZipCode,
                              guardianTwoTelephoneOne,
                              guardianTwoTelephoneOneType,
                              guardianTwoTelephoneTwo,
                              guardianTwoTelephoneTwoType,
                              guardianTwoTelephoneThree,
                              guardianTwoTelephoneThreeType,
                              guardianTwoEmail
                            } = guardianForm;
                            const { formControl, setGuardianFormCompleted, openGuardianFormToEditing, formControlErrorMessage } = formControlContext;
                            const { guardianFormCompleted } = formControl

                            return !redirect ? ( 
                              <div className="container mt-5 pt-5">
                              <div className="row">
                                <div className="col">
                                  <div className="form-control">
                                    <div className="card">
                                      <div className="card-body">
                                        <div className="col-12">
                                          <h5 className="card-title">
                                            Parent/Guardian Information
                                          </h5>
                                          <p className="card-text">
                                            Please fill all fields with the{" "}
                                            <i>Parent or Guardian's</i> (not the applicant's)
                                            information.{" "}
                                            <u>Only one parent/guardian is required.</u>
                                          </p>
                                          <p className="card-text pb-3">
                                            <span className="text-danger">*</span> indicates
                                            a required field
                                          </p>
                                        </div>
                                        <form>
                                          <div className="col-12">
                                            <h5>
                                              Primary Parent/Guardian Personal Information:
                                            </h5>
                                          </div>
            
                                          {/* guardianOnePrefix */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Preferred Prefix (Required)"
                                            inputId="guardian-one-prefix"
                                            inputType="select"
                                            selectOptionHidden="Choose One"
                                            selectOptions={[
                                              {
                                                name: "Mr."
                                              },
                                              {
                                                name: "Ms."
                                              }
                                            ]}
                                            required
                                            completed={guardianFormCompleted}
                                            inputValue={guardianOnePrefix}
                                            inputOnChange={handleGuardianOnePrefixChange}
                                            error={guardianFormErrors.guardianOnePrefix}
                                          />
            
                                          {/* guardianOneFirstName */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            labelName="First Name (Required)"
                                            inputId="guardian-one-first-name"
                                            inputType="text"
                                            inputPlaceholder="First Name"
                                            required
                                            inputValue={guardianOneFirstName}
                                            inputOnChange={handleGuardianOneFirstNameChange}
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneFirstName}
                                          />
            
                                          {/* guardianOneMiddleName */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            labelName="Middle Name"
                                            inputId="guardian-one-middle-name"
                                            inputType="text"
                                            inputPlaceholder="Middle Name"
                                            inputValue={guardianOneMiddleName}
                                            inputOnChange={
                                              handleGuardianOneMiddleNameChange
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneMiddleName}
                                            inputOnBlur={() =>
                                              handleGuardianOneMiddleNameBlur(
                                                guardianForm.guardianOneMiddleName
                                              )
                                            }
                                          />
            
                                          {/* guardianOneLastName */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            labelName="Last Name (Required)"
                                            inputId="guardian-one-last-name"
                                            inputType="text"
                                            inputPlaceholder="Last Name"
                                            required
                                            inputValue={guardianOneLastName}
                                            inputOnChange={handleGuardianOneLastNameChange}
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneLastName}
                                          />
            
                                          {/* guardianOneSuffix */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Suffix"
                                            inputId="guardian-one-suffix"
                                            inputType="text"
                                            inputPlaceholder="Suffix"
                                            inputValue={guardianOneSuffix}
                                            inputOnChange={handleGuardianOneSuffixChange}
                                            inputOnBlur={() =>
                                              handleGuardianOneSuffixBlur(guardianOneSuffix)
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneSuffix}
                                          />
            
                                          <div className="col-12">
                                            <h5>Primary Parent/Guardian Address:</h5>
                                          </div>
            
                                          {/* guardianOneAddressOne */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-8"
                                            labelName="Address (Required)"
                                            inputId="guardian-one-address-one"
                                            inputType="text"
                                            inputPlaceholder="Street and number"
                                            required
                                            inputValue={guardianOneAddressOne}
                                            inputOnChange={
                                              handleGuardianOneAddressOneChange
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneAddressOne}
                                          />
                                          {/* guardianOneAddressTwo */}
                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-8"
                                            inputId="guardian-one-address-two"
                                            inputType="text"
                                            inputPlaceholder="Apartment, suite, unit, building, floor, etc."
                                            inputValue={guardianOneAddressTwo}
                                            inputOnChange={
                                              handleGuardianOneAddressTwoChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianOneAddressTwoBlur(
                                                guardianOneAddressTwo
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneAddressTwo}
                                          />
                                          {/* guardianOneCity */}
                                          <CustomInput
                                            label
                                            required
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="City (Required)"
                                            inputId="guardian-one-city"
                                            inputType="text"
                                            inputPlaceholder="City"
                                            inputValue={guardianOneCity}
                                            inputOnChange={handleGuardianOneCityChange}
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneCity}
                                          />
                                          {/* guardianOneState */}
                                          <CustomInput
                                            label
                                            required
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="State (Required)"
                                            inputId="guardian-one-state"
                                            inputType="text"
                                            inputPlaceholder="Abbreviated (Example: VA, MD, etc.)"
                                            inputValue={guardianOneState}
                                            inputOnChange={handleGuardianOneStateChange}
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneState}
                                          />
                                          {/* guardianOneZipCode */}
                                          <CustomInput
                                            label
                                            required
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Zip (Required)"
                                            inputId="guardian-one-zip"
                                            inputType="text"
                                            inputPlaceholder="Example: 22042"
                                            inputValue={guardianOneZipCode}
                                            inputOnChange={handleGuardianOneZipCodeChange}
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneZipCode}
                                          />
            
                                          <div className="col-12">
                                            <h5>Primary Parent/Guardian Contact:</h5>
                                          </div>
                                          {/* guardianOneTelephoneOne */}
                                          <CustomInput
                                            label
                                            required
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Phone Number (Required)"
                                            inputId="guardian-one-telephone-one"
                                            inputType="text"
                                            inputPlaceholder="Example: (555)555-5555"
                                            inputValue={guardianOneTelephoneOne}
                                            inputOnChange={
                                              handleGuardianOneTelephoneOneChange
                                            }
                                            completed={guardianFormCompleted}
                                            error={
                                              guardianFormErrors.guardianOneTelephoneOne
                                            }
                                          />
                                          {/* guardianOneTelephoneOneType */}
                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="guardian-one-telephone-one-type"
                                            inputType="select"
                                            selectOptionHidden="Choose Phone Type"
                                            selectOptions={[
                                              {
                                                name: "Work"
                                              },
                                              {
                                                name: "Home"
                                              },
                                              {
                                                name: "Cell"
                                              }
                                            ]}
                                            required
                                            completed={guardianFormCompleted}
                                            inputValue={guardianOneTelephoneOneType}
                                            inputOnChange={
                                              handleGuardianOneTelephoneOneTypeChange
                                            }
                                            error={
                                              guardianFormErrors.guardianOneTelephoneOneType
                                            }
                                          />
                                          {/* guardianOneTelephoneTwo */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Additional Contact Number"
                                            inputId="guardian-one-telephone-two"
                                            inputType="text"
                                            inputPlaceholder="Example: (555)555-5555"
                                            inputValue={guardianOneTelephoneTwo}
                                            inputOnChange={
                                              handleGuardianOneTelephoneTwoChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianOneTelephoneTwoBlur(
                                                guardianOneTelephoneTwo
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={
                                              guardianFormErrors.guardianOneTelephoneTwo
                                            }
                                          />
                                          {/* guardianOneTelephoneTwoType */}
                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="guardian-one-telephone-two-type"
                                            inputType="select"
                                            selectOptionHidden="Choose Phone Type"
                                            selectOptions={[
                                              {
                                                name: "Work"
                                              },
                                              {
                                                name: "Home"
                                              },
                                              {
                                                name: "Cell"
                                              }
                                            ]}
                                            completed={guardianFormCompleted}
                                            inputValue={guardianOneTelephoneTwoType}
                                            inputOnChange={
                                              handleGuardianOneTelephoneTwoTypeChange
                                            }
                                            error={
                                              guardianFormErrors.guardianOneTelephoneTwoType
                                            }
                                          />
                                          {/* guardianOneTelephoneThree */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Additional Contact Number"
                                            inputId="guardian-one-telephone-three"
                                            inputType="text"
                                            inputPlaceholder="Example: (555)555-5555"
                                            inputValue={guardianOneTelephoneThree}
                                            inputOnChange={
                                              handleGuardianOneTelephoneThreeChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianOneTelephoneThreeBlur(
                                                guardianOneTelephoneThree
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={
                                              guardianFormErrors.guardianOneTelephoneThree
                                            }
                                          />
                                          {/* guardianOneTelephoneThreeType */}
                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="guardian-one-telephone-three-type"
                                            inputType="select"
                                            selectOptionHidden="Choose Phone Type"
                                            selectOptions={[
                                              {
                                                name: "Work"
                                              },
                                              {
                                                name: "Home"
                                              },
                                              {
                                                name: "Cell"
                                              }
                                            ]}
                                            completed={guardianFormCompleted}
                                            inputValue={guardianOneTelephoneThreeType}
                                            inputOnChange={
                                              handleGuardianOneTelephoneThreeTypeChange
                                            }
                                            error={
                                              guardianFormErrors.guardianOneTelephoneThreeType
                                            }
                                          />
                                          {/* guardianOneEmail */}
                                          <CustomInput
                                            label
                                            required
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            labelName="Email"
                                            inputId="guardian-one-email"
                                            inputType="text"
                                            inputPlaceholder="Email"
                                            inputValue={guardianOneEmail}
                                            inputOnChange={handleGuardianOneEmailChange}
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianOneEmail}
                                          />
            
                                          <div className="col-12">
                                            <h5>
                                              Additional Parent/Guardian Personal
                                              Information:
                                            </h5>
                                          </div>
            
                                          {/* guardianTwoPrefix */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Preferred Prefix"
                                            inputId="guardian-two-prefix"
                                            inputType="select"
                                            selectOptionHidden="Choose One"
                                            selectOptions={[
                                              {
                                                name: "Mr."
                                              },
                                              {
                                                name: "Ms."
                                              }
                                            ]}
                                            completed={guardianFormCompleted}
                                            inputValue={guardianTwoPrefix}
                                            inputOnChange={handleGuardianTwoPrefixChange}
                                            error={guardianFormErrors.guardianTwoPrefix}
                                          />
            
                                          {/* guardianTwoFirstName */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            labelName="First Name"
                                            inputId="guardian-two-first-name"
                                            inputType="text"
                                            inputPlaceholder="First Name"
                                            inputValue={guardianTwoFirstName}
                                            inputOnChange={handleGuardianTwoFirstNameChange}
                                            inputOnBlur={() =>
                                              handleGuardianTwoFirstNameBlur(
                                                guardianForm.guardianTwoFirstName
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoFirstName}
                                          />
            
                                          {/* guardianTwoMiddleName */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            labelName="Middle Name"
                                            inputId="guardian-two-last-name"
                                            inputType="text"
                                            inputPlaceholder="Middle Name"
                                            inputValue={guardianTwoMiddleName}
                                            inputOnChange={
                                              handleGuardianTwoMiddleNameChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianTwoMiddleNameBlur(
                                                guardianForm.guardianTwoMiddleName
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoMiddleName}
                                          />
            
                                          {/* guardianTwoLastName */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            labelName="Last Name"
                                            inputId="guardian-two-last-name"
                                            inputType="text"
                                            inputPlaceholder="Last Name"
                                            inputValue={guardianTwoLastName}
                                            inputOnChange={handleGuardianTwoLastNameChange}
                                            inputOnBlur={() =>
                                              handleGuardianTwoLastNameBlur(
                                                guardianTwoLastName
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoLastName}
                                          />
            
                                          {/* guardianTwoSuffix */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Suffix"
                                            inputId="guardian-two-suffix"
                                            inputType="text"
                                            inputPlaceholder="Suffix"
                                            inputValue={guardianTwoSuffix}
                                            inputOnChange={handleGuardianTwoSuffixChange}
                                            inputOnBlur={() =>
                                              handleGuardianTwoSuffixBlur(guardianTwoSuffix)
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoSuffix}
                                          />
            
                                          {/* guardianTwoAddressOne */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-8"
                                            labelName="Address"
                                            inputId="guardian-two-address-one"
                                            inputType="text"
                                            inputPlaceholder="Street and number"
                                            inputValue={guardianTwoAddressOne}
                                            inputOnChange={
                                              handleGuardianTwoAddressOneChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianTwoAddressOneBlur(
                                                guardianTwoAddressOne
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoAddressOne}
                                          />
                                          {/* guardianTwoAddressTwo */}
                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-8"
                                            inputId="guardian-two-address-two"
                                            inputType="text"
                                            inputPlaceholder="Apartment, suite, unit, building, floor, etc."
                                            inputValue={guardianTwoAddressTwo}
                                            inputOnChange={
                                              handleGuardianTwoAddressTwoChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianTwoAddressTwoBlur(
                                                guardianTwoAddressTwo
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoAddressTwo}
                                          />
                                          {/* guardianTwoCity */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="City"
                                            inputId="guardian-two-city"
                                            inputType="text"
                                            inputPlaceholder="City"
                                            inputValue={guardianTwoCity}
                                            inputOnChange={handleGuardianTwoCityChange}
                                            inputOnBlur={() =>
                                              handleGuardianTwoCityBlur(guardianTwoCity)
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoCity}
                                          />
                                          {/* guardianTwoState */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="State"
                                            inputId="guardian-two-state"
                                            inputType="text"
                                            inputPlaceholder="Abbreviated (Example: VA, MD, etc.)"
                                            inputValue={guardianTwoState}
                                            inputOnChange={handleGuardianTwoStateChange}
                                            inputOnBlur={() =>
                                              handleGuardianTwoStateBlur(guardianTwoState)
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoState}
                                          />
                                          {/* guardianTwoZipCode */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Zip"
                                            inputId="guardian-two-zip"
                                            inputType="text"
                                            inputPlaceholder="Example: 22042"
                                            inputValue={guardianTwoZipCode}
                                            inputOnChange={handleGuardianTwoZipCodeChange}
                                            inputOnBlur={() =>
                                              handleGuardianTwoZipCodeBlur(
                                                guardianTwoZipCode
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoZipCode}
                                          />
            
                                          {/* guardianTwoTelephoneOne */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Phone Number"
                                            inputId="guardian-two-telephone-one"
                                            inputType="text"
                                            inputPlaceholder="Example: (555)555-5555"
                                            inputValue={guardianTwoTelephoneOne}
                                            inputOnChange={
                                              handleGuardianTwoTelephoneOneChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianTwoTelephoneOneBlur(
                                                guardianTwoTelephoneOne
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={
                                              guardianFormErrors.guardianTwoTelephoneOne
                                            }
                                          />
                                          {/* guardianTwoTelephoneOneType */}
                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="guardian-two-telephone-one-type"
                                            inputType="select"
                                            selectOptionHidden="Choose Phone Type"
                                            selectOptions={[
                                              {
                                                name: "Work"
                                              },
                                              {
                                                name: "Home"
                                              },
                                              {
                                                name: "Cell"
                                              }
                                            ]}
                                            completed={guardianFormCompleted}
                                            inputValue={guardianTwoTelephoneOneType}
                                            inputOnChange={
                                              handleGuardianTwoTelephoneOneTypeChange
                                            }
                                            error={
                                              guardianFormErrors.guardianTwoTelephoneOneType
                                            }
                                          />
                                          {/* guardianTwoTelephoneTwo */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Additional Contact Number"
                                            inputId="guardian-two-telephone-two"
                                            inputType="text"
                                            inputPlaceholder="Example: (555)555-5555"
                                            inputValue={guardianTwoTelephoneTwo}
                                            inputOnChange={
                                              handleGuardianTwoTelephoneTwoChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianTwoTelephoneTwoBlur(
                                                guardianTwoTelephoneTwo
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={
                                              guardianFormErrors.guardianTwoTelephoneTwo
                                            }
                                          />
                                          {/* guardianTwoTelephoneTwoType */}
                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="guardian-two-telephone-two-type"
                                            inputType="select"
                                            selectOptionHidden="Choose Phone Type"
                                            selectOptions={[
                                              {
                                                name: "Work"
                                              },
                                              {
                                                name: "Home"
                                              },
                                              {
                                                name: "Cell"
                                              }
                                            ]}
                                            completed={guardianFormCompleted}
                                            inputValue={guardianTwoTelephoneTwoType}
                                            inputOnChange={
                                              handleGuardianTwoTelephoneTwoTypeChange
                                            }
                                            error={
                                              guardianFormErrors.guardianTwoTelephoneTwoType
                                            }
                                          />
                                          {/* guardianTwoTelephoneThree */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            labelName="Additional Contact Number"
                                            inputId="guardian-Two-telephone-three"
                                            inputType="text"
                                            inputPlaceholder="Example: (555)555-5555"
                                            inputValue={guardianTwoTelephoneThree}
                                            inputOnChange={
                                              handleGuardianTwoTelephoneThreeChange
                                            }
                                            inputOnBlur={() =>
                                              handleGuardianTwoTelephoneThreeBlur(
                                                guardianTwoTelephoneThree
                                              )
                                            }
                                            completed={guardianFormCompleted}
                                            error={
                                              guardianFormErrors.guardianTwoTelephoneThree
                                            }
                                          />
                                          {/* guardianTwoTelephoneThreeType */}
                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="guardian-two-telephone-three-type"
                                            inputType="select"
                                            selectOptionHidden="Choose Phone Type"
                                            selectOptions={[
                                              {
                                                name: "Work"
                                              },
                                              {
                                                name: "Home"
                                              },
                                              {
                                                name: "Cell"
                                              }
                                            ]}
                                            completed={guardianFormCompleted}
                                            inputValue={guardianTwoTelephoneThreeType}
                                            inputOnChange={
                                              handleGuardianTwoTelephoneThreeTypeChange
                                            }
                                            error={
                                              guardianFormErrors.guardianTwoTelephoneThreeType
                                            }
                                          />
                                          {/* guardianTwoEmail */}
                                          <CustomInput
                                            label
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            labelName="Email"
                                            inputId="guardian-two-email"
                                            inputType="text"
                                            inputPlaceholder="Email"
                                            inputValue={guardianTwoEmail}
                                            inputOnChange={handleGuardianTwoEmailChange}
                                            inputOnBlur={() =>
                                              handleGuardianTwoEmailBlur(guardianTwoEmail)
                                            }
                                            completed={guardianFormCompleted}
                                            error={guardianFormErrors.guardianTwoEmail}
                                          />
                                        </form>

                                        {/* SAVED MESSAGE */}
                                        {savedMessages.guardianForm ? (
                                          <div className="form-group col text-center">
                                            <h5 className="text-success">
                                              {savedMessages.guardianForm}
                                            </h5>
                                          </div>
                                        ) : null}

                                        {/* COMPLETION ERROR  MESSAGE */}
                                        {formControlErrorMessage ? <div className="form-group col text-center">
                                        <h5 className="text-danger">
                                          {formControlErrorMessage}
                                        </h5>
                                      </div> : null}

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
                                              setSavedGuardianForm(
                                                email,
                                                guardianForm,
                                                guardianFormErrors
                                              )
                                            }
                                            className="btn btn-lg custom-buttons btn-block"
                                          >
                                            Save Current Progress
                                          </button>

                                          {guardianFormCompleted ? (
                                            <button
                                              onClick={openGuardianFormToEditing}
                                              className="btn btn-lg custom-buttons btn-block"
                                            >
                                              Open for Editing
                                            </button>
                                          ) : (
                                            <button
                                              onClick={() => setGuardianFormCompleted(guardianFormErrors)}
                                              className="btn btn-lg custom-buttons btn-block"
                                            >
                                              Set as Complete
                                            </button>
                                          )}

                                          {guardianFormCompleted ? (
                                            <button
                                              onClick={() =>
                                                submitGuardianForm(
                                                  email,
                                                  guardianForm,
                                                  guardianFormErrors,
                                                  formControl
                                                )
                                              }
                                              className="btn btn-lg custom-buttons btn-block"
                                            >
                                              Submit
                                            </button>
                                          ) : (
                                            <button
                                              onClick={() => this.setSubmissionError(guardianFormCompleted)}
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
                            </div> ) : <Redirect to={ACCOUNT} />
                            
                          }}
                        </GuardianFormContext.Consumer>
                      );
                    }}
                  </FormControlContext.Consumer>
                );
              }}
            </StatusContext.Consumer>
          );
        }}
      </UserContext.Consumer> 
    );
  }
}

export default GuardianInformationCard;

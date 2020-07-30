import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { MiscFormContext } from "../../context/MiscFormContext";
import { FormControlContext } from "../../context/FormControlContext";
import { StatusContext } from "../../context/StatusContext";
import CustomInput from "../../components/CustomInput";
import { Redirect } from "react-router-dom";
import { ACCOUNT } from "../../constants/routes";

class MiscInformationCard extends Component {
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
      <StatusContext.Consumer>
        {statusContext => {
          return (
            <FormControlContext.Consumer>
              {formControlContext => {
                return (
                  <UserContext.Consumer>
                    {userContext => (
                      <MiscFormContext.Consumer>
                        {miscFormContext => {
                          const { userInfo } = userContext;
                          const { email } = userInfo;
                          const {
                            savedMessages,
                            setSavedMiscForm
                          } = statusContext;
                          const {
                            miscForm,
                            miscFormErrors,
                            handleSchoolNameChange,
                            handleSenatorSelectChange,
                            submitMiscForm,
                            redirect
                          } = miscFormContext;
                          const {
                            formControl,
                            formControlErrorMessage,
                            setMiscFormCompleted,
                            openMiscFormToEditing
                          } = formControlContext;
                          const miscFormCompleted =
                            formControl.miscFormCompleted;
                          return !redirect ? (
                            <div className="container mt-5 pt-5">
                              <div className="row">
                                <div className="col">
                                  <div className="form-control">
                                    <div className="card">
                                      <div className="card-body">
                                        <div className="col-12">
                                          <h5 className="card-title">
                                            Miscellaneous Information
                                          </h5>
                                          <p className="card-text">
                                            Please fill in all required fields.
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
                                            <h5>District Information:</h5>
                                          </div>

                                          <div className="col-12">
                                            <p>
                                              Not sure who your legislator is?
                                              Find out{" "}
                                              <a
                                                href="https://whosmy.virginiageneralassembly.gov/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                here.
                                              </a>
                                            </p>
                                          </div>

                                          {/* Choose Your Senator */}
                                          <CustomInput
                                            label
                                            labelName="Select your Senator (Required)"
                                            required
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="choose-your-senator"
                                            inputType="select"
                                            selectOptionHidden="Select your Senator"
                                            selectOptions={[
                                              {
                                                name: `Fairfax, Justin E. (Lt. Gov.)`
                                              },
                                              {
                                                name: `Barker, George L. (39th District)`
                                              },
                                              {
                                                name: `Black, Richard H. (13th District)`
                                              },
                                              {
                                                name: `Boysko, Jennifer B. (33rd District)`
                                              },
                                              {
                                                name: `Carrico, Charles W. (40th District)`
                                              },
                                              {
                                                name: `Chafin, A. Benton (38th District)`
                                              },
                                              {
                                                name: `Chase, Amanda F. (11th District)`
                                              },
                                              {
                                                name: `Cosgrove, John A. (14th District)`
                                              },
                                              {
                                                name: `Dance, Rosalyn R. (16th District)`
                                              },
                                              {
                                                name: `DeSteph, William R. (8th District)`
                                              },
                                              {
                                                name: `Deeds, R. Creigh (25th District)`
                                              },
                                              {
                                                name: `Dunnavant, Siobhan S. (12th District)`
                                              },
                                              {
                                                name: `Ebbin, Adam P. (30th District)`
                                              },
                                              {
                                                name: `Edwards,John S. (21st District)`
                                              },
                                              {
                                                name: `Favola, Barbara A. (31st District)`
                                              },
                                              {
                                                name: `Hanger, Emmett W. (24th District)`
                                              },
                                              {
                                                name: `Howell, Janet D. (32nd District)`
                                              },
                                              {
                                                name: `Lewis, Lynwood W (6th District)`
                                              },
                                              {
                                                name: `Locke Mamie E. (2nd District)`
                                              },
                                              {
                                                name: `Lucas, L. Louise (18th District)`
                                              },
                                              {
                                                name: `Marsden, David W. (37th District)`
                                              },
                                              {
                                                name: `Mason, T. Montgomery "Monty" (1st District)`
                                              },
                                              {
                                                name: `McClellan, Jennifer L. (9th District)`
                                              },
                                              {
                                                name: `McDougle, Ryan T. (4th District)`
                                              },
                                              {
                                                name: `McPike, Jeremy S. (29th District)`
                                              },
                                              {
                                                name: `Newman, Stephen D. (23rd District)`
                                              },
                                              {
                                                name: `Norment, Thomas K. (3rd District)`
                                              },
                                              {
                                                name: `Obenshain, Mark D. (26th District)`
                                              },
                                              {
                                                name: `Peake, Mark J. (22nd District)`
                                              },
                                              {
                                                name: `Petersen, J. Chapman "Chap" (34th District)`
                                              },
                                              {
                                                name: `Reeves, Bryce E. (17th District)`
                                              },
                                              {
                                                name: `Ruff, Frank M. (15th District)`
                                              },
                                              {
                                                name: `Saslaw, Richard L. (35th District)`
                                              },
                                              {
                                                name: `Spruill, Lionell (5th District)`
                                              },
                                              {
                                                name: `Stanley, William M. (20th District)`
                                              },
                                              {
                                                name: `Stuart, Richard H. (28th District)`
                                              },
                                              {
                                                name: `Sturtevant, Glen H. (10th District)`
                                              },
                                              {
                                                name: `Suetterlein, David R. (19th District)`
                                              },
                                              {
                                                name: `Surovell, Scott A. (36th District)`
                                              },
                                              {
                                                name: `Vogel, Jill Holtzman (27th District)`
                                              },
                                              {
                                                name: `Wagner, Frank W. (7th District)`
                                              }
                                            ]}
                                            completed={miscFormCompleted}
                                            inputValue={miscForm.miscDistrict}
                                            inputOnChange={
                                              handleSenatorSelectChange
                                            }
                                            error={miscFormErrors.miscDistrict}
                                          />

                                          <div className="col-12">
                                            <h5>School Information:</h5>
                                          </div>

                                          <CustomInput
                                            label
                                            required
                                            labelName="School Name (Required)"
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="school-name"
                                            inputType="text"
                                            inputPlaceholder="Name of the school you attend"
                                            inputValue={miscForm.miscSchool}
                                            inputOnChange={
                                              handleSchoolNameChange
                                            }
                                            error={miscFormErrors.miscSchool}
                                            completed={miscFormCompleted}
                                          />

                                          <CustomInput
                                            label
                                            required
                                            labelName="Grade (Required)"
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="school-grade"
                                            inputType="text"
                                            inputPlaceholder="Grade in which you are enrolled"
                                            inputValue={miscForm.miscGrade}
                                            inputOnChange={
                                              miscFormContext.handleGradeChange
                                            }
                                            error={miscFormErrors.miscGrade}
                                            completed={miscFormCompleted}
                                          />

                                          <CustomInput
                                            label
                                            required
                                            labelName="GPA (Required)"
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="school-gpa"
                                            inputType="text"
                                            inputPlaceholder="Current GPA (Example: 4.0, 3.75)"
                                            inputValue={miscForm.miscGPA}
                                            inputOnChange={
                                              miscFormContext.handleGPAChange
                                            }
                                            error={miscFormErrors.miscGPA}
                                            completed={miscFormCompleted}
                                          />

                                          <div className="col-12">
                                            <h5>Legacy Information:</h5>
                                          </div>

                                          <CustomInput
                                            label
                                            required
                                            labelName="Has a member of your family served as a Senate Page/Messenger or House Page? (Required)"
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="family-service"
                                            inputType="select"
                                            selectOptionHidden="Choose an Option"
                                            selectOptions={[
                                              {
                                                name: "Yes"
                                              },
                                              {
                                                name: "No"
                                              }
                                            ]}
                                            inputValue={
                                              miscForm.miscFamilyService
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceChange
                                            }
                                            error={
                                              miscFormErrors.miscFamilyService
                                            }
                                            completed={miscFormCompleted}
                                          />

                                          <div className="col-12">
                                            <h5>Family Service:</h5>
                                          </div>

                                          <CustomInput
                                            label
                                            labelName="If you selected yes please enter the following family information. We'll accept up to two entries. This is not required."
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="family-service-name-one"
                                            inputType="text"
                                            inputPlaceholder="Name One"
                                            inputValue={
                                              miscForm.miscFamilyServiceOneName
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceNameOneChange
                                            }
                                            error={
                                              miscFormErrors.miscFamilyServiceOneName
                                            }
                                            inputOnBlur={() =>
                                              miscFormContext.handleFamilyServiceNameOneBlur(
                                                miscForm.miscFamilyServiceOneName
                                              )
                                            }
                                            completed={miscFormCompleted}
                                          />

                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="family-service-year-one"
                                            inputType="text"
                                            inputPlaceholder="Their Service Year (Format: YYYY)"
                                            inputValue={
                                              miscForm.miscFamilyServiceOneYear
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceYearOneChange
                                            }
                                            error={
                                              miscFormErrors.miscFamilyServiceOneYear
                                            }
                                            inputOnBlur={() =>
                                              miscFormContext.handleFamilyServiceYearOneBlur(
                                                miscForm.miscFamilyServiceOneYear
                                              )
                                            }
                                            completed={miscFormCompleted}
                                          />

                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="family-service-relation-one"
                                            inputType="text"
                                            inputPlaceholder="Relation"
                                            inputValue={
                                              miscForm.miscFamilyServiceOneRelation
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceRelationOneChange
                                            }
                                            error={
                                              miscFormErrors.miscFamilyServiceOneRelation
                                            }
                                            onBlur={() =>
                                              miscFormContext.handleFamilyServiceRelationOneBlur(
                                                miscForm.miscFamilyServiceOneRelation
                                              )
                                            }
                                            completed={miscFormCompleted}
                                          />

                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="family-service-branch-one"
                                            inputType="select"
                                            selectOptionHidden="Their Service Branch"
                                            selectOptions={[
                                              {
                                                name: "House"
                                              },
                                              {
                                                name: "Senate"
                                              }
                                            ]}
                                            inputPlaceholder="Relation"
                                            inputValue={
                                              miscForm.miscFamilyServiceOneBranch
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceBranchOneChange
                                            }
                                            error={
                                              miscFormErrors.miscFamilyServiceOneBranch
                                            }
                                            completed={miscFormCompleted}
                                          />

                                          <div className="form-group py-3 my-3" />

                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="family-service-name-two"
                                            inputType="text"
                                            inputPlaceholder="Name Two"
                                            inputValue={
                                              miscForm.miscFamilyServiceTwoName
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceNameTwoChange
                                            }
                                            error={
                                              miscFormErrors.miscFamilyServiceTwoName
                                            }
                                            completed={miscFormCompleted}
                                          />

                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-4"
                                            inputId="family-service-year-two"
                                            inputType="text"
                                            inputPlaceholder="Their Service Year (Format: YYYY)"
                                            inputValue={
                                              miscForm.miscFamilyServiceTwoYear
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceYearTwoChange
                                            }
                                            onBlur={() =>
                                              miscFormContext.handleFamilyServiceYearTwoBlur(
                                                miscForm.miscFamilyServiceTwoYear
                                              )
                                            }
                                            error={
                                              miscFormErrors.miscFamilyServiceTwoYear
                                            }
                                            completed={miscFormCompleted}
                                          />

                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="family-service-relation-two"
                                            inputType="text"
                                            inputPlaceholder="Relation"
                                            inputValue={
                                              miscForm.miscFamilyServiceTwoRelation
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceRelationTwoChange
                                            }
                                            onBlur={() =>
                                              miscFormContext.handleFamilyServiceRelationTwoBlur(
                                                miscForm.miscFamilyServiceTwoRelation
                                              )
                                            }
                                            error={
                                              miscFormErrors.miscFamilyServiceTwoRelation
                                            }
                                            completed={miscFormCompleted}
                                          />

                                          <CustomInput
                                            inputCol="col-sm-12 col-md-8 col-lg-6"
                                            inputId="family-service-branch-two"
                                            inputType="select"
                                            selectOptionHidden="Their Service Branch"
                                            selectOptions={[
                                              {
                                                name: "House"
                                              },
                                              {
                                                name: "Senate"
                                              }
                                            ]}
                                            inputPlaceholder="Relation"
                                            inputValue={
                                              miscForm.miscFamilyServiceTwoBranch
                                            }
                                            inputOnChange={
                                              miscFormContext.handleFamilyServiceBranchTwoChange
                                            }
                                            error={
                                              miscFormErrors.miscFamilyServiceTwoBranch
                                            }
                                            completed={miscFormCompleted}
                                          />
                                        </form>

                                        {/* SAVED MESSAGE */}
                                        {savedMessages.miscForm ? (
                                          <div className="form-group col text-center">
                                            <h5 className="text-success">
                                              {savedMessages.miscForm}
                                            </h5>
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
                                          {/* SAVE BUTTON */}
                                          <button
                                            onClick={() =>
                                              setSavedMiscForm(
                                                email,
                                                miscForm,
                                                miscFormErrors
                                              )
                                            }
                                            className="btn btn-lg custom-buttons btn-block"
                                          >
                                            Save Current Progress
                                          </button>

                                          {/* SET COMPLETE BUTTON */}
                                          {miscFormCompleted ? (
                                            <button
                                              onClick={() =>
                                                openMiscFormToEditing()
                                              }
                                              className="btn btn-lg custom-buttons btn-block"
                                            >
                                              Open for Editing
                                            </button>
                                          ) : (
                                            <button
                                              onClick={() =>
                                                setMiscFormCompleted(
                                                  miscFormErrors
                                                )
                                              }
                                              className="btn btn-lg custom-buttons btn-block"
                                            >
                                              Set as Complete
                                            </button>
                                          )}

                                          {/* SUBMIT BUTTON */}
                                          {miscFormCompleted ? (
                                            <button
                                              onClick={() =>
                                                submitMiscForm(
                                                  email,
                                                  miscForm,
                                                  miscFormErrors,
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
                                                  miscFormCompleted
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
                      </MiscFormContext.Consumer>
                    )}
                  </UserContext.Consumer>
                );
              }}
            </FormControlContext.Consumer>
          );
        }}
      </StatusContext.Consumer>
    );
  }
}

export default MiscInformationCard;

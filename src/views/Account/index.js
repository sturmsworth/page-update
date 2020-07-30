import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import DisplayUser from "../../components/DisplayUser";
import DisplayMessages from "../../components/DisplayMessages";
import PanelContainer from "../../components/PanelContainer";
import FormsContainer from "../../components/FormsContainer";
import FormsDashboardButton from "../../components/FormDashboardButton";
import ProgressTracker from "../../components/ProgressTracker";
import { UserContext } from "../../context/UserContext";
import { FormControlContext } from "../../context/FormControlContext";
import { AttachmentsContext } from "../../context/AttachmentsContext";
import { MiscFormContext } from "../../context/MiscFormContext";
import { ApplicantFormContext } from "../../context/ApplicantFormContext";
import { GuardianFormContext } from "../../context/GuardianFormContext";
import * as ROUTES from "../../constants/routes";

class Account extends Component {
  removeAttachmentsAndUnlock = (
    openAttachmentsToEditing,
    setAttachmentsRedirectFalse
  ) => {
    openAttachmentsToEditing();
    setAttachmentsRedirectFalse();
  };

  unlockForm = (openToEditing, clearRedirect) => {
    openToEditing();
    clearRedirect();
  };

  render() {
    return (
      <MiscFormContext.Consumer>
        {miscFormContext => {
          return (
            <GuardianFormContext.Consumer>
              {guardianFormContext => {
                return (
                  <ApplicantFormContext.Consumer>
                    {applicantFormContext => {
                      return (
                        <AttachmentsContext.Consumer>
                          {attachmentsContext => {
                            return (
                              <FormControlContext.Consumer>
                                {formControlContext => {
                                  return (
                                    <UserContext.Consumer>
                                      {userContext => {
                                        const {
                                          formControl
                                        } = formControlContext;
                                        const {
                                          signedIn,
                                          // userInfo,
                                          authObject
                                        } = userContext;
                                        const {
                                          applicantForm
                                        } = applicantFormContext;
                                        const {
                                          applicantFirstName,
                                          applicantLastName
                                        } = applicantForm;

                                        const {
                                          setAttachmentsRedirectFalse
                                        } = attachmentsContext;
                                        return signedIn && authObject ? (
                                          <section className="container mt-5 pt-5 text-center">
                                            <DisplayUser
                                              userFirstName={applicantFirstName}
                                              userLastName={applicantLastName}
                                            />
                                            <DisplayMessages />
                                            <div className="row pb-5">
                                              <PanelContainer
                                                col="col-lg-6 col-sm-12"
                                                content={<ProgressTracker />}
                                              />
                                              <PanelContainer
                                                col="col-lg-6 col-sm-12"
                                                content={
                                                  <FormsContainer
                                                    content={
                                                      <div className="stacked-forms">
                                                        <FormsDashboardButton
                                                          featured="Step 1"
                                                          title="Terms and Conditions"
                                                          text="Please accept the terms and conditions of the application. These are required before you may continue."
                                                          buttonTitle="Begin"
                                                          link={
                                                            ROUTES.TERMS_ONE
                                                          }
                                                          completedStep={
                                                            formControl.termsCompleted
                                                          }
                                                          buttonHandler={
                                                            formControlContext.openTermsFormToEditing
                                                          }
                                                          locked={
                                                            userContext.applicationSubmitted
                                                          }
                                                        />
                                                        <FormsDashboardButton
                                                          featured="Step 2"
                                                          title="Applicant Information"
                                                          text="Let's get started! In this form we'll ask you about applicant information."
                                                          buttonTitle="Begin"
                                                          link={
                                                            ROUTES.APPLICANT_INFORMATION
                                                          }
                                                          completedStep={
                                                            formControl.applicantFormCompleted
                                                          }
                                                          buttonHandler={() =>
                                                            this.unlockForm(
                                                              formControlContext.openApplicantFormToEditing,
                                                              applicantFormContext.setApplicantRedirectFalse
                                                            )
                                                          }
                                                          locked={
                                                            userContext.applicationSubmitted
                                                          }
                                                        />
                                                        <FormsDashboardButton
                                                          featured="Step 3"
                                                          title="Parent/Guardian Information"
                                                          text="Keep going! Here you'll provide us with your parent or guardian information."
                                                          buttonTitle="Begin"
                                                          link={
                                                            ROUTES.GUARDIAN_INFORMATION
                                                          }
                                                          completedStep={
                                                            formControl.guardianFormCompleted
                                                          }
                                                          buttonHandler={() =>
                                                            this.unlockForm(
                                                              formControlContext.openGuardianFormToEditing,
                                                              guardianFormContext.setGuardianRedirectFalse
                                                            )
                                                          }
                                                          locked={
                                                            userContext.applicationSubmitted
                                                          }
                                                        />
                                                        <FormsDashboardButton
                                                          featured="Step 4"
                                                          title="Miscellaneous Information"
                                                          text="You're past the halfway point! Provide us with information about your district, school, and past page service (if applicable)."
                                                          buttonTitle="Begin"
                                                          link={
                                                            ROUTES.MISC_INFORMATION
                                                          }
                                                          completedStep={
                                                            formControl.miscFormCompleted
                                                          }
                                                          buttonHandler={() =>
                                                            this.unlockForm(
                                                              formControlContext.openMiscFormToEditing,
                                                              miscFormContext.setMiscRedirectFalse
                                                            )
                                                          }
                                                          locked={
                                                            userContext.applicationSubmitted
                                                          }
                                                        />

                                                        <FormsDashboardButton
                                                          featured="Step 5"
                                                          title="Attachments"
                                                          text="You're in the home stretch! Here you'll provide us with all necessary attachments, including: applicant's essay, extracurricular information, letters of recommendation, and the school endorsement form."
                                                          buttonTitle="Begin"
                                                          link={
                                                            ROUTES.ATTACHMENTS
                                                          }
                                                          completedStep={
                                                            formControl.attachmentsCompleted
                                                          }
                                                          buttonHandler={() =>
                                                            this.removeAttachmentsAndUnlock(
                                                              formControlContext.openAttachmentsToEditing,
                                                              setAttachmentsRedirectFalse
                                                            )
                                                          }
                                                          locked={
                                                            userContext.applicationSubmitted
                                                          }
                                                        />
                                                      </div>
                                                    }
                                                  />
                                                }
                                              />
                                            </div>
                                          </section>
                                        ) : (
                                          <Redirect to={ROUTES.LANDING} />
                                        );
                                      }}
                                    </UserContext.Consumer>
                                  );
                                }}
                              </FormControlContext.Consumer>
                            );
                          }}
                        </AttachmentsContext.Consumer>
                      );
                    }}
                  </ApplicantFormContext.Consumer>
                );
              }}
            </GuardianFormContext.Consumer>
          );
        }}
      </MiscFormContext.Consumer>
    );
  }
}

export default Account;

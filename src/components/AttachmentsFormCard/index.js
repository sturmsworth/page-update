import React, { Component } from "react";
import { AttachmentsContext } from "../../context/AttachmentsContext";
import { UserContext } from "../../context/UserContext";
import { FormControlContext } from "../../context/FormControlContext";
import { Redirect } from "react-router-dom";
import { ACCOUNT } from "../../constants/routes";
import { db } from "../../constants/firebase";
import PhotoInput from "../../components/PhotoInput";
import EndorsementInput from "../../components/EndorsementInput";
import ExtracurricularsInput from "../../components/ExtracurricularsInput";
import EssayInput from "../../components/EssayInput";
import LettersOfRecommendationInput from "../../components/LettersOfRecommendationInput";

class AttachmentsFormCard extends Component {
  handleSubmit = (email, formControl, setRedirect) => {
    const batch = db.batch();
    const dbRef = db.collection("users").doc(email);

    batch.update(dbRef, {
      formControl: {
        ...formControl
      }
    });

    batch
      .commit()
      .then(() => setRedirect())
      .catch(err => console.log(err));
  };

  updateCompletedOnDelete = (email, formControl) => {
    const batch = db.batch();
    const dbRef = db.collection("users").doc(email);

    batch.update(dbRef, {
      formControl: {
        ...formControl
      }
    });

    batch.commit().catch(err => console.log(err));
  };

  render() {
    return (
      <UserContext.Consumer>
        {userContext => {
          return (
            <FormControlContext.Consumer>
              {formControlContext => {
                return (
                  <AttachmentsContext.Consumer>
                    {attachmentsContext => {
                      const {
                        setApplicantPhoto,
                        removeApplicantPhoto,
                        setSchoolEndorsement,
                        removeSchoolEndorsement,
                        setExtracurriculars,
                        removeExtracurriculars,
                        setEssay,
                        removeEssay,
                        setLettersOfRecommendation,
                        findLetterOfRecommendation,
                        removeLetterOfRecommendation,
                        removeAllLettersOfRecommendation,
                        attachments,
                        recommendationsError,
                        pushAttachmentData,
                        setAttachmentsRedirectTrue,
                        redirect
                      } = attachmentsContext;
                      const {
                        setAttachmentsCompleted,
                        formControl,
                        formControlErrorMessage,
                        removeAttachmentsCompleted
                      } = formControlContext;
                      const { userInfo } = userContext;
                      return redirect ? (
                        <Redirect to={ACCOUNT} />
                      ) : (
                        <div className="container mt-5 pt-5">
                          <div className="row">
                            <div className="col">
                              <div className="form-control">
                                <h3 className="card-title">Attachments</h3>
                                <p className="card-text">
                                  Please read this carefully before submitting
                                  attachments:
                                </p>
                                <p>
                                  Applicants will need to present a total of (at
                                  least) five attachment files in order to
                                  complete this portion of the application.
                                </p>
                                <ul>
                                  <li>
                                    <u>Applicant Photo</u> - headshot or recent
                                    photograph no more than 10MB in size.
                                  </li>
                                  <li>
                                    <u>School Endorsement Form</u> - The form
                                    can be downloaded{" "}
                                    <a
                                      href="https://firebasestorage.googleapis.com/v0/b/page-application-c791e.appspot.com/o/2020%20Page%20School%20Endorsement%20Form.pdf?alt=media&token=d258e1a0-45c8-4c87-9c87-eff470c50014"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      here
                                    </a>
                                    . It is required. Filetype must be PDF no
                                    more than 5MB in size.
                                  </li>
                                  <li>
                                    <u>Applicant Extracurricular Activities</u>{" "}
                                    - The form can be downloaded{" "}
                                    <a
                                      href="https://firebasestorage.googleapis.com/v0/b/page-application-c791e.appspot.com/o/SPLP%20Activities.pdf?alt=media&token=def2c15b-4ddd-48fd-8e43-62b27c64f3b9"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      here
                                    </a>
                                    . It is required. Filetype must be PDF no
                                    more than 5MB in size.
                                  </li>
                                  <li>
                                    <u>Applicant Essay</u> - Filetype must be
                                    PDF no more than 5MB in size. We{" "}
                                    <i>WILL NOT</i> accept Word Document or TXT
                                    formats. (Please refer to{" "}
                                    <a
                                      href="https://support.office.com/en-gb/article/save-or-convert-to-pdf-or-xps-d85416c5-7d77-4fd6-a216-6f4bf7c7c110?ui=en-US&rs=en-GB&ad=GB"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      this guide
                                    </a>{" "}
                                    for assistance converting Word Documents to
                                    PDF)
                                  </li>
                                  <li>
                                    <u>Letters of Recommendation</u> - We now
                                    accept multiple files for this option.{" "}
                                    <i>
                                      No more than two letters will be accepted.
                                    </i>{" "}
                                    Each filetype must be PDF no more than 5MB
                                    in size.{" "}
                                  </li>
                                  <li>
                                    All attachments are automatically saved once
                                    uploaded. You can come back and view or
                                    delete them at any time.{" "}
                                  </li>
                                </ul>
                                <p className="card-text pb-3">
                                  <span className="text-danger">
                                    All attachment fields are required!
                                  </span>
                                </p>

                                <PhotoInput
                                  setApplicantPhoto={setApplicantPhoto}
                                  removeApplicantPhoto={removeApplicantPhoto}
                                  pushAttachmentData={pushAttachmentData}
                                  photoName={attachments.applicantPhoto}
                                  removeAttachmentsCompleted={
                                    removeAttachmentsCompleted
                                  }
                                  updateCompletedOnDelete={
                                    this.updateCompletedOnDelete
                                  }
                                  formControl={formControl}
                                />

                                <EndorsementInput
                                  endorsementName={
                                    attachments.schoolEndorsement
                                  }
                                  setSchoolEndorsement={setSchoolEndorsement}
                                  removeSchoolEndorsement={
                                    removeSchoolEndorsement
                                  }
                                  pushAttachmentData={pushAttachmentData}
                                  removeAttachmentsCompleted={
                                    removeAttachmentsCompleted
                                  }
                                  updateCompletedOnDelete={
                                    this.updateCompletedOnDelete
                                  }
                                  formControl={formControl}
                                />

                                <ExtracurricularsInput
                                  setExtracurriculars={setExtracurriculars}
                                  removeExtracurriculars={
                                    removeExtracurriculars
                                  }
                                  extracurricularsName={
                                    attachments.extracurriculars
                                  }
                                  pushAttachmentData={pushAttachmentData}
                                  removeAttachmentsCompleted={
                                    removeAttachmentsCompleted
                                  }
                                  updateCompletedOnDelete={
                                    this.updateCompletedOnDelete
                                  }
                                  formControl={formControl}
                                />

                                <EssayInput
                                  essayName={attachments.essay}
                                  setEssay={setEssay}
                                  removeEssay={removeEssay}
                                  pushAttachmentData={pushAttachmentData}
                                  removeAttachmentsCompleted={
                                    removeAttachmentsCompleted
                                  }
                                  updateCompletedOnDelete={
                                    this.updateCompletedOnDelete
                                  }
                                  formControl={formControl}
                                />

                                <LettersOfRecommendationInput
                                  lettersOfRecommendationName={
                                    attachments.recommendations
                                  }
                                  setLettersOfRecommendation={
                                    setLettersOfRecommendation
                                  }
                                  findLetterOfRecommendation={
                                    findLetterOfRecommendation
                                  }
                                  removeLetterOfRecommendation={
                                    removeLetterOfRecommendation
                                  }
                                  removeAllLettersOfRecommendation={
                                    removeAllLettersOfRecommendation
                                  }
                                  recommendationsError={recommendationsError}
                                  pushAttachmentData={pushAttachmentData}
                                  removeAttachmentsCompleted={
                                    removeAttachmentsCompleted
                                  }
                                  updateCompletedOnDelete={
                                    this.updateCompletedOnDelete
                                  }
                                  formControl={formControl}
                                />

                                {formControlErrorMessage ? (
                                  <div className="text-danger text-center">
                                    <h5>{formControlErrorMessage}</h5>
                                  </div>
                                ) : null}

                                <button
                                  className="btn btn-lg btn-block custom-buttons"
                                  onClick={() =>
                                    setAttachmentsCompleted(attachments)
                                  }
                                >
                                  Set As Complete
                                </button>
                                {formControl.attachmentsCompleted ? (
                                  <button
                                    className="btn btn-lg btn-block custom-buttons"
                                    onClick={() =>
                                      this.handleSubmit(
                                        userInfo.email,
                                        formControl,
                                        setAttachmentsRedirectTrue
                                      )
                                    }
                                  >
                                    Submit
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-lg btn-block btn-secondary"
                                    onClick={null}
                                  >
                                    Submit
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }}
                  </AttachmentsContext.Consumer>
                );
              }}
            </FormControlContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default AttachmentsFormCard;

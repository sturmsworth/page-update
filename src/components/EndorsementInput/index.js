import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { storageRef } from "../../constants/firebase";

class EndorsementInput extends Component {
  state = {
    message: null,
    error: null
  };

  constructor(props) {
    super(props);
    this.endorsementInput = React.createRef();
  }

  uploadEndorsementOnChange = (
    endorsement,
    email,
    setSchoolEndorsement,
    pushAttachmentData
  ) => {
    const endorsementPath = `${email}/endorsement/${endorsement.name}`;
    const endorsementRef = storageRef.child(endorsementPath);

    if (email) {
      if (
        endorsement.type === "application/pdf" &&
        endorsement.size <= 5000000
      ) {
        this.setState({
          ...this.state,
          message: "Please wait, loading document preview..."
        });

        endorsementRef
          .put(endorsement)
          .then(snapshot => {
            if (snapshot) {
              endorsementRef
                .getDownloadURL()
                .then(url => {
                  setSchoolEndorsement(endorsement, url);
                })
                .then(() => {
                  pushAttachmentData(email);
                })
                .then(() =>
                  this.setState({
                    ...this.state,
                    message: null,
                    error: null
                  })
                );
            }
          })
          .catch(err =>
            this.setState({
              ...this.state,
              error: err.message
            })
          );
      } else {
        this.setState({
          ...this.state,
          error:
            "Please ensure that your file is a PDF less than 5MB, then try again."
        });
      }
    } else {
      this.setState({
        ...this.state,
        error: "You must be logged in to upload files."
      });
    }
  };

  deleteEndorsement = (
    file,
    email,
    remove,
    pushAttachmentData,
    removeAttachmentsCompleted,
    updateCompletedOnDelete,
    formControl
  ) => {
    if (file) {
      const filePath = `${email}/endorsement/${file}`;
      const fileRef = storageRef.child(filePath);

      fileRef
        .delete()
        .then(() => {
          remove();
        })
        .then(() => pushAttachmentData(email))
        .catch(err =>
          this.setState({
            ...this.state,
            error: err.message
          })
        );
    } else {
      this.setState({
        ...this.state,
        error: "No file found!"
      });
    }
    removeAttachmentsCompleted();
    updateCompletedOnDelete(email, formControl);
  };

  render() {
    const { message, error } = this.state;
    const {
      setSchoolEndorsement,
      removeSchoolEndorsement,
      endorsementName,
      pushAttachmentData,
      removeAttachmentsCompleted,
      updateCompletedOnDelete,
      formControl
    } = this.props;
    return (
      <UserContext.Consumer>
        {userContext => {
          const { userInfo } = userContext;

          return (
            <div className="form-group">
              <div className="form-row">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="h3">School Endorsement Form</div>
                  {/* start of input */}
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="endorsementPhoto"
                      ref={this.endorsementInput}
                      onChange={() =>
                        this.uploadEndorsementOnChange(
                          this.endorsementInput.current.files[0],
                          userInfo.email,
                          setSchoolEndorsement,
                          pushAttachmentData
                        )
                      }
                    />
                    {/* label for input, and its management */}
                    <label
                      className="custom-file-label"
                      htmlFor="applicantPhoto"
                    >
                      {endorsementName === null ? (
                        `Choose Endorsement Form`
                      ) : (
                        <div>
                          <i className="far fa-file-pdf" />
                          <span className="pl-2">{`${endorsementName.name.substring(
                            0,
                            20
                          )}...`}</span>
                        </div>
                      )}
                    </label>
                  </div>

                  {/* start of error div */}
                  {error ? <div className="text-danger">{error}</div> : null}

                  {/* start of file preview */}
                  <div className="form-row" id="endorsement-preview">
                    {endorsementName === null ? (
                      message ? (
                        <div className="col-12 pt-3 text-center">
                          <div
                            style={{
                              backgroundColor: "lightgrey",
                              padding: "10em 0em",
                              margin: "0 auto"
                            }}
                          >
                            <span className="h3">
                              <i className="fas fa-spinner fa-pulse fa-3x" />
                              <br />
                              <br />
                              <span>{message}</span>
                            </span>
                          </div>
                        </div>
                      ) : null
                    ) : (
                      <div
                        className="col-lg-6 col-md-8 col-sm-12 pt-3 text-center"
                        style={{ width: "100%", margin: "0 auto" }}
                      >
                        <span className="h3">
                          <i className="far fa-file-pdf fa-10x" />
                          <br />
                          <span>{`${endorsementName.name.substring(
                            0,
                            20
                          )}...`}</span>
                        </span>
                        <div className="text-center pt-2">
                          <a
                            href={endorsementName.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* start of remove button */}
              <div className="form-row pt-3">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <button
                    className="btn btn-lg custom-buttons btn-block"
                    onClick={() =>
                      this.deleteEndorsement(
                        endorsementName.name,
                        userInfo.email,
                        removeSchoolEndorsement,
                        pushAttachmentData,
                        removeAttachmentsCompleted,
                        updateCompletedOnDelete,
                        formControl
                      )
                    }
                  >
                    Remove School Endorsement Form
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default EndorsementInput;

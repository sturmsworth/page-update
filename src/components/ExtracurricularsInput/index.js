import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { storageRef } from "../../constants/firebase";

class ExtracurricularsInput extends Component {
  state = {
    message: null,
    error: null
  };

  constructor(props) {
    super(props);
    this.extracurricularsInput = React.createRef();
  }

  uploadOnChange = (file, email, setFile, pushAttachmentData) => {
    const filePath = `${email}/extracurriculars/${file.name}`;
    const fileRef = storageRef.child(filePath);

    if (email) {
      if (file.type === "application/pdf" && file.size <= 5000000) {
        this.setState({
          ...this.state,
          message: "Please wait, loading document preview..."
        });

        fileRef
          .put(file)
          .then(snapshot => {
            if (snapshot) {
              fileRef
                .getDownloadURL()
                .then(url => {
                  setFile(file, url);
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

  deleteFile = (
    file,
    email,
    remove,
    pushAttachmentData,
    removeAttachmentsCompleted,
    updateCompletedOnDelete,
    formControl
  ) => {
    if (file) {
      const filePath = `${email}/extracurriculars/${file.name}`;
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
      setExtracurriculars,
      removeExtracurriculars,
      extracurricularsName,
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
                  <div className="h3">Extracurriculars Form</div>
                  {/* start of input */}
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="extracurriculars"
                      ref={this.extracurricularsInput}
                      onChange={() =>
                        this.uploadOnChange(
                          this.extracurricularsInput.current.files[0],
                          userInfo.email,
                          setExtracurriculars,
                          pushAttachmentData
                        )
                      }
                    />
                    {/* label for input, and its management */}
                    <label
                      className="custom-file-label"
                      htmlFor="extracurriculars"
                    >
                      {extracurricularsName === null ? (
                        `Choose Extracurriculars Form`
                      ) : (
                        <div>
                          <i className="far fa-file-pdf" />
                          <span className="pl-2">{`${extracurricularsName.name.substring(
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
                  <div className="form-row" id="extracurriculars-preview">
                    {extracurricularsName === null ? (
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
                          <span>{`${extracurricularsName.name.substring(
                            0,
                            20
                          )}...`}</span>
                        </span>
                        <div className="text-center pt-2">
                          <a
                            href={extracurricularsName.url}
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
                      this.deleteFile(
                        extracurricularsName,
                        userInfo.email,
                        removeExtracurriculars,
                        pushAttachmentData,
                        removeAttachmentsCompleted,
                        updateCompletedOnDelete,
                        formControl
                      )
                    }
                  >
                    Remove Extracurriculars Form
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

export default ExtracurricularsInput;

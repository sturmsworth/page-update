import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { storageRef } from "../../constants/firebase";

class EssayInput extends Component {
  state = {
    message: null,
    error: null
  };

  constructor(props) {
    super(props);
    this.essayInput = React.createRef();
  }

  uploadOnChange = (file, email, setFile, pushAttachmentData) => {
    const filePath = `${email}/essay/${file.name}`;
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
      const filePath = `${email}/essay/${file.name}`;
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
      setEssay,
      removeEssay,
      essayName,
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
                <div className="h3">Essay</div>

                <div className="col-12">
                  <p>
                    Choose{" "}
                    <i>
                      <u>one</u>
                    </i>{" "}
                    of the following options. Each essay must have a word count
                    of 300.
                  </p>
                  <h5>Essay Topics:</h5>
                  <ol>
                    <li>
                      Think about what it means to be a Virginian. If you were
                      in a leadership capacity and had to speak with someone who
                      is unfamiliar with the Commonwealth, what are three things
                      you would tell them about Virginia and why? What is one
                      thing you would change?
                    </li>
                    <li>
                      Leaders typically make difficult decisions and balance a
                      multitude of responsibility. One challenge a leader may
                      face is making a decision for which the outcome will not
                      be satisfactory to everyone. Identify the characteristics
                      you think a strong leader must possess and explain how you
                      would apply those standards in an attempt to compromise.{" "}
                    </li>
                    <li>
                      Discuss something your locality does well. What is
                      something on which they could improve and how may that be
                      achieved?
                    </li>
                  </ol>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-12">
                  {/* start of input */}
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="Essay"
                      ref={this.essayInput}
                      onChange={() =>
                        this.uploadOnChange(
                          this.essayInput.current.files[0],
                          userInfo.email,
                          setEssay,
                          pushAttachmentData
                        )
                      }
                    />

                    {/* label for input, and its management */}
                    <label className="custom-file-label" htmlFor="essay">
                      {essayName === null ? (
                        `Choose Essay`
                      ) : (
                        <div>
                          <i className="fas fa-file-image" />
                          <span className="pl-2">{`${essayName.name.substring(
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
                    {essayName === null ? (
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
                          <span>{`${essayName.name.substring(0, 20)}...`}</span>
                        </span>
                        <div className="text-center pt-2">
                          <a
                            href={essayName.url}
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
                        essayName,
                        userInfo.email,
                        removeEssay,
                        pushAttachmentData,
                        removeAttachmentsCompleted,
                        updateCompletedOnDelete,
                        formControl
                      )
                    }
                  >
                    Remove Essay
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

export default EssayInput;

import React, { Component } from "react";
import { UserContext } from "../../context/UserContext";
import { storageRef } from "../../constants/firebase";

class LettersOfRecommendationInput extends Component {
  state = {
    message: null,
    error: null
  };

  constructor(props) {
    super(props);
    this.lettersOfRecommendationInput = React.createRef();
  }

  uploadOnChange = (files, email, setFile, pushRecommendationData) => {
    if (files.length <= 2) {
      this.setState({
        ...this.state,
        message: "Please wait, loading document preview..."
      });
      Array.from(files).map(file => {
        if (file.type === "application/pdf" && file.size <= 5000000) {
          const filePath = `${email}/recommendations/${file.name}`;
          const fileRef = storageRef.child(filePath);

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
                    pushRecommendationData(email);
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
          return this.setState({
            ...this.state,
            error: null
          });
        } else {
          return this.setState({
            ...this.state,
            error:
              "Please ensure that your file(s) is a PDF less than 5MB, then try again."
          });
        }
      });
    } else {
      return this.setState({
        ...this.state,
        error: "No more than two letters of recommendation will be accepted."
      });
    }
  };

  deleteFile = (
    email,
    i,
    findItem,
    removeItem,
    pushAttachmentData,
    removeAttachmentsCompleted,
    updateCompletedOnDelete,
    formControl
  ) => {
    const filePath = `${email}/recommendations/${findItem(i).name}`;
    const fileRef = storageRef.child(filePath);

    fileRef
      .delete()
      .then(() => {
        removeItem(i);
      })
      .then(() => pushAttachmentData(email))
      .catch(err =>
        this.setState({
          ...this.state,
          error: err.message
        })
      );

    removeAttachmentsCompleted();
    updateCompletedOnDelete(email, formControl);
  };

  deleteAllFiles = (
    email,
    remove,
    pushAttachmentData,
    removeAttachmentsCompleted,
    updateCompletedOnDelete,
    formControl
  ) => {
    const folderPath = `${email}/recommendations`;
    const folderRef = storageRef.child(folderPath);

    folderRef
      .listAll()
      .then(dir => {
        dir.items.forEach(file => {
          const filePath = `${email}/recommendations/${file.name}`;
          const fileRef = storageRef.child(filePath);
          fileRef.delete().catch(err =>
            this.setState({
              ...this.state,
              error: err.message
            })
          );
        });
      })
      .then(() => remove())
      .then(() => pushAttachmentData(email))
      .catch(err =>
        this.setState({
          ...this.state,
          error: err.message
        })
      );

    removeAttachmentsCompleted();
    updateCompletedOnDelete(email, formControl);
  };

  render() {
    const { error } = this.state;
    const {
      setLettersOfRecommendation,
      removeLetterOfRecommendation,
      findLetterOfRecommendation,
      removeAllLettersOfRecommendation,
      lettersOfRecommendationName,
      pushAttachmentData,
      recommendationsError,
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
                  <div className="h3">Letters of Recommendation</div>
                  <p>
                    We now accept multiple files (maximum of two). Each one must
                    be a PDF less than 5MB.
                  </p>

                  {/* start of input */}
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="letters-of-recommendation"
                      ref={this.lettersOfRecommendationInput}
                      multiple
                      onChange={() =>
                        this.uploadOnChange(
                          this.lettersOfRecommendationInput.current.files,
                          userInfo.email,
                          setLettersOfRecommendation,
                          pushAttachmentData
                        )
                      }
                    />

                    {/* label for input, and its management */}
                    <label
                      className="custom-file-label"
                      htmlFor="lettersOfRecommendation"
                    >
                      {lettersOfRecommendationName.length === 0 ? (
                        `Choose Letters of Recommendation`
                      ) : this.state.message ? (
                        <div>
                          <i className="fas fa-file-image" />
                          <span className="pl-2">{this.state.message}</span>
                        </div>
                      ) : (
                        <div>
                          <i className="fas fa-file-image" />
                          <span className="pl-2">Preview Files below</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              {/* start of file preview */}
              {lettersOfRecommendationName.length === 0 ? null : (
                <div className="form-row pt-3">
                  <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="container-fluid">
                      {lettersOfRecommendationName.map((letter, index) => {
                        return (
                          <div className="row" key={index}>
                            <div className="pr-3">
                              <i className="far fa-file-pdf" />
                            </div>

                            <div className="pr-3">
                              <span>{`${letter.name.substring(
                                0,
                                50
                              )}...`}</span>
                            </div>
                            <div>
                              <span>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() =>
                                    this.deleteFile(
                                      userInfo.email,
                                      index,
                                      findLetterOfRecommendation,
                                      removeLetterOfRecommendation,
                                      pushAttachmentData,
                                      removeAttachmentsCompleted,
                                      updateCompletedOnDelete,
                                      formControl
                                    )
                                  }
                                >
                                  X
                                </button>
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {/* start of error div */}
              {error || recommendationsError ? (
                <div className="text-danger">
                  {error || recommendationsError}
                </div>
              ) : null}

              {/* start of remove button */}
              <div className="form-row pt-3">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <button
                    className="btn btn-lg custom-buttons btn-block"
                    onClick={() =>
                      this.deleteAllFiles(
                        userInfo.email,
                        removeAllLettersOfRecommendation,
                        pushAttachmentData,
                        removeAttachmentsCompleted,
                        updateCompletedOnDelete,
                        formControl
                      )
                    }
                  >
                    Remove All Letters of Recommendation
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

export default LettersOfRecommendationInput;

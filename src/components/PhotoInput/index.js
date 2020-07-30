import React, { Component } from "react";
import { storageRef } from "../../constants/firebase";
import { UserContext } from "../../context/UserContext";

class PhotoInput extends Component {
  state = {
    message: null,
    error: null
  };
  constructor(props) {
    super(props);
    this.photoInput = React.createRef();
  }

  uploadPhotoOnChange = (
    photo,
    email,
    setApplicantPhoto,
    pushAttachmentData
  ) => {
    const photoPath = `${email}/photo/${photo.name}`;
    const photoRef = storageRef.child(photoPath);

    if (email) {
      if (photo.type === "image/jpeg" && photo.size <= 10000000) {
        this.setState({
          ...this.state,
          message: "Please wait, loading image preview..."
        });

        photoRef
          .put(photo)
          .then(snapshot => {
            if (snapshot) {
              photoRef
                .getDownloadURL()
                .then(url => {
                  setApplicantPhoto(photo, url);
                })
                .then(() => {
                  pushAttachmentData(email);
                  this.setState({
                    ...this.state,
                    message: null,
                    error: null
                  });
                });
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
            "Please ensure that your file is a JPEG and that its size is under 10MB then try again"
        });
      }
    } else {
      this.setState({
        ...this.state,
        error: "You must be logged in to upload files."
      });
    }
  };

  deletePhoto = (
    photo,
    email,
    removeApplicantPhoto,
    pushApplicantPhoto,
    removeAttachmentsCompleted,
    updateCompletedOnDelete,
    formControl
  ) => {
    if (photo) {
      const photoPath = `${email}/photo/${photo}`;
      const photoRef = storageRef.child(photoPath);

      photoRef
        .delete()
        .then(() => {
          removeApplicantPhoto();
        })
        .then(() => pushApplicantPhoto(email))
        .catch(err =>
          this.setState({
            ...this.state,
            error: err.message
          })
        );
    }
    removeAttachmentsCompleted();
    updateCompletedOnDelete(email, formControl);
  };

  render() {
    const { message, error } = this.state;
    return (
      <UserContext.Consumer>
        {userContext => {
          const {
            setApplicantPhoto,
            removeApplicantPhoto,
            pushAttachmentData,
            photoName,
            removeAttachmentsCompleted,
            updateCompletedOnDelete,
            formControl
          } = this.props;
          const { userInfo } = userContext;
          return (
            <div className="form-group">
              <div className="form-row">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="h3">Applicant Photo</div>
                  {/* start of input */}
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="applicantPhoto"
                      ref={this.photoInput}
                      onChange={() => {
                        this.uploadPhotoOnChange(
                          this.photoInput.current.files[0],
                          userInfo.email,
                          setApplicantPhoto,
                          pushAttachmentData
                        );
                      }}
                    />

                    {/* label for input, and its management */}
                    <label
                      className="custom-file-label"
                      htmlFor="applicantPhoto"
                    >
                      {photoName === null ? (
                        `Choose Photo`
                      ) : (
                        <div>
                          <i className="fas fa-file-image" />
                          <span className="pl-2">{`${photoName.name.substring(
                            0,
                            20
                          )}...`}</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              {/* start of error div */}
              {error ? <div className="text-danger">{error}</div> : null}

              {/* start of file preview */}
              <div className="form-row" id="image-preview">
                {photoName === null ? (
                  this.state.message ? (
                    <div className="col-lg-6 col-md-8 col-sm-12 pt-3 text-center">
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
                  <div className="col-lg-6 col-md-8 col-sm-12 pt-3">
                    <img
                      className="img-thumbnail"
                      alt="applicant"
                      style={{ width: "100%" }}
                      src={photoName.url}
                    />
                    <div className="text-center pt-2">
                      <a
                        href={photoName.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View File
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* start of remove button */}
              <div className="form-row pt-3">
                <div className="col-lg-6 col-md-8 col-sm-12">
                  <button
                    className="btn btn-lg custom-buttons btn-block"
                    onClick={
                      photoName
                        ? () =>
                            this.deletePhoto(
                              photoName.name,
                              userInfo.email,
                              removeApplicantPhoto,
                              pushAttachmentData,
                              removeAttachmentsCompleted,
                              updateCompletedOnDelete,
                              formControl
                            )
                        : null
                    }
                  >
                    Remove Photo
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

export default PhotoInput;

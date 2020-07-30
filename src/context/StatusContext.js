import React, { Component, createContext } from "react";
import moment from "moment";
import { db } from "../constants/firebase";

export const StatusContext = createContext();

class StatusContextProvider extends Component {
  state = {
    savedMessages: {
      applicantForm: null,
      termsForm: null,
      miscForm: null,
      guardianForm: null,
      attachments: null
    },
    errorMessages: {
      applicantForm: null,
      termsForm: null,
      miscForm: null,
      guardianForm: null,
      attachments: null
    }
  };

  // SAVES
  setSavedApplicantForm = (email, formState, errorState) => {
    const userRef = db.collection("users").doc(`${email}`);

    userRef
      .update({
        "forms.applicantForm": {
          ...formState
        },
        "formErrors.applicantFormErrors": {
          ...errorState
        }
      })
      .then(() => {
        this.setState({
          ...this.state,
          savedMessages: {
            ...this.state.savedMessages,
            applicantForm: `Form saved ${moment().format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}`
          }
        });
      })
      .catch(err => console.log(err));
  };

  setSavedMiscForm = (email, formState, errorState) => {
    const userRef = db.collection("users").doc(`${email}`);

    userRef
      .update({
        "forms.miscForm": {
          ...formState
        },
        "formErrors.miscFormErrors": {
          ...errorState
        }
      })
      .then(() => {
        this.setState({
          ...this.state,
          savedMessages: {
            ...this.state.savedMessages,
            miscForm: `Form saved ${moment().format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}`
          }
        });
      })
      .catch(err => console.log(err));
  };

  setSavedGuardianForm = (email, formState, errorState) => {
    const userRef = db.collection("users").doc(`${email}`);

    userRef
      .update({
        "forms.guardianForm": {
          ...formState
        },
        "formErrors.guardianFormErrors": {
          ...errorState
        }
      })
      .then(() => {
        this.setState({
          ...this.state,
          savedMessages: {
            ...this.state.savedMessages,
            guardianForm: `Form saved ${moment().format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}`
          }
        });
      })
      .catch(err => console.log(err));
  };

  // SAVED ATTACHMENTS ****************
  // dont know how to handle this one yet
  setSavedAttachmentsForm = value => {
    this.setState({
      ...this.state,
      savedMessages: {
        ...this.state.savedMessages,
        attachments: value
      }
    });
  };

  // ERRORS
  setErrorsApplicantForm = value => {
    this.setState({
      ...this.state,
      errorMessages: {
        ...this.state.savedMessages,
        applicantForm: value
      }
    });
  };

  setErrorsTermsForm = value => {
    this.setState({
      ...this.state,
      errorMessages: {
        ...this.state.savedMessages,
        termsForm: value
      }
    });
  };

  setErrorsMiscForm = value => {
    this.setState({
      ...this.state,
      errorMessages: {
        ...this.state.savedMessages,
        miscForm: value
      }
    });
  };

  setErrorsGuardianForm = value => {
    this.setState({
      ...this.state,
      errorMessages: {
        ...this.state.savedMessages,
        guardianForm: value
      }
    });
  };

  setErrorsAttachmentsForm = value => {
    this.setState({
      ...this.state,
      errorMessages: {
        ...this.state.savedMessages,
        attachments: value
      }
    });
  };

  componentDidMount() {}

  render() {
    return (
      <StatusContext.Provider
        value={{
          ...this.state,
          setSavedApplicantForm: this.setSavedApplicantForm,
          setSavedAttachmentsForm: this.setSavedAttachmentsForm,
          setSavedGuardianForm: this.setSavedGuardianForm,
          setSavedMiscForm: this.setSavedMiscForm,
          setSavedTermsForm: this.setSavedTermsForm,
          setErrorsApplicantForm: this.setErrorsApplicantForm,
          setErrorsTermsForm: this.setErrorsTermsForm,
          setErrorsMiscForm: this.setErrorsMiscForm,
          setErrorsGuardianForm: this.setErrorsGuardianForm,
          setErrorsAttachmentsForm: this.setErrorsAttachmentsForm
        }}
      >
        {this.props.children}
      </StatusContext.Provider>
    );
  }
}

export default StatusContextProvider;

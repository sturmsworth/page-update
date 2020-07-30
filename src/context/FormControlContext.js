import React, { Component, createContext } from "react";

export const FormControlContext = createContext();

class FormControlContextProvider extends Component {
  state = {
    formControl: {
      termsCompleted: false,
      applicantFormCompleted: false,
      guardianFormCompleted: false,
      miscFormCompleted: false,
      attachmentsCompleted: false
    },
    formControlErrorMessage: null
  };

  // SET STATE ON LOGIN
  // THIS IS FOR PERSISTENCE
  setInitialStateFormControl = formState => {
    return formState
      ? this.setState({
          ...this.state,
          formControl: {
            ...formState
          }
        })
      : console.log(`no initial form control state`);
  };

  // terms
  setTermsFormCompleted = termsForm => {
    if (
      (termsForm.termsOneApplicant,
      termsForm.termsOneGuardian,
      termsForm.termsTwoApplicant,
      termsForm.termsTwoGuardian)
    ) {
      this.setState({
        ...this.state,
        formControl: {
          ...this.state.formControl,
          termsCompleted: true
        }
      });
    }
  };

  openTermsFormToEditing = () => {
    this.setState({
      ...this.state,
      formControl: {
        ...this.state.formControl,
        termsCompleted: false
      }
    });
  };

  // applicant form
  setApplicantFormCompleted = testObject => {
    const test = Object.keys(testObject).every(k => testObject[k] === null);
    if (test) {
      return this.setState({
        ...this.state,
        formControl: {
          ...this.state.formControl,
          applicantFormCompleted: true
        },
        formControlErrorMessage: null
      });
    } else {
      return this.setState({
        ...this.state,
        formControlErrorMessage: `Your form must be error-free before it can be marked as completed.`
      });
    }
  };

  openApplicantFormToEditing = () => {
    this.setState({
      ...this.state,
      formControl: {
        ...this.state.formControl,
        applicantFormCompleted: false
      }
    });
  };

  // guardian form
  setGuardianFormCompleted = testObject => {
    const test = Object.keys(testObject).every(k => testObject[k] === null);
    if (test) {
      return this.setState({
        ...this.state,
        formControl: {
          ...this.state.formControl,
          guardianFormCompleted: true
        },
        formControlErrorMessage: null
      });
    } else {
      return this.setState({
        ...this.state,
        formControlErrorMessage: `Your form must be error-free before it can be marked as completed.`
      });
    }
  };

  openGuardianFormToEditing = () => {
    this.setState({
      ...this.state,
      formControl: {
        ...this.state.formControl,
        guardianFormCompleted: false
      }
    });
  };

  // MISC FORM
  setMiscFormCompleted = testObject => {
    const test = Object.keys(testObject).every(k => testObject[k] === null);
    if (test) {
      return this.setState({
        ...this.state,
        formControl: {
          ...this.state.formControl,
          miscFormCompleted: true
        },
        formControlErrorMessage: null
      });
    } else {
      return this.setState({
        ...this.state,
        formControlErrorMessage: `Attachments are missing. Please ensure all fields are filled before setting as complete.`
      });
    }
  };

  openMiscFormToEditing = () => {
    this.setState({
      ...this.state,
      formControl: {
        ...this.state.formControl,
        miscFormCompleted: false
      }
    });
  };

  setAttachmentsCompleted = attachments => {
    const keys = Object.keys(attachments);
    console.log("keys -- attachments", keys);
    const filterTrue = keys.filter(k => {
      return attachments[k];
    });
    console.log("filter true keys -- attachments", filterTrue);
    console.log("filter true keys, length -- attachments", filterTrue.length);
    if (filterTrue.length === 5 && attachments.recommendations.length > 0) {
      return this.setState({
        ...this.state,
        formControl: {
          ...this.state.formControl,
          attachmentsCompleted: true
        },
        formControlErrorMessage: null
      });
    } else {
      return this.setState({
        ...this.state,
        formControl: {
          ...this.state.formControl,
          attachmentsCompleted: false
        },
        formControlErrorMessage:
          "Please ensure you've attached all files required before attempting to assign this as completed."
      });
    }
  };

  removeAttachmentsCompleted = () => {
    return this.setState({
      ...this.state,
      formControl: {
        ...this.state.formControl,
        attachmentsCompleted: false
      },
      formControlErrorMessage: null
    });
  };

  openAttachmentsToEditing = () => {
    return this.setState({
      ...this.state,
      formControl: {
        ...this.state.formControl,
        attachmentsCompleted: false
      }
    });
  };

  render() {
    return (
      <FormControlContext.Provider
        value={{
          ...this.state,
          setInitialStateFormControl: this.setInitialStateFormControl,
          setTermsFormCompleted: this.setTermsFormCompleted,
          openTermsFormToEditing: this.openTermsFormToEditing,
          setApplicantFormCompleted: this.setApplicantFormCompleted,
          openApplicantFormToEditing: this.openApplicantFormToEditing,
          setGuardianFormCompleted: this.setGuardianFormCompleted,
          openGuardianFormToEditing: this.openGuardianFormToEditing,
          setMiscFormCompleted: this.setMiscFormCompleted,
          openMiscFormToEditing: this.openMiscFormToEditing,
          setAttachmentsCompleted: this.setAttachmentsCompleted,
          openAttachmentsToEditing: this.openAttachmentsToEditing,
          removeAttachmentsCompleted: this.removeAttachmentsCompleted
        }}
      >
        {this.props.children}
      </FormControlContext.Provider>
    );
  }
}

export default FormControlContextProvider;

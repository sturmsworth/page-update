import React, { Component, createContext } from "react";

export const TermsFormContext = createContext();

class TermsFormContextProvider extends Component {
  state = {
    termsForm: {
      termsOneApplicant: false,
      termsOneGuardian: false,
      termsTwoApplicant: false,
      termsTwoGuardian: false
    }
  };

  // SET STATE ON LOGIN
  // THIS IS FOR PERSISTENCE
  setInitialStateTerms = formState => {
    // console.log(`setInitialStateTermsForm:`, formState);
    if (formState) {
      this.setState({
        ...this.state,
        termsForm: {
          ...formState
        }
      });
    } else {
      console.log("No initial terms state");
    }
  };

  setTermsOneApplicant = () => {
    this.setState({
      ...this.state,
      termsForm: {
        ...this.state.termsForm,
        termsOneApplicant: !this.state.termsForm.termsOneApplicant
      }
    });
  };

  setTermsOneGuardian = () => {
    this.setState({
      ...this.state,
      termsForm: {
        ...this.state.termsForm,
        termsOneGuardian: !this.state.termsForm.termsOneGuardian
      }
    });
  };

  setTermsTwoApplicant = () => {
    this.setState({
      ...this.state,
      termsForm: {
        ...this.state.termsForm,
        termsTwoApplicant: !this.state.termsForm.termsTwoApplicant
      }
    });
  };

  setTermsTwoGuardian = () => {
    this.setState({
      ...this.state,
      termsForm: {
        ...this.state.termsForm,
        termsTwoGuardian: !this.state.termsForm.termsTwoGuardian
      }
    });
  };

  render() {
    return (
      <TermsFormContext.Provider
        value={{
          ...this.state,
          setInitialStateTerms: this.setInitialStateTerms,
          setUserInfoTermsForm: this.setUserInfoTermsForm,
          setTermsOneApplicant: this.setTermsOneApplicant,
          setTermsOneGuardian: this.setTermsOneGuardian,
          setTermsTwoApplicant: this.setTermsTwoApplicant,
          setTermsTwoGuardian: this.setTermsTwoGuardian
        }}
      >
        {this.props.children}
      </TermsFormContext.Provider>
    );
  }
}

export default TermsFormContextProvider;

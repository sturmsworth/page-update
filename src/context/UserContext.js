import React, { Component, createContext } from "react";
import { auth, db } from "../constants/firebase";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    userInfo: {
      email: "",
      userType: ""
    },
    messages: [],
    unopenedMessages: false,
    auth: false,
    authObject: null,
    signedIn: false,
    signInError: null,
    applicationSubmitted: false,
    verified: false,
    popup: false,
    adminVerification: null
  };

  setSignInError = error => {
    this.setState({
      ...this.state,
      signInError: error
    });
  };

  handleSignInError = signInError => {
    if (signInError === "auth/invalid-email") {
      return "Please enter a valid email address.";
    } else if (signInError === "auth/user-disabled") {
      return "Your account has been disabled. Please contact system admin.";
    } else if (signInError === "auth/user-not-found") {
      return "Invalid account. Please try again or create an account below.";
    } else if (signInError === "auth/wrong-password") {
      return "Invalid password. Please try again.";
    } else if (signInError === "Please enter an email and password") {
      return "Please enter an email and password";
    } else if (signInError === "auth/too-many-requests") {
      return "Too many login attempts. Please use the 'Forgot Password' link below to reset your password or wait 30 minutes to try again. For additional help please refer to the 'Contact' page for support.";
    } else if ("email not verified") {
      return "You must verify your email address before you can log in, please check your inbox.";
    } else {
      return "Unknown error, please try again later";
    }
  };

  setSignIn = (
    email,
    userType,
    messages,
    unopenedMessages,
    authObject,
    applicationSubmitted,
    verified
  ) => {
    this.setState({
      userInfo: {
        email,
        userType
      },
      messages,
      unopenedMessages,
      auth: true,
      authObject,
      signedIn: true,
      signInError: null,
      applicationSubmitted,
      verified,
      popup: false
    });
  };

  setInitialStateAdminVerification = verification => {
    if (verification) {
      return this.setState({
        ...this.state,
        adminVerification: verification
      });
    } else {
      return null;
    }
  };

  handleSignIn = (
    email,
    password,
    setInitialStateTerms,
    setInitialStateApplicant,
    setInitialStateApplicantErrors,
    setInitialStateGuardian,
    setInitialStateGuardianErrors,
    setInitialStateMisc,
    setInitialStateMiscErrors,
    setInitialStateAttachments,
    setInitialStateFormControl
  ) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() =>
        auth.onAuthStateChanged(authObject => {
          if (authObject.emailVerified) {
            const { email } = authObject;
            const docRef = db.collection("users").doc(email);

            docRef
              .get()
              .then(doc => {
                if (doc.exists) {
                  const {
                    applicationSubmitted,
                    userInfo,
                    messages,
                    unopenedMessages,
                    verified
                  } = doc.data();

                  this.setSignIn(
                    userInfo.email,
                    userInfo.userType,
                    messages,
                    unopenedMessages,
                    authObject,
                    applicationSubmitted,
                    verified
                  );
                } else {
                  docRef
                    .set({
                      userInfo: {
                        email,
                        userType: 0
                      },
                      messages: [],
                      unopenedMessages: false,
                      applicationSubmitted: false,
                      verified: true,
                      forms: {
                        termsForm: {
                          termsOneApplicant: false,
                          termsOneGuardian: false,
                          termsTwoApplicant: false,
                          termsTwoGuardian: false
                        },
                        applicantForm: {
                          applicantPrefix: "",
                          applicantFirstName: "",
                          applicantMiddleName: "",
                          applicantLastName: "",
                          applicantSuffix: "",
                          applicantAddressOne: "",
                          applicantAddressTwo: "",
                          applicantPreferredName: "",
                          applicantCity: "",
                          applicantState: "",
                          applicantZipCode: "",
                          applicantPhoneNumber: "",
                          applicantDOB: "",
                          applicantEmail: "",
                          applicantHouseApply: "",
                          applicantHouseService: "",
                          applicantHouseServiceYear: ""
                        },
                        guardianForm: {
                          guardianOnePrefix: "",
                          guardianOneFirstName: "",
                          guardianOneMiddleName: "",
                          guardianOneLastName: "",
                          guardianOneSuffix: "",
                          guardianOneAddressOne: "",
                          guardianOneAddressTwo: "",
                          guardianOneCity: "",
                          guardianOneState: "",
                          guardianOneZipCode: "",
                          guardianOneTelephoneOne: "",
                          guardianOneTelephoneOneType: "",
                          guardianOneTelephoneTwo: "",
                          guardianOneTelephoneTwoType: "",
                          guardianOneTelephoneThree: "",
                          guardianOneTelephoneThreeType: "",
                          guardianOneEmail: "",
                          guardianTwoPrefix: "",
                          guardianTwoFirstName: "",
                          guardianTwoMiddleName: "",
                          guardianTwoLastName: "",
                          guardianTwoSuffix: "",
                          guardianTwoAddressOne: "",
                          guardianTwoAddressTwo: "",
                          guardianTwoCity: "",
                          guardianTwoState: "",
                          guardianTwoZipCode: "",
                          guardianTwoTelephoneOne: "",
                          guardianTwoTelephoneOneType: "",
                          guardianTwoTelephoneTwo: "",
                          guardianTwoTelephoneTwoType: "",
                          guardianTwoTelephoneThree: "",
                          guardianTwoTelephoneThreeType: "",
                          guardianTwoEmail: ""
                        },
                        miscForm: {
                          miscDistrict: "",
                          miscSchool: "",
                          miscGrade: "",
                          miscGPA: "",
                          miscFamilyService: "",
                          miscFamilyServiceOneName: "",
                          miscFamilyServiceOneYear: "",
                          miscFamilyServiceOneRelation: "",
                          miscFamilyServiceOneBranch: "",
                          miscFamilyServiceTwoName: "",
                          miscFamilyServiceTwoYear: "",
                          miscFamilyServiceTwoRelation: "",
                          miscFamilyServiceTwoBranch: ""
                        }
                      },
                      formErrors: {
                        applicantFormErrors: {
                          applicantPrefix: "Required",
                          applicantFirstName: "Required",
                          applicantMiddleName: null,
                          applicantLastName: "Required",
                          applicantSuffix: null,
                          applicantAddressOne: "Required",
                          applicantAddressTwo: null,
                          applicantPreferredName: null,
                          applicantCity: "Required",
                          applicantState: "Required",
                          applicantZipCode: "Required",
                          applicantPhoneNumber: "Required",
                          applicantDOB: "Required",
                          applicantEmail: "Required",
                          applicantHouseApply: "Required",
                          applicantHouseService: "Required",
                          applicantHouseServiceYear: null,
                          submissionError: null
                        },
                        guardianFormErrors: {
                          guardianOnePrefix: "Required",
                          guardianOneFirstName: "Required",
                          guardianOneMiddleName: null,
                          guardianOneLastName: "Required",
                          guardianOneSuffix: null,
                          guardianOneAddressOne: "Required",
                          guardianOneAddressTwo: null,
                          guardianOneCity: "Required",
                          guardianOneState: "Required",
                          guardianOneZipCode: "Required",
                          guardianOneTelephoneOne: "Required",
                          guardianOneTelephoneOneType: "Required",
                          guardianOneTelephoneTwo: null,
                          guardianOneTelephoneTwoType: null,
                          guardianOneTelephoneThree: null,
                          guardianOneTelephoneThreeType: null,
                          guardianOneEmail: "Required",
                          guardianTwoPrefix: null,
                          guardianTwoFirstName: null,
                          guardianTwoMiddleName: null,
                          guardianTwoLastName: null,
                          guardianTwoSuffix: null,
                          guardianTwoAddressOne: null,
                          guardianTwoAddressTwo: null,
                          guardianTwoCity: null,
                          guardianTwoState: null,
                          guardianTwoZipCode: null,
                          guardianTwoTelephoneOne: null,
                          guardianTwoTelephoneOneType: null,
                          guardianTwoTelephoneTwo: null,
                          guardianTwoTelephoneTwoType: null,
                          guardianTwoTelephoneThree: null,
                          guardianTwoTelephoneThreeType: null,
                          guardianTwoEmail: null,
                          submissionError: null
                        },
                        miscFormErrors: {
                          miscDistrict: "Required",
                          miscSchool: "Required",
                          miscGrade: "Required",
                          miscGPA: "Required",
                          miscFamilyService: "Required",
                          miscFamilyServiceOneName: null,
                          miscFamilyServiceOneYear: null,
                          miscFamilyServiceOneRelation: null,
                          miscFamilyServiceOneBranch: null,
                          miscFamilyServiceTwoName: null,
                          miscFamilyServiceTwoYear: null,
                          miscFamilyServiceTwoRelation: null,
                          miscFamilyServiceTwoBranch: null
                        }
                      },
                      formControl: {
                        termsCompleted: false,
                        applicantFormCompleted: false,
                        guardianFormCompleted: false,
                        miscFormCompleted: false,
                        attachmentsCompleted: false
                      },
                      attachments: {
                        applicantPhoto: null,
                        schoolEndorsement: null,
                        extracurriculars: null,
                        essay: null,
                        recommendations: [],
                        mailRecommendations: null
                      },
                      adminVerification: false
                    })
                    .then(() => {
                      docRef.get().then(doc => {
                        if (doc.exists) {
                          const {
                            applicationSubmitted,
                            userInfo,
                            messages,
                            unopenedMessages,
                            verified
                          } = doc.data();

                          this.setSignIn(
                            userInfo.email,
                            userInfo.userType,
                            messages,
                            unopenedMessages,
                            authObject,
                            applicationSubmitted,
                            verified
                          );
                        }
                      });
                    })
                    .catch(err => console.log(err));
                }
              })
              .then(() => {
                const docRef = db.collection("users").doc(email);
                docRef.get().then(doc => {
                  setInitialStateTerms(doc.data().forms.termsForm);
                  setInitialStateApplicant(doc.data().forms.applicantForm);
                  setInitialStateApplicantErrors(
                    doc.data().formErrors.applicantFormErrors
                  );
                  setInitialStateGuardian(doc.data().forms.guardianForm);
                  setInitialStateGuardianErrors(
                    doc.data().formErrors.guardianFormErrors
                  );
                  setInitialStateMisc(doc.data().forms.miscForm);
                  setInitialStateMiscErrors(
                    doc.data().formErrors.miscFormErrors
                  );
                  setInitialStateAttachments(doc.data().attachments);
                  setInitialStateFormControl(doc.data().formControl);
                  this.setInitialStateAdminVerification(
                    doc.data().adminVerification
                  );
                });
              });
          } else {
            this.setSignInError("email not verified");
          }
        })
      )
      .catch(err => {
        this.setSignInError(err.code);
      });
  };

  setApplicationCompleted = () => {
    this.setState(
      {
        ...this.state,
        applicationSubmitted: true
      },
      () => {
        const batch = db.batch();
        const dbRef = db
          .collection("users")
          .doc(`${this.state.userInfo.email}`);

        batch.update(dbRef, { applicationSubmitted: true });

        batch
          .commit()
          .then(this.handleClosePopup())
          .catch(err => console.log(err));
      }
    );
  };

  setApplicationIncomplete = () => {
    this.setState({
      ...this.state,
      applicationSubmitted: false
    });
  };

  handleOpenPopup = () => {
    this.setState({
      ...this.state,
      popup: true
    });
  };

  handleClosePopup = () => {
    this.setState({
      ...this.state,
      popup: false
    });
  };

  handleAdminSignIn = user => {
    if (user.emailVerified === true) {
      this.setState({
        userInfo: {
          userName: user.displayName,
          email: user.email,
          userType: "ch4c1m1n"
        },
        auth: true,
        authObject: user,
        signedIn: true,
        signInError: null
      });
    }
  };

  handleMemberSignIn = user => {
    if (user.emailVerified === true) {
      const email = user.email;
      const getEmail = email.split("@")[0];
      const testStringTwo = getEmail.slice(8);
      const handleString = testString => {
        return parseInt(testString);
      };

      this.setState({
        userInfo: {
          email: user.email,
          userType: "m3m133r",
          district: handleString(testStringTwo)
        },
        auth: true,
        authObject: user,
        signedIn: true,
        signInError: null
      });
    }
  };

  setSignOut = () => {
    this.setState({
      userInfo: {
        firstName: "",
        lastName: "",
        email: "",
        userType: ""
      },
      messages: [],
      unopenedMessages: false,
      auth: false,
      authObject: null,
      signedIn: false,
      signInError: null,
      applicationSubmitted: false,
      verified: false
    });
  };

  handleSignOut = () => {
    auth.signOut().then(() => this.setSignOut());
  };

  // BEGIN RENDER
  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          handleSignIn: this.handleSignIn,
          setSignInError: this.setSignInError,
          handleSignInError: this.handleSignInError,
          setSignOut: this.setSignOut,
          handleSignOut: this.handleSignOut,
          setApplicationCompleted: this.setApplicationCompleted,
          setApplicationIncomplete: this.setApplicationIncomplete,
          handleOpenPopup: this.handleOpenPopup,
          handleClosePopup: this.handleClosePopup,
          handleAdminSignIn: this.handleAdminSignIn,
          handleMemberSignIn: this.handleMemberSignIn
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;

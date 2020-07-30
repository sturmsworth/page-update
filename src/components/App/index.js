import React, { Component } from "react";
import AppRouter from "../AppRouter";
import UserContextProvider from "../../context/UserContext";
// import FormsContextProvider from "../../context/FormsContext";
import ApplicantFormContextProvider from "../../context/ApplicantFormContext";
import GuardianFormContextProvider from "../../context/GuardianFormContext";
import MiscFormContextProvider from "../../context/MiscFormContext";
import TermsFormContextProvider from "../../context/TermsFormContext";
import FormControlContextProvider from "../../context/FormControlContext";
import StatusContextProvider from "../../context/StatusContext";
import AttachmentsContextProvider from "../../context/AttachmentsContext";
import MessagesContextProvider from "../../context/MessagesContext";

class App extends Component {
  render() {
    return (
      <UserContextProvider>
        {/* <FormsContextProvider> */}
        <StatusContextProvider>
          <MessagesContextProvider>
            <AttachmentsContextProvider>
              <ApplicantFormContextProvider>
                <GuardianFormContextProvider>
                  <MiscFormContextProvider>
                    <TermsFormContextProvider>
                      <FormControlContextProvider>
                        <AppRouter />
                      </FormControlContextProvider>
                    </TermsFormContextProvider>
                  </MiscFormContextProvider>
                </GuardianFormContextProvider>
              </ApplicantFormContextProvider>
            </AttachmentsContextProvider>
          </MessagesContextProvider>
        </StatusContextProvider>
        {/* </FormsContextProvider> */}
      </UserContextProvider>
    );
  }
}

export default App;

// state = {
//   userInfo: {
//     firstName: "",
//     lastName: "",
//     email: "",
//     type: "",
//     setupRequired: false
//   },
//   applicantForm: {
//     applicantPrefix: "",
//     applicantFirstName: "",
//     applicantMiddleName: "",
//     applicantLastName: "",
//     applicantSuffix: "",
//     applicantAddressOne: "",
//     applicantAddressTwo: "",
//     applicantPreferredName: "",
//     applicantCity: "",
//     applicantState: "",
//     applicantZipCode: "",
//     applicantPhoneNumber: "",
//     applicantDOB: "",
//     applicantEmail: "",
//     applicantHouseApply: "",
//     applicantHouseService: "",
//     applicantHouseServiceYear: "",
//     completed: false
//   },
//   guardianForm: {
//     guardianOnePrefix: "",
//     guardianOneFirstName: "",
//     guardianOneMiddleName: "",
//     guardianOneLastName: "",
//     guardianOneSuffix: "",
//     guardianOneAddressOne: "",
//     guardianOneAddressTwo: "",
//     guardianOneCity: "",
//     guardianOneState: "",
//     guardianOneZipCode: "",
//     guardianOneTelephoneOne: "",
//     guaridanOneTelephoneOneType: "",
//     guardianOneTelephoneTwo: "",
//     guaridanOneTelephoneTwoType: "",
//     guardianOneTelephoneThree: "",
//     guaridanOneTelephoneThreeType: "",
//     guardianOneEmail: "",
//     guardianApplicantLocation: "",
//     guardianTwoPrefix: "",
//     guardianTwoFirstName: "",
//     guardianTwoMiddleName: "",
//     guardianTwoLastName: "",
//     guardianTwoSuffix: "",
//     guardianTwoAddressOne: "",
//     guardianTwoAddressTwo: "",
//     guardianTwoCity: "",
//     guardianTwoState: "",
//     guardianTwoZip: "",
//     guardianTwoTelephoneOne: "",
//     guaridanTwoTelephoneOneType: "",
//     guardianTwoTelephoneTwo: "",
//     guaridanTwoTelephoneTwoType: "",
//     guardianTwoTelephoneThree: "",
//     guaridanTwoTelephoneThreeType: "",
//     guardianTwoEmail: "",
//     completed: false
//   },
//   miscForm: {
//     miscDistrict: "",
//     miscSchool: "",
//     miscGrade: "",
//     miscGPA: "",
//     miscFamilyService: "",
//     miscFamilyServiceOneName: "",
//     miscFamilyServiceOneYear: "",
//     miscFamilyServiceOneRelation: "",
//     miscFamilyServiceOneBranch: "",
//     miscFamilyServiceTwoName: "",
//     miscFamilyServiceTwoYear: "",
//     miscFamilyServiceTwoRelation: "",
//     miscFamilyServiceTwoBranch: "",
//     completed: false
//   },
//   attachments: {
//     uploads: [],
//     completed: false
//   },
//   inbox: {
//     messages: [],
//     unopenedMessages: false
//   },
//   progressBar: "",
//   status: "Not yet received",
//   leftToComplete: [],
//   submitted: false,
//   signedIn: false
// };

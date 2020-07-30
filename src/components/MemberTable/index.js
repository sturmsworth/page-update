import React, { Component } from "react";

import { db } from "../../constants/firebase";

import ReactTable from "react-table";
import "react-table/react-table.css";

import Popup from "reactjs-popup";

class MemberTable extends Component {
  state = {
    retrieval: false,
    data: [],
    memberData: [],
    error: "",
    searchTerms: {
      applicantNames: false,
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      district: ""
    },
    popup: false,
    popupTwo: false,
    popupThree: false,
    popupData: {
      recommendations: []
    },
    adminChangeMessages: null
  };

  searchData = (arrayName, query, parameter) => {
    // eslint-disable-next-line
    return arrayName.filter((element, index) => {
      // first name
      const isGuardianFirstNameMatch = element.forms.guardianForm.guardianOneFirstName
        .toLowerCase()
        .includes(query.toLowerCase());
      const isApplicantFirstNameMatch = element.forms.applicantForm.applicantFirstName
        .toLowerCase()
        .includes(query.toLowerCase());

      // last name
      const isGuardianLastNameMatch = element.forms.guardianForm.guardianOneLastName
        .toLowerCase()
        .includes(query.toLowerCase());
      const isApplicantLastNameMatch = element.forms.applicantForm.applicantLastName
        .toLowerCase()
        .includes(query.toLowerCase());

      // email
      const isGuardianEmailMatch = element.forms.guardianForm.guardianOneEmail
        .toLowerCase()
        .includes(query.toLowerCase());
      const isApplicantEmailMatch = element.forms.applicantForm.applicantEmail
        .toLowerCase()
        .includes(query.toLowerCase());
      const isAccountMatch = element.userInfo.email
        .toLowerCase()
        .includes(query.toLowerCase());

      if (parameter === "firstName") {
        return isGuardianFirstNameMatch || isApplicantFirstNameMatch;
      } else if (parameter === "lastName") {
        return isGuardianLastNameMatch || isApplicantLastNameMatch;
      } else if (parameter === "email") {
        return isGuardianEmailMatch || isApplicantEmailMatch || isAccountMatch;
      }
    });
  };

  handleFirstName = e => {
    this.setState({
      ...this.state,
      searchTerms: {
        ...this.state.searchTerms,
        firstName: e.target.value
      }
    });
  };

  handleLastName = e => {
    this.setState({
      ...this.state,
      searchTerms: {
        ...this.state.searchTerms,
        lastName: e.target.value
      }
    });
  };

  handleEmail = e => {
    this.setState({
      ...this.state,
      searchTerms: {
        ...this.state.searchTerms,
        email: e.target.value
      }
    });
  };

  closeModal = () => {
    this.setState({
      popup: false,
      popupTwo: false,
      popupThree: false,
      popupData: {
        recommendations: []
      }
    });
  };

  unlockAndClear = (email, formToClear) => {
    const batch = db.batch();
    const userRef = db.collection("users").doc(email);

    const findItem = this.state.data.find(
      item => item.userInfo.email === email
    );

    const itemIndex = this.state.data.indexOf(findItem);

    const newArray = this.state.data.map(element => {
      return element;
    });

    if (formToClear === "userProfile") {
      findItem.forms.applicantForm = {
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
      };

      findItem.forms.miscForm = {
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
      };

      findItem.forms.miscFormErrors = {
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
      };

      findItem.formErrors.applicantFormErrors = {
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
      };

      findItem.formControl.miscFormCompleted = false;
      findItem.formControl.applicantFormCompleted = false;
      findItem.applicationSubmitted = false;
      findItem.adminVerification = false;

      newArray[itemIndex] = findItem;

      batch.update(userRef, findItem);

      batch.commit().then(() => {
        const index = this.state.data.findIndex(x => x.userInfo.email);
        if (index === -1) {
          this.setState({
            ...this.state,
            adminChangeMessages: "Unable to find that user."
          });
        } else {
          newArray[itemIndex] = findItem;
          this.setState({
            ...this.state,
            data: newArray
          });
        }
      });
    } else if (formToClear === "guardianProfile") {
      findItem.forms.guardianForm = {
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
      };

      findItem.formErrors.guardianFormErrors = {
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
      };

      findItem.formControl.guardianFormCompleted = false;
      findItem.applicationSubmitted = false;
      findItem.adminVerification = false;

      newArray[itemIndex] = findItem;

      batch.update(userRef, findItem);

      batch.commit().then(() => {
        const index = this.state.data.findIndex(x => x.userInfo.email);
        if (index === -1) {
          this.setState({
            ...this.state,
            adminChangeMessages: "Unable to find that user."
          });
        } else {
          newArray[itemIndex] = findItem;
          this.setState({
            ...this.state,
            data: newArray
          });
        }
      });
    } else if (formToClear === "attachments") {
      findItem.attachments = {
        applicantPhoto: null,
        schoolEndorsement: null,
        extracurriculars: null,
        essay: null,
        recommendations: [],
        mailRecommendations: null
      };

      findItem.formControl.attachmentsCompleted = false;
      findItem.applicationSubmitted = false;
      findItem.adminVerification = false;

      newArray[itemIndex] = findItem;

      batch.update(userRef, findItem);

      batch.commit().then(() => {
        const index = this.state.data.findIndex(x => x.userInfo.email);
        if (index === -1) {
          this.setState({
            ...this.state,
            adminChangeMessages: "Unable to find that user."
          });
        } else {
          newArray[itemIndex] = findItem;
          this.setState({
            ...this.state,
            data: newArray
          });
        }
      });
    }
  };

  handleRetrieval = (district, array) => {
    console.log("district: ", district);
    const filteredArray = array.filter(result => {
      return (
        parseInt(result.forms.miscForm.miscDistrict.split("(")[1]) ===
          district && result.adminVerification
      );
    });

    this.setState({
      retrieval: true,
      memberData: filteredArray
    });
  };

  componentDidMount() {
    db.collection("users")
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          return this.setState(prevState => ({
            data: [...prevState.data, doc.data()]
          }));
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      data,
      searchTerms,
      popup,
      popupTwo,
      popupThree,
      popupData,
      adminChangeMessages,
      memberData,
      retrieval
    } = this.state;

    const { district } = this.props;

    const columns = [
      {
        Header: "Applicant Information",
        foldable: true,
        columns: [
          {
            Header: "First Name",
            accessor: "forms.applicantForm.applicantFirstName"
          },
          {
            Header: "Last Name",
            accessor: "forms.applicantForm.applicantLastName"
          },
          {
            Header: "Email",
            accessor: "forms.applicantForm.applicantEmail"
          },
          {
            Header: "Phone Number",
            accessor: "forms.applicantForm.applicantPhoneNumber"
          },
          {
            Header: "Details",
            accessor: "forms.applicantForm.applicantFirstName",
            Cell: row => {
              return (
                <div className="text-center">
                  <span
                    className="text-primary"
                    onClick={() => {
                      this.setState({
                        popup: true,
                        popupData: {
                          recommendations: [],
                          accountEmail: row.original.userInfo.email,
                          image:
                            row.original.attachments.applicantPhoto !== null
                              ? row.original.attachments.applicantPhoto
                              : "",
                          addressOne:
                            row.original.forms.applicantForm
                              .applicantAddressOne,
                          addressTwo:
                            row.original.forms.applicantForm
                              .applicantAddressTwo,
                          city: row.original.forms.applicantForm.applicantCity,
                          dob: row.original.forms.applicantForm.applicantDOB,
                          email:
                            row.original.forms.applicantForm.applicantEmail,
                          firstName:
                            row.original.forms.applicantForm.applicantFirstName,
                          houseApply:
                            row.original.forms.applicantForm
                              .applicantHouseApply,
                          houseService:
                            row.original.forms.applicantForm
                              .applicantHouseService,
                          houseServiceYear:
                            row.original.forms.applicantForm
                              .applicantHouseServiceYear,
                          lastName:
                            row.original.forms.applicantForm.applicantLastName,
                          middleName:
                            row.original.forms.applicantForm
                              .applicantMiddleName,
                          phoneNumber:
                            row.original.forms.applicantForm
                              .applicantPhoneNumber,
                          preferredName:
                            row.original.forms.applicantForm
                              .applicantPreferredName,
                          prefix:
                            row.original.forms.applicantForm.applicantPrefix,
                          state:
                            row.original.forms.applicantForm.applicantState,
                          suffix:
                            row.original.forms.applicantForm.applicantSuffix,
                          zipCode:
                            row.original.forms.applicantForm.applicantZipCode,
                          senator: row.original.forms.miscForm.miscDistrict,
                          school: row.original.forms.miscForm.miscSchool,
                          legacyService:
                            row.original.forms.miscForm.miscFamilyService,
                          serviceOneName:
                            row.original.forms.miscForm
                              .miscFamilyServiceOneName,
                          serviceOneBranch:
                            row.original.forms.miscForm
                              .miscFamilyServiceOneBranch,
                          serviceOneRelation:
                            row.original.forms.miscForm
                              .miscFamilyServiceOneRelation,
                          serviceOneYear:
                            row.original.forms.miscForm
                              .miscFamilyServiceOneYear,
                          serviceTwoName:
                            row.original.forms.miscForm
                              .miscFamilyServiceTwoName,
                          serviceTwoBranch:
                            row.original.forms.miscForm
                              .miscFamilyServiceTwoBranch,
                          serviceTwoRelation:
                            row.original.forms.miscForm
                              .miscFamilyServiceTwoRelation,
                          serviceTwoYear:
                            row.original.forms.miscForm.miscFamilyServiceTwoYear
                        }
                      });
                    }}
                  >
                    View
                  </span>
                  <Popup
                    open={popup}
                    closeOnDocumentClick
                    closeOnEscape
                    onClose={this.closeModal}
                    contentStyle={null}
                    overlayStyle={{ overflow: "scroll" }}
                  >
                    <div className="container card p-5">
                      {/* first row */}
                      <div className="row text-center">
                        <div className="col">
                          <div className="h3">Applicant Profile</div>
                        </div>
                      </div>
                      {/* second row */}
                      <div className="row">
                        {/* column 1 - bio info*/}
                        <div className="col">
                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Prefix:{" "}
                            </span>
                            <span>{popupData.prefix}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              First Name:{" "}
                            </span>
                            <span>{popupData.firstName}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Middle Name:{" "}
                            </span>
                            <span>{popupData.middleName}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Last Name:{" "}
                            </span>
                            <span>{popupData.lastName}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Suffix:{" "}
                            </span>
                            <span>{popupData.suffix}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Preferred Name:{" "}
                            </span>
                            <span>{popupData.preferredName}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">DOB: </span>
                            <span>{popupData.dob}</span>
                          </div>
                        </div>
                        {/* column 2 - profile image */}
                        <div className="col">
                          <div className="row">
                            <div className="col">
                              {popupData.image ? (
                                <div className="image-thumbnail">
                                  <img
                                    alt="profile"
                                    src={popupData.image.url}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              ) : (
                                <div className="card">
                                  <div className="h5 card-img-top text-center pt-5">
                                    <i className="far fa-file-image" />
                                  </div>
                                  <div className="card-body">
                                    <h5 className="card-title text-center">
                                      No uploaded image
                                    </h5>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* row 3 - contact title */}
                      <div className="row pt-5">
                        <div className="col">
                          <div className="h3 text-center">
                            Contact Information
                          </div>
                        </div>
                      </div>
                      {/* row 4 - contact info */}
                      <div className="row">
                        <div className="col">
                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Email:{" "}
                            </span>
                            <span>
                              <a href={`mailto:${popupData.email}`}>
                                {popupData.email}
                              </a>
                            </span>
                          </div>
                        </div>

                        <div className="row pr-3">
                          <div className="col">
                            <span className="font-weight-bold pr-2">
                              Phone Number:
                            </span>
                            <span>{popupData.phoneNumber}</span>
                          </div>
                        </div>
                      </div>

                      {/* row 5 - address title */}
                      <div className="row pt-5">
                        <div className="col">
                          <div className="h3 text-center">Address</div>
                        </div>
                      </div>

                      {/* row 6 - address info */}
                      <div className="row text-center">
                        <div className="col">
                          <div className="row text-center">
                            <div className="col">
                              <div className="">{popupData.addressOne}</div>
                            </div>
                          </div>
                          {popupData.addressTwo ? (
                            <div className="row">
                              <div className="col">
                                <div className="">{popupData.addressOne}</div>
                              </div>
                            </div>
                          ) : null}
                          <div className="row">
                            <div className="col">
                              <div className="">
                                {popupData.city}, {popupData.state}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="">{popupData.zipCode}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* row - 7 Misc. title */}
                      <div className="row pt-5">
                        <div className="col">
                          <div className="h3 text-center">
                            Additional Information
                          </div>
                        </div>
                      </div>

                      {/* row 8 - misc info */}
                      <div className="row justify-content-center">
                        <div className="col">
                          <div className="row justify-content-center">
                            <div className="">
                              <span className="pr-2 font-weight-bold">
                                Senator:
                              </span>
                              {popupData.senator}
                              {popupData.senator &&
                              popupData.addressOne &&
                              popupData.zipCode ? (
                                <span className="px-2">
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://whosmy.virginiageneralassembly.gov/index.php/legislator?search=${popupData.addressOne} ${popupData.zipCode}`}
                                  >
                                    Confirm Selection
                                  </a>
                                </span>
                              ) : null}
                            </div>
                          </div>

                          <div className="row justify-content-center">
                            <div className="">
                              <span className="pr-2 font-weight-bold">
                                School:
                              </span>
                              {popupData.school}
                            </div>
                          </div>

                          <div className="row justify-content-center">
                            <div className="">
                              <span className="pr-2 font-weight-bold">
                                House Application:
                              </span>
                              {popupData.houseApply}
                            </div>
                          </div>

                          <div className="row justify-content-center">
                            <div className="">
                              <span className="pr-2 font-weight-bold">
                                Past House Service:
                              </span>
                              {popupData.houseService}
                            </div>
                          </div>

                          <div className="row justify-content-center">
                            <div className="">
                              <span className="pr-2 font-weight-bold">
                                Year:
                              </span>
                              {popupData.houseServiceYear}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row pt-5 pb-3">
                        <div className="col">
                          <div className="h3 text-center">
                            Legacy Information
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <div className="h5 text-center">Relative One</div>
                          <div>
                            <b>Name:</b> {popupData.serviceOneName}
                          </div>
                          <div>
                            <b>Relation:</b> {popupData.serviceOneRelation}
                          </div>
                          <div>
                            <b>Branch:</b> {popupData.serviceOneBranch}
                          </div>
                          <div>
                            <b>Year:</b> {popupData.serviceOneYear}
                          </div>
                        </div>

                        <div className="col">
                          <div className="h5 text-center">Relative Two</div>
                          <div>
                            <b>Name:</b> {popupData.serviceTwoName}
                          </div>
                          <div>
                            <b>Relation:</b> {popupData.serviceTwoRelation}
                          </div>
                          <div>
                            <b>Branch:</b> {popupData.serviceTwoBranch}
                          </div>
                          <div>
                            <b>Year:</b> {popupData.serviceTwoYear}
                          </div>
                        </div>
                      </div>

                      <div className="row pt-3">
                        <div className="col">
                          <button
                            className="btn btn-danger btn-block"
                            onClick={() => {
                              this.setState({
                                ...this.state,
                                popup: false,
                                popupData: {
                                  recommendations: []
                                }
                              });
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
              );
            }
          }
        ]
      },
      {
        Header: "Guardian Information",
        foldable: true,
        columns: [
          {
            Header: "First Name",
            accessor: "forms.guardianForm.guardianOneFirstName"
          },
          {
            Header: "Last Name",
            accessor: "forms.guardianForm.guardianOneLastName"
          },
          {
            Header: "Email",
            accessor: "forms.guardianForm.guardianOneEmail"
          },
          {
            Header: "Phone Number",
            accessor: "forms.guardianForm.guardianOneTelephoneOne"
          },
          {
            Header: "Details",
            accessor: "forms.guardianForm.guardianOneFirstName",
            Cell: row => {
              return (
                <div className="text-center">
                  <span
                    className="text-primary"
                    onClick={() => {
                      this.setState({
                        popupTwo: true,
                        popupData: {
                          recommendations: [],
                          email: row.original.userInfo.email,
                          guardianOnePrefix:
                            row.original.forms.guardianForm.guardianOnePrefix,
                          guardianOneFirstName:
                            row.original.forms.guardianForm
                              .guardianOneFirstName,
                          guardianOneMiddleName:
                            row.original.forms.guardianForm
                              .guardianOneMiddleName,
                          guardianOneLastName:
                            row.original.forms.guardianForm.guardianOneLastName,
                          guardianOneSuffix:
                            row.original.forms.guardianForm.guardianOneSuffix,
                          guardianOneAddressOne:
                            row.original.forms.guardianForm
                              .guardianOneAddressOne,
                          guardianOneAddressTwo:
                            row.original.forms.guardianForm
                              .guardianOneAddressTwo,
                          guardianOneCity:
                            row.original.forms.guardianForm.guardianOneCity,
                          guardianOneState:
                            row.original.forms.guardianForm.guardianOneState,
                          guardianOneZipCode:
                            row.original.forms.guardianForm.guardianOneZipCode,
                          guardianOneTelephoneOne:
                            row.original.forms.guardianForm
                              .guardianOneTelephoneOne,
                          guardianOneTelephoneOneType:
                            row.original.forms.guardianForm
                              .guardianOneTelephoneOneType,
                          guardianOneTelephoneTwo:
                            row.original.forms.guardianForm
                              .guardianOneTelephoneTwo,
                          guardianOneTelephoneTwoType:
                            row.original.forms.guardianForm
                              .guardianOneTelephoneTwoType,
                          guardianOneTelephoneThree:
                            row.original.forms.guardianForm
                              .guardianOneTelephoneThree,
                          guardianOneTelephoneThreeType:
                            row.original.forms.guardianForm
                              .guardianOneTelephoneThreeType,
                          guardianOneEmail:
                            row.original.forms.guardianForm.guardianOneEmail,
                          guardianTwoPrefix:
                            row.original.forms.guardianForm.guardianTwoPrefix,
                          guardianTwoFirstName:
                            row.original.forms.guardianForm
                              .guardianTwoFirstName,
                          guardianTwoMiddleName:
                            row.original.forms.guardianForm
                              .guardianTwoMiddleName,
                          guardianTwoLastName:
                            row.original.forms.guardianForm.guardianTwoLastName,
                          guardianTwoSuffix:
                            row.original.forms.guardianForm.guardianTwoSuffix,
                          guardianTwoAddressOne:
                            row.original.forms.guardianForm
                              .guardianTwoAddressOne,
                          guardianTwoAddressTwo:
                            row.original.forms.guardianForm
                              .guardianTwoAddressTwo,
                          guardianTwoCity:
                            row.original.forms.guardianForm.guardianTwoCity,
                          guardianTwoState:
                            row.original.forms.guardianForm.guardianTwoState,
                          guardianTwoZipCode:
                            row.original.forms.guardianForm.guardianTwoZipCode,
                          guardianTwoTelephoneOne:
                            row.original.forms.guardianForm
                              .guardianTwoTelephoneOne,
                          guardianTwoTelephoneOneType:
                            row.original.forms.guardianForm
                              .guardianTwoTelephoneOneType,
                          guardianTwoTelephoneTwo:
                            row.original.forms.guardianForm
                              .guardianTwoTelephoneTwo,
                          guardianTwoTelephoneTwoType:
                            row.original.forms.guardianForm
                              .guardianTwoTelephoneTwoType,
                          guardianTwoTelephoneThree:
                            row.original.forms.guardianForm
                              .guardianTwoTelephoneThree,
                          guardianTwoTelephoneThreeType:
                            row.original.forms.guardianForm
                              .guardianTwoTelephoneThreeType,
                          guardianTwoEmail:
                            row.original.forms.guardianForm.guardianTwoEmail
                        }
                      });
                    }}
                  >
                    View
                  </span>
                  <Popup
                    open={popupTwo}
                    closeOnDocumentClick
                    closeOnEscape
                    onClose={this.closeModal}
                    contentStyle={null}
                    overlayStyle={{ overflow: "scroll" }}
                  >
                    <div className="container card p-5">
                      {/* first row */}
                      <div className="row text-center">
                        <div className="col">
                          <div className="h3">Guardian Profile</div>
                        </div>
                      </div>
                      {/* second row */}
                      <div className="row">
                        {/* column 1 - guardian one */}
                        <div className="col">
                          <div className="row">
                            <div className="col h5">Guardian One</div>
                          </div>
                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Prefix:{" "}
                            </span>
                            <span>{popupData.guardianOnePrefix}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              First Name:{" "}
                            </span>
                            <span>{popupData.guardianOneFirstName}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Middle Name:{" "}
                            </span>
                            <span>{popupData.guardianOneMiddleName}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Last Name:{" "}
                            </span>
                            <span>{popupData.guardianOneLastName}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Suffix:{" "}
                            </span>
                            <span>{popupData.guardianOneSuffix}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Address One:{" "}
                            </span>
                            <span>{popupData.guardianOneAddressOne}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Address Two:{" "}
                            </span>
                            <span>{popupData.guardianOneAddressTwo}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              City:{" "}
                            </span>
                            <span>{popupData.guardianOneCity}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              State:{" "}
                            </span>
                            <span>{popupData.guardianOneState}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Zip Code:{" "}
                            </span>
                            <span>{popupData.guardianOneZipCode}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Email:{" "}
                            </span>
                            <span>{popupData.guardianOneEmail}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Primary Phone:{" "}
                            </span>
                            <span>{popupData.guardianOneTelephoneOne}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Secondary Phone:{" "}
                            </span>
                            <span>{popupData.guardianOneTelephoneTwo}</span>
                          </div>

                          <div className="row pl-3">
                            <span className="pr-2 font-weight-bold">
                              Additional Phone:{" "}
                            </span>
                            <span>{popupData.guardianOneTelephoneThree}</span>
                          </div>
                        </div>

                        {/* column 2 - guardian two */}
                        <div className="col">
                          <div className="row">
                            <div className="col">
                              <div className="h5">Guardian Two</div>
                            </div>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Prefix:{" "}
                            </span>
                            <span>{popupData.guardianTwoPrefix}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              First Name:{" "}
                            </span>
                            <span>{popupData.guardianTwoFirstName}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Middle Name:{" "}
                            </span>
                            <span>{popupData.guardianTwoMiddleName}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Last Name:{" "}
                            </span>
                            <span>{popupData.guardianTwoLastName}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Suffix:{" "}
                            </span>
                            <span>{popupData.guardianTwoSuffix}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Address One:{" "}
                            </span>
                            <span>{popupData.guardianTwoAddressOne}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Address Two:{" "}
                            </span>
                            <span>{popupData.guardianTwoAddressTwo}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              City:{" "}
                            </span>
                            <span>{popupData.guardianTwoCity}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              State:{" "}
                            </span>
                            <span>{popupData.guardianTwoState}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Zip Code:{" "}
                            </span>
                            <span>{popupData.guardianTwoZipCode}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Email:{" "}
                            </span>
                            <span>{popupData.guardianTwoEmail}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Primary Phone:{" "}
                            </span>
                            <span>{popupData.guardianTwoTelephoneOne}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Secondary Phone:{" "}
                            </span>
                            <span>{popupData.guardianTwoTelephoneTwo}</span>
                          </div>

                          <div className="row pr-3">
                            <span className="pr-2 font-weight-bold">
                              Additional Phone:{" "}
                            </span>
                            <span>{popupData.guardianTwoTelephoneThree}</span>
                          </div>
                        </div>
                      </div>

                      <div className="row pt-3">
                        <div className="col">
                          <button
                            className="btn btn-danger btn-block"
                            onClick={() => {
                              this.setState({
                                ...this.state,
                                popupTwo: false,
                                popupData: {
                                  recommendations: []
                                }
                              });
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
              );
            }
          }
        ]
      },
      {
        Header: "Attachments",
        foldable: true,
        columns: [
          {
            Header: "Attachments",
            accessor: "formControl.attachmentsCompleted",
            Cell: row => {
              return (
                <div className="text-center">
                  <span
                    className={"text-primary"}
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        popupThree: true,
                        popupData: {
                          email: row.original.userInfo.email,
                          applicantPhotoURL:
                            row.original.attachments.applicantPhoto === null
                              ? null
                              : row.original.attachments.applicantPhoto.url,
                          applicantPhotoName:
                            row.original.attachments.applicantPhoto === null
                              ? null
                              : row.original.attachments.applicantPhoto.name,
                          essayURL:
                            row.original.attachments.essay === null
                              ? null
                              : row.original.attachments.essay.url,
                          essayName:
                            row.original.attachments.essay === null
                              ? null
                              : row.original.attachments.essay.name,
                          extracurricularsURL:
                            row.original.attachments.extracurriculars === null
                              ? null
                              : row.original.attachments.extracurriculars.url,
                          extracurricularsName:
                            row.original.attachments.extracurriculars === null
                              ? null
                              : row.original.attachments.extracurriculars.name,
                          recommendations:
                            row.original.attachments.recommendations,
                          schoolEndorsementURL:
                            row.original.attachments.schoolEndorsement === null
                              ? null
                              : row.original.attachments.schoolEndorsement.url,
                          schoolEndorsementName:
                            row.original.attachments.schoolEndorsement === null
                              ? null
                              : row.original.attachments.schoolEndorsement.name
                        }
                      });
                    }}
                  >
                    View
                  </span>
                  <Popup
                    open={popupThree}
                    closeOnDocumentClick
                    closeOnEscape
                    onClose={this.closeModal}
                    contentStyle={null}
                    overlayStyle={{ overflow: "scroll" }}
                  >
                    <div className="container card p-5">
                      {/* first row */}
                      <div className="row text-center">
                        <div className="col">
                          <div className="h3">Attachments</div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="pr-2 font-weight-bold">
                            Applicant Photo:
                          </span>
                          {popupData.applicantPhotoURL === null ? (
                            <span>No attachment</span>
                          ) : (
                            <span>
                              <a
                                href={popupData.applicantPhotoURL}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {popupData.applicantPhotoName}
                              </a>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="pr-2 font-weight-bold">Essay:</span>
                          {popupData.essayURL === null ? (
                            <span>No attachment</span>
                          ) : (
                            <span>
                              <a
                                href={popupData.essayURL}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {popupData.essayName}
                              </a>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="pr-2 font-weight-bold">
                            Extracurriculars:
                          </span>
                          {popupData.extracurricularsURL === null ? (
                            <span>No attachment</span>
                          ) : (
                            <span>
                              <a
                                href={popupData.extracurricularsURL}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {popupData.extracurricularsName}
                              </a>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="pr-2 font-weight-bold">
                            Recommendations:
                          </span>
                          {popupData.recommendations.length === 0 ? (
                            <span>No attachment</span>
                          ) : (
                            popupData.recommendations.map((rec, index) =>
                              rec ? (
                                <span
                                  className="pr-2"
                                  key={`${rec.name}-${index}`}
                                >
                                  <a
                                    href={rec.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {`${rec.name}`}
                                  </a>
                                  <br />
                                </span>
                              ) : null
                            )
                          )}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="pr-2 font-weight-bold">
                            School Endorsement:
                          </span>
                          {popupData.schoolEndorsementURL === null ? (
                            <span>No attachment</span>
                          ) : (
                            <span>
                              <a
                                href={popupData.schoolEndorsementURL}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {popupData.schoolEndorsementName}
                              </a>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="row pt-3">
                        <div className="col">
                          <button
                            className="btn btn-danger btn-block"
                            onClick={() => {
                              this.setState({
                                ...this.state,
                                popupThree: false,
                                popupData: {
                                  recommendations: []
                                }
                              });
                            }}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
              );
            }
          }
        ]
      }
    ];

    let table;
    let searchData;

    if (searchTerms.firstName) {
      searchData = this.searchData(
        memberData,
        searchTerms.firstName,
        "firstName"
      );
      table = (
        <ReactTable
          data={searchData}
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      );
    } else if (searchTerms.lastName) {
      searchData = this.searchData(
        memberData,
        searchTerms.lastName,
        "lastName"
      );
      table = (
        <ReactTable
          data={searchData}
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      );
    } else if (searchTerms.district) {
      searchData = this.searchData(
        memberData,
        searchTerms.district,
        "district"
      );
      table = (
        <ReactTable
          data={searchData}
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      );
    } else if (searchTerms.email) {
      searchData = this.searchData(memberData, searchTerms.email, "email");
      table = (
        <ReactTable
          data={searchData}
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      );
    } else if (searchTerms.applicantNames) {
      searchData = this.filterOnlyNames();
      table = (
        <ReactTable
          data={searchData}
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      );
    } else if (searchTerms.submitted) {
      searchData = this.filterOnlySubmitted();
      table = (
        <ReactTable
          data={searchData}
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      );
    } else if (data.length === 0) {
      table = (
        <ReactTable
          data={memberData}
          loading
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      );
    } else {
      table = (
        <ReactTable
          data={memberData}
          columns={columns}
          defaultPageSize={25}
          className="-striped -highlight"
        />
      );
    }

    return (
      <div>
        {data.length === 0 ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div>
            {retrieval ? null : (
              <div className="row text-center">
                <div className="col">
                  <button
                    className="btn btn-lg btn-success"
                    onClick={() => this.handleRetrieval(district, data)}
                  >
                    Show Candidates
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {retrieval ? (
          <div className="container-fluid">
            <div className="container py-3 my-3 form-control">
              <div className="row">
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    id="firstNameSearch"
                    placeholder="First Name"
                    value={searchTerms.firstName}
                    onChange={this.handleFirstName}
                  />
                </div>

                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    id="lastNameSearch"
                    placeholder="Last Name"
                    value={searchTerms.lastName}
                    onChange={this.handleLastName}
                  />
                </div>
              </div>

              <div className="row pt-2">
                <div className="col">
                  <input
                    className="form-control"
                    type="text"
                    id="emailSearch"
                    placeholder="Email"
                    value={searchTerms.email}
                    onChange={this.handleEmail}
                  />
                </div>
              </div>
            </div>

            {adminChangeMessages ? (
              <div className="row text-center">
                <div className="col">
                  <span className="text-danger">{adminChangeMessages}</span>
                </div>
              </div>
            ) : null}
            {table}
          </div>
        ) : null}
      </div>
    );
  }
}

export default MemberTable;

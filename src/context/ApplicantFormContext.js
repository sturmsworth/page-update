import React, { Component, createContext } from "react";
import * as Yup from "yup";
import { db } from "../constants/firebase";
import moment from "moment";

export const ApplicantFormContext = createContext();

class ApplicantFormContextProvider extends Component {
  state = {
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
    redirect: false
  };

  // SET STATE ON LOGIN
  // THIS IS FOR PERSISTENCE
  setInitialStateApplicant = formState => {
    if (formState) {
      this.setState({
        ...this.state,
        applicantForm: {
          ...formState
        }
      });
    } else {
      console.log(`no initial applicant state`);
    }
  };

  setInitialStateApplicantErrors = formState => {
    return formState
      ? this.setState({
          ...this.state,
          applicantFormErrors: {
            ...formState
          }
        })
      : console.log(`no initial applicant error state`);
  };

  // PREFIX
  handleApplicantPrefixChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantPrefix: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantPrefix: null
      }
    });

    const schemaShape = {
      applicantPrefix: Yup.string().required("Required")
    };

    const value = {
      applicantPrefix: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantPrefix: err.message
          }
        })
      );
  };

  // FIRST NAME
  handleApplicantFirstNameChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantFirstName: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantFirstName: null
      }
    });

    const schemaShape = {
      applicantFirstName: Yup.string()
        .min(2, "First name must be more than 2 characters")
        .max(20, "First name must be less than 20 characters")
        .required("Required")
    };

    const value = {
      applicantFirstName: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data)
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantFirstName: err.message
          }
        })
      );
  };

  // MIDDLE NAME
  handleApplicantMiddleNameChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantMiddleName: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantMiddleName: null
      }
    });

    const schemaShape = {
      applicantMiddleName: Yup.string()
        .min(2, "Middle name must be more than 2 characters")
        .max(20, "Middle name must be less than 20 characters")
    };

    const value = {
      applicantMiddleName: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
        // console.log(Object.keys(data)[0]);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantMiddleName: err.message
          }
        })
      );
  };

  handleApplicantMiddleNameBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        applicantFormErrors: {
          ...this.state.applicantFormErrors,
          applicantMiddleName: null
        }
      });
    }
  };

  // LAST NAME
  handleApplicantLastNameChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantLastName: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantLastName: null
      }
    });

    const schemaShape = {
      applicantLastName: Yup.string()
        .min(2, "Last name must be more than 2 characters")
        .max(20, "Last name must be less than 20 characters")
        .required("Required")
    };

    const value = {
      applicantLastName: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantLastName: err.message
          }
        })
      );
  };

  // SUFFIX
  handleApplicantSuffixChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantSuffix: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantSuffix: null
      }
    });

    const schemaShape = {
      applicantSuffix: Yup.string()
        .min(2, "Suffix must be at least 2 characters")
        .max(8, "Suffix must be less than 8 characters")
    };

    const value = {
      applicantSuffix: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantSuffix: err.message
          }
        })
      );
  };

  handleApplicantSuffixOnBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        applicantFormErrors: {
          ...this.state.applicantFormErrors,
          applicantSuffix: null
        }
      });
    }
  };

  // ADDRESS ONE
  handleApplicantAddressOneChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantAddressOne: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantAddressOne: null
      }
    });

    const schemaShape = {
      applicantAddressOne: Yup.string()
        .min(5, "Your street address must be at least 5 characters")
        .max(70, "Your street address must be less than 70 characters")
        .required("Street Address is required")
    };

    const value = {
      applicantAddressOne: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantAddressOne: err.message
          }
        })
      );
  };

  // ADDRESS TWO
  handleApplicantAddressTwoChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantAddressTwo: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantAddressTwo: null
      }
    });

    const schemaShape = {
      applicantAddressTwo: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .max(70, "Address must be less than 25 characters")
    };

    const value = {
      applicantAddressTwo: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantAddressTwo: err.message
          }
        })
      );
  };

  handleApplicantAddressTwoOnBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        applicantFormErrors: {
          ...this.state.applicantFormErrors,
          applicantAddressTwo: null
        }
      });
    }
  };

  // PREFERRED NAME
  handleApplicantPreferredNameChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantPreferredName: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantPreferredName: null
      }
    });

    const schemaShape = {
      applicantPreferredName: Yup.string()
        .min(2, "Preferred name must be more than 2 characters")
        .max(20, "Preferred name must be less than 20 characters")
    };

    const value = {
      applicantPreferredName: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantPreferredName: err.message
          }
        })
      );
  };

  handleApplicantPreferredNameOnBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        applicantFormErrors: {
          ...this.state.applicantFormErrors,
          applicantPreferredName: null
        }
      });
    }
  };

  // CITY
  handleApplicantCityChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantCity: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantCity: null
      }
    });

    const schemaShape = {
      applicantCity: Yup.string().required("Required")
    };

    const value = {
      applicantCity: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantCity: err.message
          }
        })
      );
  };

  // STATE
  handleApplicantStateChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantState: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantState: null
      }
    });

    const schemaShape = {
      applicantState: Yup.string()
        .length(
          2,
          "Please write your state in an abbreviated format: VA, DC, MD, etc."
        )
        .required("Required")
    };

    const value = {
      applicantState: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantState: err.message
          }
        })
      );
  };

  // ZIP CODE
  handleApplicantZipCodeChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantZipCode: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantZipCode: null
      }
    });

    const schemaShape = {
      applicantZipCode: Yup.string()
        .length(5, "Zip Code should be 5 characters")
        .required("Required")
    };

    const value = {
      applicantZipCode: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantZipCode: err.message
          }
        })
      );
  };

  // PHONE NUMBER
  handleApplicantPhoneNumberChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantPhoneNumber: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantPhoneNumber: null
      }
    });

    const schemaShape = {
      applicantPhoneNumber: Yup.string()
        .length(13, "Please format phone numbers as follows: (555)555-5555")
        .required("Required")
    };

    const value = {
      applicantPhoneNumber: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantPhoneNumber: err.message
          }
        })
      );
  };

  // DOB
  handleApplicantDOBChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantDOB: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantDOB: null
      }
    });

    const schemaShape = {
      applicantDOB: Yup.string()
        .length(10, "Date should be formatted as such: MM/DD/YYYY")
        .test(
          "check-age",
          "You do not meet the age requirements. You must be either 13 or 14 on the day session starts.",
          value => {
            const sessionStart = moment("1/8/2020", "MM/DD/YYYY");
            const birthday = moment(value, "MM/DD/YYYY");
            const compare = (a, b) => {
              const age = a.diff(b, "years");
              if (age === 13 || age === 14) {
                return true;
              } else {
                return false;
              }
            };
            return compare(sessionStart, birthday);
          }
        )
        .required("Required")
    };

    const value = {
      applicantDOB: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantDOB: err.message
          }
        })
      );
  };

  // EMAIL
  handleApplicantEmailChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantEmail: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantEmail: null
      }
    });

    const schemaShape = {
      applicantEmail: Yup.string()
        .email("Please enter a valid email format")
        .required("Required")
    };

    const value = {
      applicantEmail: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantEmail: err.message
          }
        })
      );
  };

  // HOUSE APPLY
  handleApplicantHouseApplyChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantHouseApply: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantHouseApply: null
      }
    });

    const schemaShape = {
      applicantHouseApply: Yup.string().required("Required")
    };

    const value = {
      applicantHouseApply: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantHouseApply: err.message
          }
        })
      );
  };

  // HOUSE SERVICE
  handleApplicantHouseServiceChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantHouseService: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantHouseService: null
      }
    });

    const schemaShape = {
      applicantHouseService: Yup.string().required("Required")
    };

    const value = {
      applicantHouseService: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantHouseService: err.message
          }
        })
      );
  };

  // HOUSE SERVICE YEAR
  handleApplicantHouseServiceYearChange = e => {
    this.setState({
      ...this.state,
      applicantForm: {
        ...this.state.applicantForm,
        applicantHouseServiceYear: e.target.value
      },
      applicantFormErrors: {
        ...this.state.applicantFormErrors,
        applicantHouseServiceYear: null
      }
    });

    const schemaShape = {
      applicantHouseServiceYear: Yup.string().length(
        4,
        "Please write just the year you served, formatted as such: YYYY"
      )
    };

    const value = {
      applicantHouseServiceYear: e.target.value
    };

    const schema = Yup.object().shape(schemaShape);

    schema
      .validate(value)
      .then(data => {
        // console.log(data);
      })
      .catch(err =>
        this.setState({
          ...this.state,
          applicantFormErrors: {
            ...this.state.applicantFormErrors,
            applicantHouseServiceYear: err.message
          }
        })
      );
  };

  handleApplicantHouseServiceYearBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        applicantFormErrors: {
          ...this.state.applicantFormErrors,
          applicantHouseServiceYear: null
        }
      });
    }
  };

  // SUBMIT
  submitApplicantForm = (email, formState, errorState, formControl) => {
    const userRef = db.collection("users").doc(`${email}`);

    userRef
      .update({
        "forms.applicantForm": {
          ...formState
        },

        "formErrors.applicantFormErrors": {
          ...errorState
        },

        formControl: {
          ...formControl
        }
      })
      .then(() => {
        this.setState({
          ...this.state,
          redirect: true
        });
      })
      .catch(err => console.log(err));
  };

  setApplicantRedirectFalse = () => {
    this.setState({
      ...this.state,
      redirect: false
    });
  };

  render() {
    return (
      <ApplicantFormContext.Provider
        value={{
          ...this.state,
          setInitialStateApplicant: this.setInitialStateApplicant,
          setInitialStateApplicantErrors: this.setInitialStateApplicantErrors,
          handleApplicantPrefixChange: this.handleApplicantPrefixChange,
          handleApplicantFirstNameChange: this.handleApplicantFirstNameChange,
          handleApplicantMiddleNameChange: this.handleApplicantMiddleNameChange,
          handleApplicantMiddleNameBlur: this.handleApplicantMiddleNameBlur,
          handleApplicantLastNameChange: this.handleApplicantLastNameChange,
          handleApplicantSuffixChange: this.handleApplicantSuffixChange,
          handleApplicantSuffixOnBlur: this.handleApplicantSuffixOnBlur,
          handleApplicantAddressOneChange: this.handleApplicantAddressOneChange,
          handleApplicantAddressTwoChange: this.handleApplicantAddressTwoChange,
          handleApplicantAddressTwoOnBlur: this.handleApplicantAddressTwoOnBlur,
          handleApplicantPreferredNameChange: this
            .handleApplicantPreferredNameChange,
          handleApplicantPreferredNameOnBlur: this
            .handleApplicantPreferredNameOnBlur,
          handleApplicantCityChange: this.handleApplicantCityChange,
          handleApplicantStateChange: this.handleApplicantStateChange,
          handleApplicantZipCodeChange: this.handleApplicantZipCodeChange,
          handleApplicantPhoneNumberChange: this
            .handleApplicantPhoneNumberChange,
          handleApplicantDOBChange: this.handleApplicantDOBChange,
          handleApplicantEmailChange: this.handleApplicantEmailChange,
          handleApplicantHouseApplyChange: this.handleApplicantHouseApplyChange,
          handleApplicantHouseServiceChange: this
            .handleApplicantHouseServiceChange,
          handleApplicantHouseServiceYearChange: this
            .handleApplicantHouseServiceYearChange,
          handleApplicantHouseServiceYearBlur: this
            .handleApplicantHouseServiceYearBlur,
          setApplicantRedirectFalse: this.setApplicantRedirectFalse,
          submitApplicantForm: this.submitApplicantForm
        }}
      >
        {this.props.children}
      </ApplicantFormContext.Provider>
    );
  }
}

export default ApplicantFormContextProvider;

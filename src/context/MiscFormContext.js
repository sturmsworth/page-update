import React, { Component, createContext } from "react";
import * as Yup from "yup";
import { db } from "../constants/firebase";

export const MiscFormContext = createContext();

class MiscFormContextProvider extends Component {
  state = {
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
    },
    redirect: false
  };

  // SET STATE ON LOGIN
  // THIS IS FOR PERSISTENCE
  setInitialStateMisc = formState => {
    // console.log(`setInitialStateMisc:`, formState);
    return formState
      ? this.setState({
          ...this.state,
          miscForm: {
            ...formState
          }
        })
      : console.log(`no initial misc form state`);
  };

  setInitialStateMiscErrors = formState => {
    // console.log(`setInitialStateMiscErrors:`, formState);
    return formState
      ? this.setState({
          ...this.state,
          miscFormErrors: {
            ...formState
          }
        })
      : console.log(`no initial misc form errors state`);
  };

  // CHOOSE SENATOR
  handleSenatorSelectChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscDistrict: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscDistrict: null
      }
    });

    const schemaShape = {
      miscDistrict: Yup.string().required("Required")
    };

    const value = {
      miscDistrict: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscDistrict: err.message
          }
        })
      );
  };

  // SCHOOL NAME
  handleSchoolNameChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscSchool: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscSchool: null
      }
    });

    const schemaShape = {
      miscSchool: Yup.string()
        .min(3, "School name must be at least three characters")
        .max(40, "School name may not be more than 40 characters")
        .required("Required")
    };

    const value = {
      miscSchool: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscSchool: err.message
          }
        })
      );
  };

  // GRADE
  handleGradeChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscGrade: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscGrade: null
      }
    });

    const schemaShape = {
      miscGrade: Yup.string()
        .max(2, "Grade may not be more than two numbers. (i.e. 9, 10)")
        .required("Required")
    };

    const value = {
      miscGrade: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscGrade: err.message
          }
        })
      );
  };

  // School GPA
  handleGPAChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscGPA: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscGPA: null
      }
    });

    const schemaShape = {
      miscGPA: Yup.string()
        .min(3, "GPA should be formatted as such: 4.0, 3.75, etc.")
        .max(4, "GPA should be formatted as such: 4.0, 3.75, etc.")
        .required("Required")
    };

    const value = {
      miscGPA: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscGPA: err.message
          }
        })
      );
  };

  // FAMILY SERVICE
  handleFamilyServiceChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyService: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyService: null
      }
    });

    const schemaShape = {
      miscFamilyService: Yup.string().required("Required")
    };

    const value = {
      miscFamilyService: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyService: err.message
          }
        })
      );
  };

  // Family Service Name
  handleFamilyServiceNameOneChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyServiceOneName: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyServiceOneName: null
      }
    });

    const schemaShape = {
      miscFamilyServiceOneName: Yup.string()
        .min(5, "Name must be more than 5 characters")
        .max(40, "Name must be less than 40 characters")
    };

    const value = {
      miscFamilyServiceOneName: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyServiceOneName: err.message
          }
        })
      );
  };

  handleFamilyServiceNameOneBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        miscFormErrors: {
          ...this.state.miscFormErrors,
          miscFamilyServiceOneName: null
        }
      });
    }
  };

  handleFamilyServiceNameTwoChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyServiceTwoName: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyServiceTwoName: null
      }
    });

    const schemaShape = {
      miscFamilyServiceTwoName: Yup.string()
        .min(5, "Name must be more than 5 characters")
        .max(40, "Name must be less than 40 characters")
    };

    const value = {
      miscFamilyServiceTwoName: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyServiceTwoName: err.message
          }
        })
      );
  };

  handleFamilyServiceNameTwoBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        miscFormErrors: {
          ...this.state.miscFormErrors,
          miscFamilyServiceTwoName: null
        }
      });
    }
  };

  // family service year
  handleFamilyServiceYearOneChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyServiceOneYear: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyServiceOneYear: null
      }
    });

    const schemaShape = {
      miscFamilyServiceOneYear: Yup.string().length(
        4,
        "Year should only be four digits. Example: 1980, 2004"
      )
    };

    const value = {
      miscFamilyServiceOneYear: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyServiceOneYear: err.message
          }
        })
      );
  };

  handleFamilyServiceYearOneBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        miscFormErrors: {
          ...this.state.miscFormErrors,
          miscFamilyServiceOneYear: null
        }
      });
    }
  };

  handleFamilyServiceYearTwoChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyServiceTwoYear: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyServiceTwoYear: null
      }
    });

    const schemaShape = {
      miscFamilyServiceTwoYear: Yup.string().length(
        4,
        "Year should only be four digits. Example: 1980, 2004"
      )
    };

    const value = {
      miscFamilyServiceTwoYear: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyServiceTwoYear: err.message
          }
        })
      );
  };

  handleFamilyServiceYearTwoBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        miscFormErrors: {
          ...this.state.miscFormErrors,
          miscFamilyServiceTwoYear: null
        }
      });
    }
  };

  // Family Service Relation
  handleFamilyServiceRelationOneChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyServiceOneRelation: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyServiceOneRelation: null
      }
    });

    const schemaShape = {
      miscFamilyServiceOneRelation: Yup.string()
        .min(3, "Relation must be at least three characters")
        .max(8, "Relation can be no longer than eight characters")
    };

    const value = {
      miscFamilyServiceOneRelation: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyServiceOneRelation: err.message
          }
        })
      );
  };

  handleFamilyServiceRelationOneBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        miscFormErrors: {
          ...this.state.miscFormErrors,
          miscFamilyServiceOneRelation: null
        }
      });
    }
  };

  handleFamilyServiceRelationTwoChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyServiceTwoRelation: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyServiceTwoRelation: null
      }
    });

    const schemaShape = {
      miscFamilyServiceTwoRelation: Yup.string()
        .min(3, "Relation must be at least three characters")
        .max(8, "Relation can be no longer than eight characters")
    };

    const value = {
      miscFamilyServiceTwoRelation: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyServiceTwoRelation: err.message
          }
        })
      );
  };

  handleFamilyServiceRelationTwoBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        miscFormErrors: {
          ...this.state.miscFormErrors,
          miscFamilyServiceTwoRelation: null
        }
      });
    }
  };

  // Choose branch
  handleFamilyServiceBranchOneChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyServiceOneBranch: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyServiceOneBranch: null
      }
    });

    const schemaShape = {
      miscFamilyServiceOneBranch: Yup.string()
    };

    const value = {
      miscFamilyServiceOneBranch: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyServiceOneBranch: err.message
          }
        })
      );
  };

  handleFamilyServiceBranchTwoChange = e => {
    this.setState({
      ...this.state,
      miscForm: {
        ...this.state.miscForm,
        miscFamilyServiceTwoBranch: e.target.value
      },
      miscFormErrors: {
        ...this.state.miscFormErrors,
        miscFamilyServiceTwoBranch: null
      }
    });

    const schemaShape = {
      miscFamilyServiceTwoBranch: Yup.string()
    };

    const value = {
      miscFamilyServiceTwoBranch: e.target.value
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
          miscFormErrors: {
            ...this.state.miscFormErrors,
            miscFamilyServiceTwoBranch: err.message
          }
        })
      );
  };

  setMiscRedirectFalse = () => {
    this.setState({
      ...this.state,
      redirect: false
    });
  };

  // SUBMIT
  submitMiscForm = (email, formState, errorState, formControl) => {
    const userRef = db.collection("users").doc(`${email}`);

    userRef
      .update({
        "forms.miscForm": {
          ...formState
        },
        "formErrors.miscForm": {
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

  // submitMiscForm = (
  //   firstName,
  //   lastName,
  //   formState,
  //   errorState,
  //   formControl
  // ) => {
  //   const batch = db.batch();
  //   const formStateRef = db
  //     .collection("users")
  //     .doc(`${lastName}, ${firstName}`)
  //     .collection("forms")
  //     .doc("miscInformation");
  //   const errorStateRef = db
  //     .collection("users")
  //     .doc(`${lastName}, ${firstName}`)
  //     .collection("forms")
  //     .doc("miscFormErrors");
  //   const formControlRef = db
  //     .collection("users")
  //     .doc(`${lastName}, ${firstName}`)
  //     .collection("forms")
  //     .doc("formControl");

  //   batch.set(formStateRef, { ...formState });
  //   batch.set(errorStateRef, { ...errorState });
  //   batch.set(formControlRef, { ...formControl });

  //   batch
  //     .commit()
  //     .then(() => {
  //       this.setState({
  //         ...this.state,
  //         redirect: true
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <MiscFormContext.Provider
        value={{
          ...this.state,
          setInitialStateMisc: this.setInitialStateMisc,
          setInitialStateMiscErrors: this.setInitialStateMiscErrors,
          handleSenatorSelectChange: this.handleSenatorSelectChange,
          handleSchoolNameChange: this.handleSchoolNameChange,
          handleGradeChange: this.handleGradeChange,
          handleGPAChange: this.handleGPAChange,
          handleFamilyServiceChange: this.handleFamilyServiceChange,
          handleFamilyServiceNameOneChange: this
            .handleFamilyServiceNameOneChange,
          handleFamilyServiceNameTwoChange: this
            .handleFamilyServiceNameTwoChange,
          handleFamilyServiceNameOneBlur: this.handleFamilyServiceNameOneBlur,
          handleFamilyServiceNameTwoBlur: this.handleFamilyServiceNameTwoBlur,
          handleFamilyServiceYearOneChange: this
            .handleFamilyServiceYearOneChange,
          handleFamilyServiceYearTwoChange: this
            .handleFamilyServiceYearTwoChange,
          handleFamilyServiceYearTwoBlur: this.handleFamilyServiceYearTwoBlur,
          handleFamilyServiceYearOneBlur: this.handleFamilyServiceYearOneBlur,
          handleFamilyServiceRelationOneChange: this
            .handleFamilyServiceRelationOneChange,
          handleFamilyServiceRelationTwoChange: this
            .handleFamilyServiceRelationTwoChange,
          handleFamilyServicerelationOneBlur: this
            .handleFamilyServiceRelationOneBlur,
          handleFamilyServiceRelationTwoBlur: this
            .handleFamilyServiceRelationTwoBlur,
          handleFamilyServiceBranchOneChange: this
            .handleFamilyServiceBranchOneChange,
          handleFamilyServiceBranchTwoChange: this
            .handleFamilyServiceBranchTwoChange,
          setMiscRedirectFalse: this.setMiscRedirectFalse,
          submitMiscForm: this.submitMiscForm
        }}
      >
        {this.props.children}
      </MiscFormContext.Provider>
    );
  }
}

export default MiscFormContextProvider;

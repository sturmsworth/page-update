import React, { Component, createContext } from "react";
import * as Yup from "yup";
import { db } from "../constants/firebase";
import moment from "moment";

export const GuardianFormContext = createContext();

class GuardianFormContextProvider extends Component {
  state = {
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
    redirect: false
  };

  // SET STATE ON LOGIN
  // THIS IS FOR PERSISTENCE
  setInitialStateGuardian = formState => {
    // console.log(`setInitialStateGuardian:`, formState);
    return formState
      ? this.setState({
          ...this.state,
          guardianForm: {
            ...formState
          }
        })
      : console.log(`no initial guardian form state`);
  };

  setInitialStateGuardianErrors = formState => {
    // console.log(`setInitialStateGuardianErrors:`, formState);
    return formState
      ? this.setState({
          ...this.state,
          guardianFormErrors: {
            ...formState
          }
        })
      : console.log(`no initial guardian error form state`);
  };

  // GUARDIAN ONE PREFIX
  handleGuardianOnePrefixChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOnePrefix: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOnePrefix: null
      }
    });

    const schemaShape = {
      guardianOnePrefix: Yup.string().required("Required")
    };

    const value = {
      guardianOnePrefix: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOnePrefix: err.message
          }
        })
      );
  };

  // GUARDIAN TWO PREFIX
  handleGuardianTwoPrefixChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoPrefix: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoPrefix: null
      }
    });

    const schemaShape = {
      guardianTwoPrefix: Yup.string()
    };

    const value = {
      guardianTwoPrefix: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoPrefix: err.message
          }
        })
      );
  };

  // GUARDIAN ONE FIRST NAME
  handleGuardianOneFirstNameChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneFirstName: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneFirstName: null
      }
    });

    const schemaShape = {
      guardianOneFirstName: Yup.string()
        .min(2, "First name must be more than 2 characters")
        .max(20, "First name must be less than 20 characters")
        .required("Required")
    };

    const value = {
      guardianOneFirstName: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneFirstName: err.message
          }
        })
      );
  };

  // GUARDIAN TWO FIRST NAME
  handleGuardianTwoFirstNameChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoFirstName: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoFirstName: null
      }
    });

    const schemaShape = {
      guardianTwoFirstName: Yup.string()
        .min(2, "First name must be more than 2 characters")
        .max(20, "First name must be less than 20 characters")
    };

    const value = {
      guardianTwoFirstName: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoFirstName: err.message
          }
        })
      );
  };

  handleGuardianTwoFirstNameBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoFirstName: null
        }
      });
    }
  };

  // GUARDIAN ONE MIDDLE NAME
  handleGuardianOneMiddleNameChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneMiddleName: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneMiddleName: null
      }
    });

    const schemaShape = {
      guardianOneMiddleName: Yup.string()
        .min(2, "Middle name must be more than 2 characters")
        .max(20, "Middle name must be less than 20 characters")
    };

    const value = {
      guardianOneMiddleName: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneMiddleName: err.message
          }
        })
      );
  };

  handleGuardianOneMiddleNameBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianOneMiddleName: null
        }
      });
    }
  };

  // GUARDIAN TWO MIDDLE NAME
  handleGuardianTwoMiddleNameChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoMiddleName: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoMiddleName: null
      }
    });

    const schemaShape = {
      guardianTwoMiddleName: Yup.string()
        .min(2, "Middle name must be more than 2 characters")
        .max(20, "Middle name must be less than 20 characters")
    };

    const value = {
      guardianTwoMiddleName: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoMiddleName: err.message
          }
        })
      );
  };

  handleGuardianTwoMiddleNameBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoMiddleName: null
        }
      });
    }
  };

  // GUARDIAN ONE LAST NAME
  handleGuardianOneLastNameChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneLastName: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneLastName: null
      }
    });

    const schemaShape = {
      guardianOneLastName: Yup.string()
        .min(2, "Last name must be more than 2 characters")
        .max(20, "Last name must be less than 20 characters")
        .required("Required")
    };

    const value = {
      guardianOneLastName: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneLastName: err.message
          }
        })
      );
  };

  // GUARDIAN TWO LAST NAME
  handleGuardianTwoLastNameChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoLastName: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoLastName: null
      }
    });

    const schemaShape = {
      guardianTwoLastName: Yup.string()
        .min(2, "Last name must be more than 2 characters")
        .max(20, "Last name must be less than 20 characters")
    };

    const value = {
      guardianTwoLastName: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoLastName: err.message
          }
        })
      );
  };

  handleGuardianTwoLastNameBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoLastName: null
        }
      });
    }
  };

  // GUARDIAN ONE SUFFIX
  handleGuardianOneSuffixChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneSuffix: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneSuffix: null
      }
    });

    const schemaShape = {
      guardianOneSuffix: Yup.string()
        .min(2, "Suffix must be at least 2 characters")
        .max(8, "Suffix must be less than 8 characters")
    };

    const value = {
      guardianOneSuffix: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneSuffix: err.message
          }
        })
      );
  };

  handleGuardianOneSuffixBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianOneSuffix: null
        }
      });
    }
  };

  // GUARDIAN TWO SUFFIX
  handleGuardianTwoSuffixChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoSuffix: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoSuffix: null
      }
    });

    const schemaShape = {
      guardianTwoSuffix: Yup.string()
        .min(2, "Suffix must be at least 2 characters")
        .max(8, "Suffix must be less than 8 characters")
    };

    const value = {
      guardianTwoSuffix: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoSuffix: err.message
          }
        })
      );
  };

  handleGuardianTwoSuffixBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoSuffix: null
        }
      });
    }
  };

  // GUARDIAN ONE ADDRESS ONE
  handleGuardianOneAddressOneChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneAddressOne: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneAddressOne: null
      }
    });

    const schemaShape = {
      guardianOneAddressOne: Yup.string()
        .min(5, "Your street address must be at least 5 characters")
        .max(70, "Your street address must be less than 70 characters")
        .required("Street Address is required")
    };

    const value = {
      guardianOneAddressOne: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneAddressOne: err.message
          }
        })
      );
  };

  // GUARDIAN TWO ADDRESS ONE
  handleGuardianTwoAddressOneChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoAddressOne: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoAddressOne: null
      }
    });

    const schemaShape = {
      guardianTwoAddressOne: Yup.string()
        .min(5, "Your street address must be at least 5 characters")
        .max(70, "Your street address must be less than 70 characters")
    };

    const value = {
      guardianTwoAddressOne: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoAddressOne: err.message
          }
        })
      );
  };

  handleGuardianTwoAddressOneBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoAddressOne: null
        }
      });
    }
  };

  // GUARDIAN ONE ADDRESS TWO
  handleGuardianOneAddressTwoChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneAddressTwo: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneAddressTwo: null
      }
    });

    const schemaShape = {
      guardianOneAddressTwo: Yup.string()
        .min(5, "Your street address must be at least 5 characters")
        .max(70, "Your street address must be less than 70 characters")
    };

    const value = {
      guardianOneAddressTwo: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneAddressTwo: err.message
          }
        })
      );
  };

  handleGuardianOneAddressTwoBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianOneAddressTwo: null
        }
      });
    }
  };

  // GUARDIAN TWO ADDRESS TWO
  handleGuardianTwoAddressTwoChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoAddressTwo: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoAddressTwo: null
      }
    });

    const schemaShape = {
      guardianTwoAddressTwo: Yup.string()
        .min(5, "Your street address must be at least 5 characters")
        .max(70, "Your street address must be less than 70 characters")
    };

    const value = {
      guardianTwoAddressTwo: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoAddressTwo: err.message
          }
        })
      );
  };

  handleGuardianTwoAddressTwoBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoAddressTwo: null
        }
      });
    }
  };

  // GUARDIAN ONE CITY
  handleGuardianOneCityChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneCity: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneCity: null
      }
    });

    const schemaShape = {
      guardianOneCity: Yup.string().required("Required")
    };

    const value = {
      guardianOneCity: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneCity: err.message
          }
        })
      );
  };

  // GUARDIAN TWO CITY
  handleGuardianTwoCityChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoCity: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoCity: null
      }
    });

    const schemaShape = {
      guardianTwoCity: Yup.string()
    };

    const value = {
      guardianTwoCity: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoCity: err.message
          }
        })
      );
  };

  handleGuardianTwoCityBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoCity: null
        }
      });
    }
  };

  // GUARDIAN ONE STATE
  handleGuardianOneStateChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneState: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneState: null
      }
    });

    const schemaShape = {
      guardianOneState: Yup.string().length(
        2,
        "Please write your state in an abbreviated format: VA, PA, MD, etc."
      )
    };

    const value = {
      guardianOneState: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneState: err.message
          }
        })
      );
  };

  // GUARDIAN TWO STATE
  handleGuardianTwoStateChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoState: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoState: null
      }
    });

    const schemaShape = {
      guardianTwoState: Yup.string().length(
        2,
        "Please write your state in an abbreviated format: VA, PA, MD, etc."
      )
    };

    const value = {
      guardianTwoState: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoState: err.message
          }
        })
      );
  };

  handleGuardianTwoStateBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoState: null
        }
      });
    }
  };

  // GUARDIAN ONE ZIP CODE
  handleGuardianOneZipCodeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneZipCode: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneZipCode: null
      }
    });

    const schemaShape = {
      guardianOneZipCode: Yup.string()
        .length(5, "Zip Code should be 5 characters")
        .required("Required")
    };

    const value = {
      guardianOneZipCode: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneZipCode: err.message
          }
        })
      );
  };

  // GUARDIAN TWO ZIP CODE
  handleGuardianTwoZipCodeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoZipCode: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoZipCode: null
      }
    });

    const schemaShape = {
      guardianTwoZipCode: Yup.string().length(
        5,
        "Zip Code should be 5 characters"
      )
    };

    const value = {
      guardianTwoZipCode: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoZipCode: err.message
          }
        })
      );
  };

  handleGuardianTwoZipCodeBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoZipCode: null
        }
      });
    }
  };

  // GUARDIAN ONE TELEPHONES
  handleGuardianOneTelephoneOneChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneTelephoneOne: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneTelephoneOne: null
      }
    });

    const schemaShape = {
      guardianOneTelephoneOne: Yup.string()
        .length(13, "Please format phone numbers as follows: (555)555-5555")
        .required("Required")
    };

    const value = {
      guardianOneTelephoneOne: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneTelephoneOne: err.message
          }
        })
      );
  };

  handleGuardianOneTelephoneTwoChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneTelephoneTwo: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneTelephoneTwo: null
      }
    });

    const schemaShape = {
      guardianOneTelephoneTwo: Yup.string().length(
        13,
        "Please format phone numbers as follows: (555)555-5555"
      )
    };

    const value = {
      guardianOneTelephoneTwo: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneTelephoneTwo: err.message
          }
        })
      );
  };

  handleGuardianOneTelephoneTwoBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianOneTelephoneTwo: null
        }
      });
    }
  };

  handleGuardianOneTelephoneThreeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneTelephoneThree: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneTelephoneThree: null
      }
    });

    const schemaShape = {
      guardianOneTelephoneThree: Yup.string().length(
        13,
        "Please format phone numbers as follows: (555)555-5555"
      )
    };

    const value = {
      guardianOneTelephoneThree: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneTelephoneThree: err.message
          }
        })
      );
  };

  handleGuardianOneTelephoneOneTypeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneTelephoneOneType: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneTelephoneOneType: null
      }
    });

    const schemaShape = {
      guardianOneTelephoneOneType: Yup.string().required("Required")
    };

    const value = {
      guardianOneTelephoneOneType: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneTelephoneOneType: err.message
          }
        })
      );
  };

  handleGuardianOneTelephoneTwoTypeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneTelephoneTwoType: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneTelephoneTwoType: null
      }
    });
  };

  handleGuardianOneTelephoneThreeTypeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneTelephoneThreeType: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneTelephoneThreeType: null
      }
    });
  };

  handleGuardianOneTelephoneThreeBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianOneTelephoneThree: null
        }
      });
    }
  };

  // GUARDIAN TWO TELEPHONES
  handleGuardianTwoTelephoneOneChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoTelephoneOne: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoTelephoneOne: null
      }
    });

    const schemaShape = {
      guardianTwoTelephoneOne: Yup.string().length(
        13,
        "Please format phone numbers as follows: (555)555-5555"
      )
    };

    const value = {
      guardianTwoTelephoneOne: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoTelephoneOne: err.message
          }
        })
      );
  };

  handleGuardianTwoTelephoneOneBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoTelephoneOne: null
        }
      });
    }
  };

  handleGuardianTwoTelephoneTwoChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoTelephoneTwo: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoTelephoneTwo: null
      }
    });

    const schemaShape = {
      guardianTwoTelephoneTwo: Yup.string().length(
        13,
        "Please format phone numbers as follows: (555)555-5555"
      )
    };

    const value = {
      guardianTwoTelephoneTwo: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoTelephoneTwo: err.message
          }
        })
      );
  };

  handleGuardianTwoTelephoneTwoBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoTelephoneTwo: null
        }
      });
    }
  };

  handleGuardianTwoTelephoneThreeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoTelephoneThree: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoTelephoneThree: null
      }
    });

    const schemaShape = {
      guardianTwoTelephoneThree: Yup.string().length(
        13,
        "Please format phone numbers as follows: (555)555-5555"
      )
    };

    const value = {
      guardianTwoTelephoneThree: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoTelephoneThree: err.message
          }
        })
      );
  };

  handleGuardianTwoTelephoneThreeBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoTelephoneThree: null
        }
      });
    }
  };

  // GUARDIAN ONE EMAIL
  handleGuardianOneEmailChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianOneEmail: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianOneEmail: null
      }
    });

    const schemaShape = {
      guardianOneEmail: Yup.string()
        .email("Please enter a valid email format")
        .required("Required")
    };

    const value = {
      guardianOneEmail: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianOneEmail: err.message
          }
        })
      );
  };

  handleGuardianTwoTelephoneOneTypeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoTelephoneOneType: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoTelephoneOneType: null
      }
    });
  };

  handleGuardianTwoTelephoneTwoTypeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoTelephoneTwoType: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoTelephoneTwoType: null
      }
    });
  };

  handleGuardianTwoTelephoneThreeTypeChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoTelephoneThreeType: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoTelephoneThreeType: null
      }
    });
  };

  // GUARDIAN TWO EMAIL
  handleGuardianTwoEmailChange = e => {
    this.setState({
      ...this.state,
      guardianForm: {
        ...this.state.guardianForm,
        guardianTwoEmail: e.target.value
      },
      guardianFormErrors: {
        ...this.state.guardianFormErrors,
        guardianTwoEmail: null
      }
    });

    const schemaShape = {
      guardianTwoEmail: Yup.string().email("Please enter a valid email format")
    };

    const value = {
      guardianTwoEmail: e.target.value
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
          guardianFormErrors: {
            ...this.state.guardianFormErrors,
            guardianTwoEmail: err.message
          }
        })
      );
  };

  handleGuardianTwoEmailBlur = value => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        guardianFormErrors: {
          ...this.state.guardianFormErrors,
          guardianTwoEmail: null
        }
      });
    }
  };

  // HANDLE SAVE
  handleGuardianFormSave = (firstName, lastName, formState) => {
    const docRef = db.collection(`users`).doc(`${lastName}, ${firstName}`);
    docRef
      .collection("forms")
      .doc("guardianInformation")
      .set(
        {
          ...formState
        },
        { merge: true }
      )
      .then(() => {
        this.setState({
          ...this.state,
          savedMessages: {
            ...this.state.savedMessages,
            guardianFormSavedMessage: `Form saved ${moment().format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}`
          }
        });
      })
      .catch(err => console.log(err));
  };

  setGuardianRedirectFalse = () => {
    this.setState({
      ...this.state,
      redirect: false
    });
  };

  // SUBMIT
  submitGuardianForm = (email, formState, errorState, formControl) => {
    const userRef = db.collection("users").doc(`${email}`);

    userRef
      .update({
        "forms.guardianForm": {
          ...formState
        },
        "formErrors.guardianFormErrors": {
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

  render() {
    return (
      <GuardianFormContext.Provider
        value={{
          ...this.state,
          setInitialStateGuardian: this.setInitialStateGuardian,
          setInitialStateGuardianErrors: this.setInitialStateGuardianErrors,
          handleGuardianOnePrefixChange: this.handleGuardianOnePrefixChange,
          handleGuardianTwoPrefixChange: this.handleGuardianTwoPrefixChange,
          handleGuardianOneFirstNameChange: this
            .handleGuardianOneFirstNameChange,
          handleGuardianTwoFirstNameChange: this
            .handleGuardianTwoFirstNameChange,
          handleGuardianTwoFirstNameBlur: this.handleGuardianTwoFirstNameBlur,
          handleGuardianOneMiddleNameChange: this
            .handleGuardianOneMiddleNameChange,
          handleGuardianTwoMiddleNameChange: this
            .handleGuardianTwoMiddleNameChange,
          handleGuardianOneMiddleNameBlur: this.handleGuardianOneMiddleNameBlur,
          handleGuardianTwoMiddleNameBlur: this.handleGuardianTwoMiddleNameBlur,
          handleGuardianOneLastNameChange: this.handleGuardianOneLastNameChange,
          handleGuardianTwoLastNameChange: this.handleGuardianTwoLastNameChange,
          handleGuardianTwoLastNameBlur: this.handleGuardianTwoLastNameBlur,
          handleGuardianOneSuffixChange: this.handleGuardianOneSuffixChange,
          handleGuardianTwoSuffixChange: this.handleGuardianTwoSuffixChange,
          handleGuardianOneSuffixBlur: this.handleGuardianOneSuffixBlur,
          handleGuardianTwoSuffixBlur: this.handleGuardianTwoSuffixBlur,
          handleGuardianOneAddressOneChange: this
            .handleGuardianOneAddressOneChange,
          handleGuardianTwoAddressOneChange: this
            .handleGuardianTwoAddressOneChange,
          handleGuardianTwoAddressOneBlur: this.handleGuardianTwoAddressOneBlur,
          handleGuardianOneAddressTwoChange: this
            .handleGuardianOneAddressTwoChange,
          handleGuardianTwoAddressTwoChange: this
            .handleGuardianTwoAddressTwoChange,
          handleGuardianOneAddressTwoBlur: this.handleGuardianOneAddressTwoBlur,
          handleGuardianTwoAddressTwoBlur: this.handleGuardianTwoAddressTwoBlur,
          handleGuardianOneCityChange: this.handleGuardianOneCityChange,
          handleGuardianTwoCityChange: this.handleGuardianTwoCityChange,
          handleGuardianTwoCityBlur: this.handleGuardianTwoCityBlur,
          handleGuardianOneZipCodeChange: this.handleGuardianOneZipCodeChange,
          handleGuardianTwoZipCodeChange: this.handleGuardianTwoZipCodeChange,
          handleGuardianTwoZipCodeBlur: this.handleGuardianTwoZipCodeBlur,
          handleGuardianOneStateChange: this.handleGuardianOneStateChange,
          handleGuardianTwoStateChange: this.handleGuardianTwoStateChange,
          handleGuardianTwoStateBlur: this.handleGuardianTwoStateBlur,
          handleGuardianOneTelephoneOneChange: this
            .handleGuardianOneTelephoneOneChange,
          handleGuardianOneTelephoneTwoChange: this
            .handleGuardianOneTelephoneTwoChange,
          handleGuardianOneTelephoneThreeChange: this
            .handleGuardianOneTelephoneThreeChange,
          handleGuardianOneTelephoneTwoBlur: this
            .handleGuardianOneTelephoneTwoBlur,
          handleGuardianOneTelephoneThreeBlur: this
            .handleGuardianOneTelephoneThreeBlur,
          handleGuardianTwoTelephoneOneChange: this
            .handleGuardianTwoTelephoneOneChange,
          handleGuardianTwoTelephoneTwoChange: this
            .handleGuardianTwoTelephoneTwoChange,
          handleGuardianTwoTelephoneThreeChange: this
            .handleGuardianTwoTelephoneThreeChange,
          handleGuardianTwoTelephoneOneBlur: this
            .handleGuardianTwoTelephoneOneBlur,
          handleGuardianTwoTelephoneTwoBlur: this
            .handleGuardianTwoTelephoneTwoBlur,
          handleGuardianTwoTelephoneThreeBlur: this
            .handleGuardianTwoTelephoneThreeBlur,
          handleGuardianOneTelephoneOneTypeChange: this
            .handleGuardianOneTelephoneOneTypeChange,
          handleGuardianOneTelephoneTwoTypeChange: this
            .handleGuardianOneTelephoneTwoTypeChange,
          handleGuardianOneTelephoneThreeTypeChange: this
            .handleGuardianOneTelephoneThreeTypeChange,
          handleGuardianTwoTelephoneOneTypeChange: this
            .handleGuardianTwoTelephoneOneTypeChange,
          handleGuardianTwoTelephoneTwoTypeChange: this
            .handleGuardianTwoTelephoneTwoTypeChange,
          handleGuardianTwoTelephoneThreeTypeChange: this
            .handleGuardianTwoTelephoneThreeTypeChange,
          handleGuardianOneEmailChange: this.handleGuardianOneEmailChange,
          handleGuardianTwoEmailChange: this.handleGuardianTwoEmailChange,
          handleGuardianTwoEmailBlur: this.handleGuardianTwoEmailBlur,
          //   setGuardianFormCompleted: this.setGuardianFormCompleted,
          handleGuardianFormSave: this.handleGuardianFormSave,
          setGuardianRedirectFalse: this.setGuardianRedirectFalse,
          submitGuardianForm: this.submitGuardianForm
        }}
      >
        {this.props.children}
      </GuardianFormContext.Provider>
    );
  }
}

export default GuardianFormContextProvider;

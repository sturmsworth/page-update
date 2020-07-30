import * as Yup from "yup";
import moment from "moment";

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .lowercase()
    .required("Required"),
  password: Yup.string().min(8, "")
});

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .lowercase()
    .required("Required"),
  firstName: Yup.string()
    .min(2, "Names must be at least two characters")
    .max(20, "Names must be under 20 characters")
    .trim()
    .lowercase()
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Names must be at least two characters")
    .max(20, "Names must be under 20 characters")
    .trim()
    .lowercase()
    .required("Required"),
  password: Yup.string()
    .min(
      8,
      "Passwords require a minimum of 8 characters and must contain at least one number"
    )
    .max(
      20,
      "Passwords can only be up to 20 characters and must contain at least one number"
    )
    .required("Required"),
  passwordCompare: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match!")
    .required("Required")
});

export const forgotPassword = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .lowercase()
    .required("Required")
});

export const applicantInformationSchemaShape = Yup.object().shape({
  applicantPrefix: Yup.string().required("Required"),
  applicantFirstName: Yup.string()
    .min(2, "First name must be more than 2 characters")
    .max(20, "First name must be less than 20 characters")
    .required("Required"),
  applicantMiddleName: Yup.string()
    .min(2, "Middle name must be more than 2 characters")
    .max(20, "Middle name must be less than 20 characters")
    .matches("", null),
  applicantLastName: Yup.string()
    .min(2, "Last name must be more than 2 characters")
    .max(20, "Last name must be less than 20 characters")
    .required("Required"),
  applicantSuffix: Yup.string()
    .min(1, "Suffix must be more than 1 character")
    .max(20, "Suffix must be less than 8 characters"),
  applicantPreferredName: Yup.string()
    .min(2, "Preferred name must be more than 2 characters")
    .max(20, "Preferred name must be less than 20 characters"),
  applicantAddressOne: Yup.string()
    .min(5, "Your street address must be at least 5 characters")
    .max(70, "Your street address must be less than 70 characters")
    .required("Street Address is required"),
  applicantAddressTwo: Yup.string()
    .min(5, "Address must be at least 5 characters")
    .max(70, "Address must be less than 25 characters"),
  applicantCity: Yup.string().required("Required"),
  applicantState: Yup.string()
    .length(
      2,
      "Please write your state in an abbreviated format: VA, DC, MD, etc."
    )
    .required("Required"),
  applicantZipCode: Yup.string()
    .length(5, "Zip Code should be 5 characters")
    .required("Required"),
  applicantPhoneNumber: Yup.string()
    .length(13, "Please format phone numbers as follows: (555)555-5555")
    .required("Required"),
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
    .required("Required"),
  applicantEmail: Yup.string()
    .email("Please enter a valid email format")
    .required("Required"),
  applicantHouseApply: Yup.string().required("Required"),
  applicantHouseService: Yup.string().required("Required"),
  applicantHouseServiceYear: Yup.string().length(
    4,
    "Please write just the year you served, formatted as such: YYYY"
  )
});

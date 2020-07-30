import React from "react";

const columns = () => {
  const setter = [
    {
      Header: "Account",
      foldable: true,
      columns: [
        {
          Header: "Email",
          accessor: "userInfo.email",
          Cell: row => {
            return (
              <span>
                <a href={`mailto:${row.value}`}>{row.value}</a>
              </span>
            );
          }
        }
      ]
    },
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
          Header: "Profile",
          accessor: "forms.applicantForm.applicantFirstName",
          Cell: row => {
            return (
              <div>
                <span
                  className="text-primary"
                  onClick={() => {
                    showApplicantProfile();
                  }}
                >
                  View Profile
                </span>
              </div>
            );
          }
        }
      ]
    }
  ];
  return setter;
};

export { columns };

import React, { Component, createContext } from "react";
import { db } from "../constants/firebase";

export const AttachmentsContext = createContext();

class AttachmentsContextProvider extends Component {
  state = {
    attachments: {
      applicantPhoto: null,
      schoolEndorsement: null,
      extracurriculars: null,
      essay: null,
      recommendations: [],
      mailRecommendations: false
    },
    recommendationsError: null,
    redirect: false,
    uploadingMessage: null
  };

  // SET STATE ON LOGIN
  // THIS IS FOR PERSISTENCE
  setInitialStateAttachments = formState => {
    return formState
      ? this.setState({
          ...this.state,
          attachments: {
            ...formState
          }
        })
      : console.log("no initial attachment state");
  };

  // APPLICANT PHOTO
  setApplicantPhoto = (file, url) => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        applicantPhoto: {
          name: file.name,
          lastModified: file.lastModified,
          type: file.type,
          size: file.size,
          url
        }
      }
    });
  };

  removeApplicantPhoto = () => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        applicantPhoto: null
      }
    });
  };

  // SCHOOL ENDORSEMENT
  setSchoolEndorsement = (file, url) => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        schoolEndorsement: {
          name: file.name,
          lastModified: file.lastModified,
          type: file.type,
          size: file.size,
          url
        }
      }
    });
  };

  removeSchoolEndorsement = () => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        schoolEndorsement: null
      }
    });
  };

  // EXTRACURRICULARS
  setExtracurriculars = (file, url) => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        extracurriculars: {
          name: file.name,
          lastModified: file.lastModified,
          type: file.type,
          size: file.size,
          url
        }
      }
    });
  };

  removeExtracurriculars = () => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        extracurriculars: null
      }
    });
  };

  // ESSAY
  setEssay = (file, url) => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        essay: {
          name: file.name,
          lastModified: file.lastModified,
          type: file.type,
          size: file.size,
          url
        }
      }
    });
  };

  removeEssay = () => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        essay: null
      }
    });
  };

  // RECOMMENDATIONS
  setLettersOfRecommendation = (file, url) => {
    if (this.state.attachments.recommendations.length < 2) {
      this.setState(prevState => ({
        ...this.state,
        attachments: {
          ...this.state.attachments,
          recommendations: [
            ...prevState.attachments.recommendations,
            {
              name: file.name,
              lastModified: file.lastModified,
              type: file.type,
              size: file.size,
              url
            }
          ]
        }
      }));
    } else {
      this.setState({
        ...this.state,
        recommendationsError:
          "Too many recommendations. Please delete some to add more."
      });
    }
  };

  findLetterOfRecommendation = i => {
    return this.state.attachments.recommendations[i];
  };

  removeLetterOfRecommendation = i => {
    this.setState(prevState => {
      const filteredLetters = this.state.attachments.recommendations.filter(
        (item, index) => i !== index
      );

      return {
        ...this.state,
        attachments: {
          ...this.state.attachments,
          recommendations: filteredLetters
        }
      };
    });
  };

  removeAllLettersOfRecommendation = () => {
    this.setState({
      ...this.state,
      attachments: {
        ...this.state.attachments,
        recommendations: []
      }
    });
  };

  removeAllAttachments = () => {
    this.setState({
      attachments: {
        applicantPhoto: null,
        schoolEndorsement: null,
        extracurriculars: null,
        essay: null,
        recommendations: [],
        mailRecommendations: false
      },
      redirect: false,
      uploadingMessage: null
    });
  };

  pushAttachmentData = email => {
    const batch = db.batch();
    const dbRef = db.collection("users").doc(email);

    batch.update(dbRef, {
      attachments: {
        ...this.state.attachments
      }
    });

    batch.commit().catch(err => console.log(err));
  };

  setAttachmentsRedirectTrue = () => {
    this.setState({
      ...this.state,
      redirect: true
    });
  };

  setAttachmentsRedirectFalse = () => {
    this.setState({
      ...this.state,
      redirect: false
    });
  };

  render() {
    return (
      <AttachmentsContext.Provider
        value={{
          ...this.state,
          setInitialStateAttachments: this.setInitialStateAttachments,
          setApplicantPhoto: this.setApplicantPhoto,
          removeApplicantPhoto: this.removeApplicantPhoto,
          setSchoolEndorsement: this.setSchoolEndorsement,
          removeSchoolEndorsement: this.removeSchoolEndorsement,
          setExtracurriculars: this.setExtracurriculars,
          removeExtracurriculars: this.removeExtracurriculars,
          setEssay: this.setEssay,
          removeEssay: this.removeEssay,
          setLettersOfRecommendation: this.setLettersOfRecommendation,
          findLetterOfRecommendation: this.findLetterOfRecommendation,
          removeLetterOfRecommendation: this.removeLetterOfRecommendation,
          removeAllLettersOfRecommendation: this
            .removeAllLettersOfRecommendation,
          pushAttachmentData: this.pushAttachmentData,
          setAttachmentsRedirectTrue: this.setAttachmentsRedirectTrue,
          setAttachmentsRedirectFalse: this.setAttachmentsRedirectFalse
        }}
      >
        {this.props.children}
      </AttachmentsContext.Provider>
    );
  }
}

export default AttachmentsContextProvider;

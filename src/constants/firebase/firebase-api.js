import firebase from "firebase";
import { auth, firestore, storage, storageRef } from "./index";

// constants
import * as stuff from "../../constants/mails";

// admin
export const initiateAdminLogin = (signIn, setState) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      if (result) {
        const user = result.user;
        if (
          user.email === stuff.SIS ||
          user.email === stuff.ltrumbo ||
          user.email === stuff.bfinch ||
          user.email === stuff.jpalmore ||
          user.email === stuff.mhorch ||
          user.email === stuff.psturman ||
          user.email === stuff.rramsey ||
          user.email === stuff.sschaar ||
          user.email === stuff.pinfo
        ) {
          setState(null);
          signIn(user);
        } else {
          setState(`You do not have permission to access these features.`);
          auth.signOut();
        }
      }
    })
    .catch((err) => console.log(err));
};

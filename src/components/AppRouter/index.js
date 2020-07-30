import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "../NavBar";
import Landing from "../../views/Landing";
import Account from "../../views/Account";
import CreateAccount from "../../views/CreateAccount";
import SignIn from "../../views/SignIn";
import Footer from "../Footer";
import RegistrationSuccess from "../../views/RegistrationSuccess";
import EmailVerificationSuccess from "../../views/EmailVerificationSuccess";
import TermsOne from "../../views/TermsOne";
import TermsTwo from "../../views/TermsTwo";
import ApplicantInformation from "../../views/ApplicantInformation";
import GuardianInformation from "../../views/GuardianInformation";
import MiscInformation from "../../views/MiscInformation";
import Attachments from "../../views/Attachments";
import * as ROUTES from "../../constants/routes";
import About from "../../views/About";
import Contact from "../../views/Contact";
import ManageAccount from "../../views/ManageAccount";
import PasswordReset from "../../views/PasswordReset";
import Admin from "../../views/Admin";
import Members from "../../views/Members";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <NavBar />
      <div>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={Admin} />
        <Route path={ROUTES.CONTACT} component={Contact} />
        <Route path={ROUTES.CREATE_ACCOUNT} component={CreateAccount} />
        <Route path={ROUTES.MANAGE_ACCOUNT} component={ManageAccount} />
        <Route path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route
          path={ROUTES.REGISTRATION_SUCCESS}
          component={RegistrationSuccess}
        />
        <Route
          path={ROUTES.EMAIL_VERIFICATION_SUCCESS}
          component={EmailVerificationSuccess}
        />
        <Route path={ROUTES.TERMS_ONE} component={TermsOne} />
        <Route path={ROUTES.TERMS_TWO} component={TermsTwo} />
        <Route
          path={ROUTES.APPLICANT_INFORMATION}
          component={ApplicantInformation}
        />
        <Route
          path={ROUTES.GUARDIAN_INFORMATION}
          component={GuardianInformation}
        />
        <Route path={ROUTES.MISC_INFORMATION} component={MiscInformation} />
        <Route path={ROUTES.ATTACHMENTS} component={Attachments} />
        <Route path={ROUTES.MEMBERS} component={Members} />
      </div>
      <Footer />
    </BrowserRouter>
  </div>
);

export default AppRouter;

// import React, { Component } from "react";
// // import * as Yup from "yup";
// import { /* db, */ auth } from "../../constants/firebase";

// class ManageAccountCard extends Component {
//   state = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     initiatePasswordReset: false,
//     error: null,
//     redirect: false
//   };

//   trackFirstName = e => {
//     this.setState({
//       ...this.state,
//       firstName: e.target.value.trim()
//     });
//   };

//   trackLastName = e => {
//     this.setState({
//       ...this.state,
//       lastName: e.target.value.trim()
//     });
//   };

//   trackEmail = e => {
//     this.setState(
//       {
//         ...this.state,
//         email: e.target.value.trim()
//       },
//       console.log(this.state.email)
//     );
//   };

//   initiatePasswordReset = state => {
//     const actionCodeSettings = {
//       url: `https://apps.senate.virginia.gov/page-application/`,
//       handleCodeInApp: true
//     };
//     auth
//       .sendPasswordResetEmail(state, actionCodeSettings)
//       .then(() => {
//         this.setState({
//           redirect: true
//         });
//       })
//       .catch(err =>
//         this.setState({
//           ...this.state,
//           error: err.message
//         })
//       );
//   };

//   confirmEdits = state => {
//     const user = auth.currentUser;
//     const usersName = auth.currentUser.displayName;
//     const userNameSplit = usersName.split(" ");
//     const userFirstName = userNameSplit[0];
//     const userLastName = userNameSplit[1];

//     if (state.firstName && state.lastName) {
//       user
//         .updateProfile({
//           displayName: `${state.firstName} ${state.lastName}`
//         })
//         .then(() => {
//           console.log(user);
//           this.setState({ ...this.state, redirect: true });
//         })
//         .catch(err => this.setState({ ...this.state, error: err.message }));
//     } else if (state.firstName && state.lastName === "") {
//       console.log("first name only", state);
//     } else if (state.firstName === "" && state.lastName) {
//       console.log("last name only", state);
//     } else {
//       console.log("please make sure you're filling things out");
//     }
//   };

//   render() {
//     return (
//       <section id="about-us">
//         <div className="container">
//           <div className="card">
//             <div className="card-body">
//               <div className="card-title">
//                 <p className="h3">Edit Account</p>
//               </div>
//               <div className="card-body">
//                 <form>
//                   <input
//                     type="text"
//                     id="edit-first-name"
//                     placeholder="First Name"
//                     value={this.state.firstName}
//                     onChange={this.trackFirstName}
//                   />

//                   <input
//                     type="text"
//                     id="edit-last-name"
//                     placeholder="Last Name"
//                     value={this.state.lastName}
//                     onChange={this.trackLastName}
//                   />

//                   {/* <input
//                     type="email"
//                     id="edit-email"
//                     placeholder="email"
//                     value={this.state.email}
//                     onChange={this.trackEmail}
//                   /> */}
//                 </form>
//                 <button onClick={() => this.confirmEdits(this.state)}>
//                   Confirm Edits
//                 </button>

//                 <div className="row">
//                   <div className="col">
//                     <h3>Initiate Password Reset</h3>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col">
//                     <p>
//                       Initiating a password reset will sign you out of the
//                       account. For your own security please enter your verified
//                       email below, then check your email for instructions on how
//                       to reset your password.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col">
//                     <input
//                       type="email"
//                       id="confirm-email-reset"
//                       placeholder="Confirm Email Address"
//                       onChange={this.trackEmail}
//                     />
//                     {this.state.error !== "" ? (
//                       <div className="h3 text-danger">{this.state.error}</div>
//                     ) : null}
//                     <button
//                       onClick={() =>
//                         this.initiatePasswordReset(this.state.email)
//                       }
//                     >
//                       Initiate Password Change
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default ManageAccountCard;

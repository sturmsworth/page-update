import React from "react";

const DisplayMessages = () => (
  <section className="display-messages pb-5">
    <div className="card text-center">
      <div className="card-header">Messages</div>
      <div className="card-body">
        <h5 className="card-title">You have no new messages at this time.</h5>
        <button className="btn custom-buttons">View Messages</button>
      </div>
    </div>
  </section>
);

export default DisplayMessages;

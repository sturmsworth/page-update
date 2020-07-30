import React from "react";
import { customDivStyles } from "../../styles";

const ContactCard = () => {
  return (
    <section id="Contact">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <p className="h3" style={customDivStyles.titles}>
                CONTACT
              </p>
            </div>
            <div className="card-body">
              <div className="container">
                <div className="row text-center py-5">
                  <div className="col-lg-6 col-sm-12">
                    <a
                      className="contact-styles float-right mx-5"
                      href="mailto:pageinfo@senate.virginia.gov?subject=General Questions"
                    >
                      <i className="far fa-envelope fa-7x" />
                    </a>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <a
                      href="tel:+18046987470"
                      className="contact-styles float-left mx-5"
                    >
                      <i className="fas fa-phone fa-7x" />
                    </a>
                  </div>
                </div>
              </div>

              <p className="h5 py-3" style={customDivStyles.titles}>
                PROBLEMS WITH OUR APPLICATION?
              </p>
              <p className="h5 py-2">
                Please forward any questions, comments, or concerns to{" "}
                <a href="mailto:pageinfo@senate.virginia.gov?subject=Page Application">
                  pageinfo@senate.virginia.gov
                </a>
              </p>
              <p className="h5 py-2">
                We can be reached Moday - Friday 8:30 AM - 5:00 PM via telephone
                at <a href="tel:+18046987470">(804)698-7470</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;

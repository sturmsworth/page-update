import React from "react";
import { customDivStyles } from "../../styles";

const AboutCard = () => {
  return (
    <section id="about-us">
      <div className="container pt-5 pb-5 mt-5 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="card-title text-center">
              <p className="h3" style={customDivStyles.titles}>
                ABOUT US
              </p>
            </div>
            <div className="card-body text-left">
              <div className="row">
                <div className="col">
                  <h5 style={customDivStyles.titles}>
                    SENATE PAGE LEADERSHIP PROGRAM
                  </h5>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p>
                    The Senate Page Leadership Program is structured similar to
                    a college preparatory program with components centered on
                    developing future leaders. Students who receive admission to
                    the program carry on the tradition of page service in the
                    legislature while fulfilling requirements in a professional
                    development track comprised of speakers, site visits and
                    classroom-like instruction.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h5 style={customDivStyles.titles}>
                    THE PROGRAM IS STRUCTURED AROUND THREE PRIMARY COMPONENTS:
                  </h5>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <ul>
                    <li>
                      <b>The Responsible Young Professional:</b> Each Senate
                      Page will be tasked with various job assignments such as
                      staffing committee meetings (in a backup clerk capacity),
                      answering telephone calls, providing basic concierge
                      services and speaking to the public or visiting
                      delegations about their experience and role in the
                      legislative process. Assignments are delegated to the page
                      class using a team approach with an emphasis on
                      exceptional standards of service.
                    </li>
                    <li>
                      <b>The Evolving Leader:</b> The class will engage in team
                      building scenarios designed to practice leadership skills.
                      Our professional development track centers on topics
                      relevant to young adults today. In addition to meeting
                      elected officials, we engage the class in sessions
                      pertaining to etiquette, money management, cyber bullying
                      and life after the page leadership program.
                    </li>
                    <li>
                      <b>The Civic-Minded Young Adult:</b> Senate Page service
                      extends beyond the confines of Capitol Square. Each class
                      is required to complete a community service project as a
                      team. The program partners with a local non-profit group
                      that serves approximately three-dozen counties across the
                      Commonwealth.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p>
                    The program capstone is a mock legislative session, a
                    one-hour debate in which the class will demonstrate what
                    they learned about the legislative process. Pages switch
                    roles with legislators to openly debates topics on which
                    they voted in mock committee. Legislators serve the mock
                    floor session in a page-like capacity.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p>
                    For additional information, or if you have any questions,
                    please call toll-free at{" "}
                    <a href="tel:+18888926948">(888) 892-6948</a> or{" "}
                    <a href="tel:+18046987410">(804) 698-7410</a>, or you can
                    e-mail us at:{" "}
                    <a href="mailto:pageinfo@senate.virginia.gov?subject=Page Application">
                      pageinfo@senate.virginia.gov
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;

import React from "react";

const UndetectedBrowser = () => {
  return (
    <div className="container text-center justify-content-center">
      <div className="row">
        <div className="col">
          <div className="h5">
            Welcome to the Senate of Virginia Page Application. Unfortunately,
            we cannot detect your browser type. Please talk with your system
            administrator and adjust your privacy options then try again. If
            you're using an unsupported browser type make sure to download one
            of them from the options below.
          </div>
          <div className="h5">
            Please download Chrome, Firefox, or Safari and use that browser to
            access and continue your application process.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="pt-2">
            <a href="https://www.google.com/chrome/">
              <button className="btn btn-lg btn-outline-secondary">
                <i className="fab fa-chrome pr-2"></i>Chrome
              </button>
            </a>
          </div>
          <div className="pt-2">
            <a href="https://www.mozilla.org/en-US/firefox/new/">
              <button className="btn btn-lg btn-outline-secondary">
                <i className="fab fa-firefox pr-2"></i>Firefox
              </button>
            </a>
          </div>
          <div className="pt-2">
            <a href="https://support.apple.com/downloads/safari">
              <button className="btn btn-lg btn-outline-secondary">
                <i className="fab fa-safari pr-2"></i>Safari
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UndetectedBrowser;

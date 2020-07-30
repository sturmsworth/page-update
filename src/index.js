import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { detect } from "detect-browser";

import App from "./components/App";
import DownloadPrompt from "./components/DownloadPrompt";
import UndetectedBrowser from "./components/UndetectedBrowser";

const checkBrowser = () => {
  const browser = detect();
  const checkEm = browser => {
    if (
      browser.name === "firefox" ||
      browser.name === "chrome" ||
      browser.name === "safari"
    ) {
      ReactDOM.render(<App />, document.getElementById("root"));
    } else {
      ReactDOM.render(<DownloadPrompt />, document.getElementById("root"));
    }
  };

  browser
    ? checkEm(browser)
    : ReactDOM.render(<UndetectedBrowser />, document.getElementById("root"));
};

checkBrowser();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";

import "./Masthead.css";

export default class Masthead extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">{this.props.children}</div>
          </div>
        </div>
      </header>
    );
  }
}

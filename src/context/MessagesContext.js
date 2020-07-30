import React, { Component, createContext } from "react";

export const MessagesContext = createContext();

class MessagesContextProvider extends Component {
  state = {
    userInfo: {
      firstName: "",
      lastName: "",
      email: "",
      userType: ""
    },
    messages: {}
  };
  render() {
    return (
      <MessagesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </MessagesContext.Provider>
    );
  }
}

export default MessagesContextProvider;

import React from "react";

const PanelContainer = ({ col, content }) => (
  <div className={`${col}`}>{content}</div>
);

export default PanelContainer;

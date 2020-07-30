import React from "react";

const StatusComponent = ({ status, type }) => {
  if (type === "error") {
    return (
      <div className="form-group col text-center">
        <h5 className="text-danger">{status}</h5>
      </div>
    );
  } else if (type === "saved") {
    return (
      <div className="form-group col text-center">
        <h5 className="text-success">{status}</h5>
      </div>
    );
  } else {
    return null;
  }
};

export default StatusComponent;

import React from "react";
import { Link } from "react-router-dom";

const FormDashboardButton = ({
  featured,
  title,
  text,
  buttonTitle,
  link,
  completedStep,
  buttonHandler,
  locked
}) => {
  // const formsControlContext = useContext
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mx-2 my-1">
          <div className="card-header">{featured}</div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text px-2">{text}</p>
            {completedStep ? (
              locked ? (
                <button className="btn btn-disabled" onClick={null}>
                  Application Locked
                </button>
              ) : (
                <button className="btn btn-secondary" onClick={buttonHandler}>
                  Open to Editing
                </button>
              )
            ) : (
              <Link to={link} className="btn custom-buttons">
                {buttonTitle}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDashboardButton;

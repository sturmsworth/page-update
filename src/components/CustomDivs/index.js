import React from "react";

import { customDivStyles } from "../../styles";

const CustomDivs = builders => {
  return (
    <div id="about">
      {builders.map((builder, index) => {
        if (index % 2 === 0) {
          return (
            <div className="m-5 pt-5 pb-5 row animated fadeIn" key={index}>
              <div className="col-lg-4 col-sm-12">
                <img
                  src={builder.src}
                  alt={builder.alt}
                  title={builder.title}
                  className="img-thumbnail"
                />
              </div>
              <div className="col-lg-8 col-sm-12">
                <h3 style={customDivStyles.titles}>
                  {builder.contentTitle.toUpperCase()}
                </h3>
                <h5 style={customDivStyles.content}>{builder.content}</h5>
              </div>
            </div>
          );
        } else {
          return (
            <div className="m-5 pt-5 pb-5 row animated fadeIn" key={index}>
              <div className="col-lg-8 col-sm-12 text-right">
                <h3 style={customDivStyles.titles}>
                  {builder.contentTitle.toUpperCase()}
                </h3>
                <h5 style={customDivStyles.content}>{builder.content}</h5>
              </div>
              <div className="col-lg-4 col-sm-12">
                <img
                  src={builder.src}
                  alt={builder.alt}
                  title={builder.alt}
                  className="img-thumbnail"
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CustomDivs;

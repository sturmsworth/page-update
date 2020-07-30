import React from "react";

import CustomDivs from "../../components/CustomDivs";

import { landingDivBuilders } from "../../constants/builders";

const AboutDivs = () => (
  <div className="container">{CustomDivs(landingDivBuilders)}</div>
);

export default AboutDivs;

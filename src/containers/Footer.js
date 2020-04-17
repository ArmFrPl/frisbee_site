import React from "react";
import Intro from "./Intro";
import Office from "./Office";
import Connect from "./Connect";
import Contact from "./Contact";

class Footer extends React.Component {
  render() {
    return <div className="footer">
      <Intro></Intro>
      <Office></Office>
      <Connect></Connect>
      <Contact></Contact>
    </div>;
  }
}

export default Footer;
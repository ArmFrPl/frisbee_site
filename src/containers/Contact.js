import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobileAlt} from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  render() {
    return <div>
      <h4>Contact</h4>
      <p>
        <FontAwesomeIcon icon={faMobileAlt} />
        &nbsp;37493763963
        </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;armnuff@gmail.com
      </p>
    </div>;
  }
}

export default Contact;
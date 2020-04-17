import React from "react";

import {faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SocialLinks extends React.Component {
  render() {
    return <div className="social">
      <ul className="social-soc">
        <li><a href="https://www.facebook.com/Armfrisbee/"><FontAwesomeIcon className="social_buttons" icon={faFacebook} /></a></li>
        <li><a href="https://www.instagram.com/ultimate_armenia/"><FontAwesomeIcon className="social_buttons" icon={faInstagram} /></a></li>
        <li><a href="https://www.youtube.com/channel/UCP3G6qKYG3z1gGaGU-jKGNw"><FontAwesomeIcon className="social_buttons" icon={faYoutube} /></a></li>
      </ul>
    </div>;
  }
}

export default SocialLinks;

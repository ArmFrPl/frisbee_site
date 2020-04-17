import React from "react";
import {Link} from "react-router-dom";
import SocialLinks from "./SocialLinks.js";

class Header extends React.Component {
  render() {
    return <header className="header">
      <Link to={'/'} className="navbar-brand logo">
        <img src="/images/afdfLogo.png" alt="afdf logo" />
      </Link>
      <p className="logo_text">Armenian National Frisbee Federation</p>
      <SocialLinks/>
    </header>;
  }
}

export default Header;
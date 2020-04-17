import React from "react";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return <nav className="navbar sticky-top navbar-expand-lg navbar-light nav-fill w-100">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/contactUs">Contact Us</NavLink>
              <NavLink className="dropdown-item" to="/about">About Ultimate</NavLink>
              <NavLink className="dropdown-item" to="/aboutUs">About Armenian Ultimate</NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Events
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <NavLink className="dropdown-item" to="/tournaments">Tournament Schedule</NavLink>
              <NavLink className="dropdown-item" to="/camps">Camps</NavLink>
              <NavLink className="dropdown-item" to="/learnToPlay">Learn to Play</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shop">Shop</NavLink>
          </li>
        </ul>
      </div>
    </nav>;
  }

}

export default Navbar;
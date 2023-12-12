import React, { useEffect } from "react";
import "./Navbar.css";
import starsbackground from "../../assets/starsbackground.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const {highlight} = props

  return (
    <>
      <div id="starsbackground_div">
        <img
          alt='starsbackground_image'
          draggable="false"
          style={{userSelect:"none"}}
          src={starsbackground}
          id="starsbackground_image"
        />
      </div>
      <div id="navbar_master">
        <div id="color_bubble"></div>
        <Link style={highlight === "home" ? { color: "white" } : {}}  className="navbar_links" to='/'>Home</Link>
        <Link style={highlight === "education" ? { color: "white" } : {}}  className="navbar_links" to='/education'>Education</Link>
        <Link style={highlight === "experience" ? { color: "white" } : {}}  className="navbar_links" to='/experience'>Experience</Link>
        <Link style={highlight === "contact" ? { color: "white" } : {}} className="navbar_links" to='/contact'>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;

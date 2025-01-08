import "./Footer.css";
import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/SVG/Home.svg";
import VectorIcon from "../../assets/SVG/Vector.svg";
import ProfileIcon from "../../assets/SVG/Profile.svg";
import "./Footer.css";
import BookMarkIcon from "../../assets/SVG/bookMark.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <NavLink to="/home" className="home-icon">
          <img src={HomeIcon} alt="Home" />
        </NavLink>
        <NavLink to={"/bookmarks"} className="bookmark-icon">
          <img src={BookMarkIcon} alt="Bookmarks" />
        </NavLink>
        <div className="vector-icon">
          <img src={VectorIcon} alt="Vector" />
        </div>
        <div className="profile-icon">
          <img src={ProfileIcon} alt="Profile" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

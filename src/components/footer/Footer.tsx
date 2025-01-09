import "./Footer.css";
import React from "react";
import { NavLink } from "react-router-dom";

import VectorIcon from "../../assets/SVG/Vector.svg";
import ProfileIcon from "../../assets/SVG/Profile.svg";
import "./Footer.css";

import NavHomeIcon from "../../assets/SVG/navHomeIcon";
import BookmarkIcon from "../../assets/SVG/BookmarkIcon";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <NavLink to="/home" className="home-icon">
          <div className="icon-box home-active">
            {" "}
            <NavHomeIcon />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to="/bookmarks" className="bookmark-icon">
          <div className="icon-box bookmark-active">
            {" "}
            <BookmarkIcon />
            <p className="bookmarks-text">Bookmarks</p>
          </div>
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

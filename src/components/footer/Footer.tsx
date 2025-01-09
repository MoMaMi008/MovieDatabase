import "./Footer.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DefaultHomeIcon from "../../assets/SVG/Home.svg";
import VectorIcon from "../../assets/SVG/Vector.svg";
import ProfileIcon from "../../assets/SVG/Profile.svg";
import "./Footer.css";
import BookMarkIcon from "../../assets/SVG/bookMark.svg";
import HomeIcon from "../../assets/SVG/homered.svg";

const Footer: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === "/home";

    return (
        <footer className="footer">
            <div className="footer-icons">
                <Link to="/home" className="home-icon">
                    <img src={isHome ? HomeIcon : DefaultHomeIcon} alt="Home" />
                </Link>
                <div className="bookmark-icon">
                    <Link to="/bookmarks">
                        <img src={BookMarkIcon} alt="Bookmarks" />
                    </Link>
                </div>
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

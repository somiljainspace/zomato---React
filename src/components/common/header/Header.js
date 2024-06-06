import React from "react";
import "./header.css";
import { FaLocationDot } from "react-icons/fa6";
import { BiCaretDown } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSolidChevronDown } from "react-icons/bi";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <FaLocationDot className="absolute-center location-icon" />
              <div>Banglore</div>
            </div>
            <BiCaretDown className="absolute-center" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <BiSearchAlt2 className="absolute-center search-icon" />
            <input
              placeholder="Search for restaurents, cusine or dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/cb2/ab8f8365caebab29192757b6f5e51cb2.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="header-profile-image"
          />
          <span className="header-username">Jessica</span>
          <BiSolidChevronDown className="absolute-center profile-options-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;

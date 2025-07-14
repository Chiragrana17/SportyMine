import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <nav className="navbar">
      <div className="nav-right">
        <Link to="/">
          <img className="logoimg" src="/logo2.jpg" alt="Logo" />
        </Link>{" "}
      </div>{" "}
      <div className="nav-left">
        <ul className="nav-links">
          <li>
            <Link to="/"> Home </Link>{" "}
          </li>{" "}
          <li
            onMouseEnter={() => setDropdownOpen("about")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            About Us▾{" "}
            {dropdownOpen === "about" && (
              <ul className="dropdown">
                <li>
                  <Link to="/mission"> What we do </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/welcome"> Welcome </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/team"> Team </Link>{" "}
                </li>{" "}
              </ul>
            )}{" "}
          </li>{" "}
          <li
            onMouseEnter={() => setDropdownOpen("school")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            School▾{" "}
            {dropdownOpen === "school" && (
              <ul className="dropdown">
                <li>
                  <Link to="/programs"> Programs </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/activities"> Activities </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/events"> Events </Link>{" "}
                </li>{" "}
              </ul>
            )}{" "}
          </li>{" "}
          <li
            onMouseEnter={() => setDropdownOpen("parents")}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            Need Help▾{" "}
            {dropdownOpen === "parents" && (
              <ul className="dropdown">
                <li>
                  <Link to="/faq"> FAQs </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/feedback"> Feedback </Link>{" "}
                </li>{" "}
              </ul>
            )}{" "}
          </li>{" "}
          <li>
            <Link to="/contact"> Contact Us </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;

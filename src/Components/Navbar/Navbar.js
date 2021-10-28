import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const moveToDiv = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light navpadding">
        <Link clLinkssName="navbar-brand">Crowin Dentistry</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => moveToDiv("about")}
                to="/"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => moveToDiv("staff")}
                to="/"
              >
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => moveToDiv("Services")}
                to="/"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => moveToDiv("Patient-Info")}
                to="/"
              >
                Patient Info
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => moveToDiv("Contact")}
                to="/"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => moveToDiv("COVID-19")}
                to="/"
              >
                Our COVID-19 Policy
              </Link>
            </li>
          </ul>
          <Link to="/login">
            <button className="loginbtn">Login</button>
          </Link>
        </div>
      </nav>
      <div className="linewith"></div>
    </>
  );
};

export default Navbar;

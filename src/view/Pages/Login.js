import { Link } from "@mui/material";
import React from "react";
import "./Pages.css";
const Login = () => {
  return (
    <div className="loginpage">
      <div className="titlesection">
        <h4 style={{ paddingBottom: "40px" }} className="login_tittle">
          Crowin Dentistry
        </h4>
        <h5 className="loginbrand">Login</h5>
        <p style={{ paddingBottom: "30px" }} className="loginp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
          hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
          sagittis, non sed libero. At scelerisque ac rhoncus.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div style={{ paddingBottom: "130px" }} className="loginput">
            <div style={{ marginBottom: "20px" }}>
              <input
                className="logwidth"
                type="text"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                style={{ marginTop: "0" }}
                className="logwidth"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="logfoot">
            <Link to="/registertion">
              <h6 className="registr">Register instead?</h6>
            </Link>
            <Link to="/dashboard">
              <button className="btnlog" type="submit">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

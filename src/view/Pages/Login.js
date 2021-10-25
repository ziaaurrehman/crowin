import React from "react";
import "./Pages.css";
const Login = () => {
  return (
    <div className="loginpage">
      <div className="titlesection">
        <h4 className="login_tittle">Crowin Dentistry</h4>
        <h5 className="loginbrand">Login</h5>
        <p className="loginp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
          hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
          sagittis, non sed libero. At scelerisque ac rhoncus.
        </p>
        <form>
          <div className="loginput">
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
            <h6 className="registr">Register instead?</h6>

            <button className="btnlog" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

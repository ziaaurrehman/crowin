import React from "react";

const Registertion = () => {
  return (
    <div style={{ background: "#ffffff", height: "100vh" }}>
      <div className="loginpage" style={{ padding: "55px" }}>
        <div className="titlesection">
          <h4 className="login_tittle">Crowin Dentistry</h4>
          <h5 className="loginbrand">Login</h5>
          <p className="loginp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
            sagittis, non sed libero. At scelerisque ac rhoncus.
          </p>
          <form>
            <div style={{ paddingBottom: "20px" }}>
              <input className="logwi" type="text" placeholder="First Name" />
              <input
                style={{ marginLeft: "18px" }}
                className="logwi"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="loginput hhhp" style={{ paddingBottom: "0" }}>
              <div className="margin">
                <input
                  className="logwidth"
                  type="text"
                  placeholder="Email address"
                />
              </div>
              {/* <div>
                <input
                  className="logwidth"
                  type="text"
                  placeholder="Password"
                />
              </div> */}
              <div style={{ marginBottom: "20px" }}>
                <input className="logwi" type="text" placeholder="Password" />
                <input
                  style={{ marginLeft: "18px" }}
                  className="logwi"
                  type="text"
                  placeholder="Confrim Password"
                />
              </div>
            </div>
            <div className="loginput" style={{ paddingBottom: "30px" }}>
              <div style={{ marginBottom: "20px" }}>
                <input className="logwidth" type="text" placeholder="Mobile" />
              </div>
              <div>
                <input
                  className="logwidth"
                  type="text"
                  placeholder="Date of Birth"
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
    </div>
  );
};

export default Registertion;

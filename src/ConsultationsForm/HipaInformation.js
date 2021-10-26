import React from "react";
import Header from "./Header";
import Hipamodal from "./Hipamodal";

const HipaInformation = ({ step, setStep }) => {
  return (
    <div className="hipadiv">
      <div className="titlesection">
        <h4 className="login_tittle">Crowin Dentistry</h4>
        <h5 className="loginbrand">Appointment</h5>
        <p className="loginapp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
          hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
          sagittis, non sed libero. At scelerisque ac rhoncus.
        </p>
      </div>
      <Header step={step} />
      <div style={{ width: "100%" }} className="form-group form-check checkdiv">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label
          style={{ width: "100%" }}
          className="form-check-label labeltext"
          htmlFor="exampleCheck1"
        >
          I agree to the <span className="bluetag">HIPPA form</span> terms and
          condtions.
        </label>
      </div>
      <div
        style={{ paddingTop: "0", width: "100%" }}
        className="form-group form-check checkdiv "
      >
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label labeltext" htmlFor="exampleCheck1">
          I agree to the <span className="bluetag">Release of Information</span>
          terms and condtions.
        </label>
      </div>
      <div style={{ paddingTop: "160px" }} className="consultfooter hipafooter">
        <button className="previous" onClick={() => setStep(2)}>
          Previous
        </button>
        <a href="/hipa-modal">
          {" "}
          <button className="nextbtn" onClick={() => <Hipamodal />}>
            Next
          </button>
        </a>
      </div>
    </div>
  );
};

export default HipaInformation;

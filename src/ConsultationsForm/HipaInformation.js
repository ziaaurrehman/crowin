import React from "react";

const HipaInformation = () => {
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
      <div className="stapperheadting">
        <button className="ptbtn">Patient registration</button>
        <button className="historybtn">Medical history</button>
        <button className="conditionbtn">Medical condition</button>
        <button className="hipabtn">HIPPA form & Release of information</button>
      </div>
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
        <button className="previous">Previous</button>
        <button className="nextbtn">Next</button>
      </div>
    </div>
  );
};

export default HipaInformation;

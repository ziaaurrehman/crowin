import React from "react";
import "./Consultation.css";
const MedicalConditions = () => {
  return (
    <div className="condition">
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
      <div className="Medicaltitle">Medical condition</div>
      <select id="inputState" class="form-control ddd">
        <option selected>Select your Medical conditions</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <textarea className="comment_area">Comment</textarea>
      <div className="consultfooter">
        <button className="previous">Previous</button>
        <button className="nextbtn">Next</button>
      </div>
    </div>
  );
};

export default MedicalConditions;

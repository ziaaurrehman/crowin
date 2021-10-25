import React from "react";
import "./Consultation.css";
const Hipaagrement = () => {
  return (
    <div className="hipa-agrement">
      <div className="patientregistration">
        <div className="titlesection">
          <h4 className="login_tittle">Crowin Dentistry</h4>
          <h5 className="loginbrand">Appointment</h5>
          <p className="loginapp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            hendrerit diam pretium tristique pretium sit est eget. Nunc, lacus,
            sagittis, non sed libero. At scelerisque ac rhoncus.
          </p>
        </div>
      </div>
      <div className="hipadetails">
        <img src="/imgs/hippaimage.png" />
        <div className="hipatittle">Done</div>
        <div className="hippapara">
          Your Medical Profile has been submitted successfully! You can now
          visit the clinic for physical examination.
        </div>
        <button className="okbtn">OK</button>
      </div>
    </div>
  );
};

export default Hipaagrement;

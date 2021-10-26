import React from "react";
import "./Consultation.css";
const Header = ({ step }) => {
  console.log(step);
  return (
    <>
      <div className="stapperheadting">
        <button className={step === 0 ? "ptbtn active1" : "ptbtn"}>
          Patient registration
        </button>
        <button className={step === 1 ? "historybtn active1" : "historybtn"}>
          Medical history
        </button>
        <button
          className={step === 2 ? "conditionbtn active1" : "conditionbtn"}
        >
          Medical condition
        </button>
        <button className={step === 3 ? "hipabtn active1" : "hipabtn"}>
          HIPPA form & Release of information
        </button>
      </div>
    </>
  );
};

export default Header;

import React from "react";

const Patient = () => {
  const data = [
    {
      image: "/imgs/patientR.png",
    },
    {
      image: "/imgs/history.png",
    },
    {
      image: "/imgs/hipa.png",
    },
    {
      image: "/imgs/information.png",
    },
  ];
  return (
    <div className="patient" id="Patient-Info">
      <div className="patienttextarea">
        <h3 className="patient_heading">Patient Information</h3>
        <p className="headingp">
          Below, you can find and print patient registration forms to bring with
          you to your appointment to be seen more quickly.
        </p>
      </div>
      <div className="patientflex">
        {data.map((el) => {
          return (
            <div className="patientimg">
              <img src={el.image}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Patient;

import React from "react";

const Policy = () => {
  return (
    <div className="policy">
      <div className="policyimg">
        <img src="/imgs/policyimg.png"></img>
      </div>
      <div className="policytext">
        <h3 className="poicy_tittle">Our COVID-19 Policy</h3>
        <p className="policypp">
          During the COVID-19 pandemic, we ask that our patients follow these
          policies to ensure the safety for other patients and our staff.
        </p>
        <p className="policyp">
          Please wait in your car instead of the waiting room until someone
          comes out to get you.<br></br> A staff member will call you and ask
          screening questions to ensure you are healthy and able to keep your
          appointment.<br></br>
          Please bring and wear a mask. If you don’t have one, one will be
          provided for you.<br></br> If you have a driver, we ask that the
          driver waits in the car until your appointment is done.
          <br></br>If you are a parent and your child has an appointment please
          wait in the car during their appointment.A staff member will come and
          get your child for his or her appointment.
          <br></br> Our appointments are scheduled staggered to ensure that
          patients will not overlap and you will not have to overlap with other
          patients.
        </p>
      </div>
    </div>
  );
};

export default Policy;

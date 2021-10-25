import React from "react";
import "./Consultation.css";
const PatientRegistration = () => {
  return (
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
      <div className="stapperheadting">
        <button className="ptbtn">Patient registration</button>
        <button className="historybtn">Medical history</button>
        <button className="conditionbtn">Medical condition</button>
        <button className="hipabtn">HIPPA form & Release of information</button>
      </div>
      <div className="personls">
        <h6 className="personl_tittle">Personal details</h6>

        <div className="form-row">
          <div style={{ marginBottom: "15px" }} className="col">
            <input
              type="text"
              className="form-control ddd"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <select id="inputState" class="form-control ddd">
              <option selected>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control ddd"
            id="formGroupExampleInput"
            placeholder="Date of Birth"
          />
        </div>
        <div className="form-row">
          <div style={{ marginBottom: "15px" }} className="col">
            <input
              type="text"
              className="form-control ddd"
              placeholder="Height"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control ddd"
              placeholder="Weight"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control ddd"
            id="formGroupExampleInput"
            placeholder="Blood group"
          />
        </div>
      </div>
      <div className="addrsdetails">
        <h6 className="adrestittle">Address details</h6>
        <div className="form-group ddd">
          <input
            type="text"
            className="form-control ddd"
            id="formGroupExampleInput"
            placeholder="Address"
          />
        </div>
        <div className="form-row">
          <div style={{ marginBottom: "15px" }} className="col">
            <input
              type="text"
              className="form-control ddd"
              placeholder="Zip Code"
            />
          </div>
          <div className="col">
            <select id="inputState" class="form-control ddd  ">
              <option selected>Country</option>
              <option>Pakistan</option>
              <option>India</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <select id="inputState" class="form-control ddd">
              <option selected>State</option>
              <option>Pakistan</option>
              <option>India</option>
              <option>Usa</option>
            </select>
          </div>
          <div className="col">
            <select id="inputState" class="form-control ddd">
              <option selected>City</option>
              <option>Lahore</option>
              <option>Karachi</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;

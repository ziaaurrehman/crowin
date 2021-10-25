import React from "react";

const Tecnology = () => {
  return (
    <div className="tecnology">
      <div className="tecnologydiv">
        <h2 className="tecnoheading">
          Offering The Latest in Dental Technology
        </h2>
        <p className="tecnopara">
          Dentistry is an amazing field of healthcare that utilizes many types
          of technology. As the digital world continues to expand, so does the
          technology we use in our office. Here at Corwin Family Dentistry, we
          embrace advance technology so you get back to your life with a proud
          smile. Waiting two weeks for your crown, bridge or veneers is now a
          thing of the past. Instead you can get same day crowns, veneers and
          bridges.<br></br>
          <br></br>
          At Corwin Family Dentistry, Doctor Dave and his staff are here to
          serve you and provide you with the care you deserve. Whether it’s
          virtually painless anesthetic administration or crowns in one visit,
          we work hard to exceed your expectations. Appointments are scheduled
          in a timely matter, and we strive to see you on time.
        </p>
      </div>
      <div className="tecnoimgs">
        <img src="/imgs/mechine.png"></img>

        <div className="twobtn">
          <button className="crown">Same day crowns</button>
          <button
            style={{ marginLeft: "10px", width: "190px" }}
            className="crown"
          >
            Laser cavity technology
          </button>
        </div>
        <div className="twobtn">
          <button className="crown">Cleaning & sealants</button>
          <button
            style={{ width: "100px", marginLeft: "10px" }}
            className="crown"
          >
            Root canals
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tecnology;

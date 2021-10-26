import React from "react";

const Hipamodal = () => {
  return (
    <div className="hipamodal">
      <div className="modaldata">
        <h6 className="modal_tittle">HIPPA agreement</h6>
        <p className="datemodal">Updated 01 May, 2021.</p>
        <p className="firstpara">
          Informed Consent of Services Performed by Crowin Dentistry
        </p>
        <p className="modalp">
          Telemedicine involves the use of electronic communications to enable
          healthcare providers at different locations to share individual
          patient medical information for the prurpose of improving patient
          care. Providers may include primary care practitioners, specialists,
          and/or sub-specialists. The information may be used for diagnosis,
          therapy, follow-up and/or education, and may include any of the
          following:
          <br></br>
          <br></br>
          <span className="space">:</span>Patient medical records.<br></br>{" "}
          <span className="space">:</span> Medical images.
          <br></br> <span className="space">:</span>Live two-way audio and video
          <br></br> <span className="space">:</span> Output data from medical
          devices and sound and video files.<br></br>{" "}
          <span className="space">:</span>
          Electronic systems used will incorporate network and software security
          protocols to protext the
        </p>
        <div style={{ textAlign: "center" }}>
          <button style={{ marginLeft: "0" }} className="okbtn">
            OK
          </button>
        </div>
      </div>
      <div className="modalimg">
        <img src="/imgs/mdimg.png" />
      </div>
    </div>
  );
};

export default Hipamodal;

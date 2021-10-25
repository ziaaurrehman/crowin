import React from "react";

const MedicalHistory = () => {
  return (
    <div className="medicalhistory">
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
      <div className="points">
        <div className="pointsp">Are you under a physician’s care now?</div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div
            style={{ paddingRight: "55px", marginTop: "25px" }}
            className="form-check"
          >
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div style={{ marginTop: "25px" }} className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div style={{ marginTop: "25px" }} className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">Are you under a physician’s care now?</div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">
          Have you ever been hospitalized or had a major operation?
        </div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">
          Have you ever had a serious neck or head injury?
        </div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">
          Are you taking any medication, drugs or pills?
        </div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">
          Do you take, or have you taken Phen-Fen or Redux?
        </div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">
          Have you ever taken Fosamax, Boniva or Actonel or any other
          medications containing bisphosphonates?
        </div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">Are you on a special diet?</div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">Do you use tobacco?</div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="points">
        <div className="pointsp">Do you use controlled substances?</div>
        <div classname="pointsradio" style={{ display: "flex" }}>
          <div style={{ paddingRight: "55px" }} className="form-check">
            <input
              className="form-check-input setpading"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="option1"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input "
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              No
            </label>
          </div>
        </div>
        <div className="pointinput">
          <input
            style-={{ width: "100%" }}
            className="poinitinptt"
            type="text"
            placeholder="If yes ..."
          />
        </div>
      </div>
      <div className="specwoman">For Woman</div>
      <div className="forwoman">
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Pregnant / Trying to get pregnant?
          </label>
        </div>
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Nursing
          </label>
        </div>
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Taking oral conceptives?
          </label>
        </div>
      </div>
      <div className="specwoman">Allergic to any one?</div>
      <div className="forwoman">
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Aspirin
          </label>
        </div>
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Penicillin
          </label>
        </div>
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Codeine
          </label>
        </div>
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Acrylic
          </label>
        </div>
      </div>

      <div className="forwoman">
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Metal
          </label>
        </div>
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Latex
          </label>
        </div>
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Sulfa drugs
          </label>
        </div>
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Local anesthetics
          </label>
        </div>
      </div>
      <div className="forwoman">
        <div className="form-group form-check checkdiv">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label labeltext" htmlFor="exampleCheck1">
            Others
          </label>
        </div>
      </div>
      <div className="inputother">
        <input
          className="others"
          type="text"
          placeholder="If other, please specify ..."
        />
      </div>
    </div>
  );
};

export default MedicalHistory;

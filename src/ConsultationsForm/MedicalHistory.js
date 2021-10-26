import React from "react";
import Header from "./Header";

const MedicalHistory = ({ step, setStep }) => {
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
      {/* <div style={{ marginBottom: "25px" }} className="stapperheadting">
        <button className="ptbtn">Patient registration</button>

        <button className="historybtn">Medical history</button>

        <button className="conditionbtn">Medical condition</button>
        <button className="hipabtn">HIPPA form & Release of information</button>
      </div> */}
      <Header step={step} />
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
      <p className="desieasetittle">Do you have or had any one?</p>

      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">AIDS/HIV positive</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Excessive Thirsty</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Mitral valve prolapse</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Alzheimer’s disease</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Fainting spells/Dizziness</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Osteoporosis</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Anaphylaxis</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Frequest cough</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Pain in jaw joints</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Anemia</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Frequent Diarrhea</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Parathyroid disease</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Anemia</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Frequent Diarrhea</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Parathyroid disease</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Angina</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Frequent headaches</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Psychiatric care</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Arthritis/Grout</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Genital Herpes</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Radiation treatments</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Artificial Heart Valve</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Glaucoma</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Recent weight loss</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Artificial Joint</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Hay fever</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Renal dialysis</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Asthma</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Heart attack/failure</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Rheumatic fever</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Blood Disease</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Heart murmur</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Rheumatism</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Blood transfusion</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Heart pacemaker</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Scarlet fever</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Breating problems</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Hearth trouble/disease</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Shingles</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Bruise easily</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Hemophila</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Sickle Cell Disease</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Cancer</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Hepatitis A</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Sinus trouble</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Chemotherapy</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Hepatitis B or C</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Spina bifida</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Chest pains</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Herpes</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Stomach/intestinal disease</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Cold sores/Fever blisters</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">High blood pressure</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Stroke</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Congenital Heart Disorder</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">High cholestrol</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Swelling of limbs</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Convulsions</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Hives or Rash</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Thyroid disease</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Cortisone Medicine</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Hypoglycymia</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Tonsilltis</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Diabetes</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Irregular heartbeat</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Tuberculosis</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Drug addiction</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Kidney problems</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Tumours or growth</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Easily winded</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Leukemia</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Ulcers</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Emphysema</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Liver disease</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Venereal disease</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Epilepsy or Seizures</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Low blood pressure</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Yellow Jaundice</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="maindiseasediv">
        <div className="diseasediv">
          <div className="diseasepara">Excessive bleeding</div>
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
              No
            </label>
          </div>
        </div>
        <div className="diseasediv">
          <div className="diseasepara">Lung disease</div>
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
              No
            </label>
          </div>
        </div>
      </div>
      <div className="points">
        <div style={{ paddingTop: "25px" }} className="pointspp">
          Have you had any serious illness not listed above?
        </div>
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
      <div style={{ paddingTop: "60px" }} className="consultfooter hipafooter">
        <button className="previous" onClick={() => setStep(0)}>
          Previous
        </button>
        <button className="nextbtn" onClick={() => setStep(2)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MedicalHistory;

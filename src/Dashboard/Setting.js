import React from "react";
import "./Dashboard.css";
const Setting = () => {
  return (
    <div>
      <div className="div2">
        <div className="sidebar d-none d-md-block">
          <img className="logoimg" src="/imagee/logo 1.svg" />
          <a href="/dashboard">
            {" "}
            <div className="calender">
              <div id="calenderbtn">
                <img src="/imagee/calender.svg" />
                <label className="lebalapp">Appointments</label>
                <img src="/imagee/arrow.svg" />
              </div>
            </div>
          </a>

          <div className="systemhead">System</div>
          <div className="settingsec">
            <div className="settingsiimg">
              <img src="/imagee/setting.svg" />
            </div>
            <div>
              <label className="set">Settings</label>
            </div>
          </div>
        </div>
        <div className="sidebar secondside d-md-none" id="secondside">
          <img className="close" id="close" src="/imagee/close.svg" />
          <img className="logoimg" src="/images/logo 1.svg" />
          <div className="calender" id="calender">
            <a href="/dashboard">
              <div id="calenderbtn2">
                <img src="imagee/calender.svg" />
                <label className="lebalapp">Appointments</label>
                <img src="images/arrow.svg" />
              </div>
            </a>
            <div className="slide-items" id="slide2">
              <div className="line2" />
              <div className="items" id="items">
                <a href="/patientappointment1.html">
                  <div className="imp">All</div>
                </a>
                <a href="/patientappointmentdone.html">
                  <div className="imp">Done</div>
                </a>
                <a href="/pt appointments upcoming.html">
                  <div className="imp">Upcoming</div>
                </a>
                <a href="/patient cancelled app.html">
                  <div className="imp">Cancelled</div>
                </a>
              </div>
            </div>
          </div>
          <div className="setting">
            <img src="/images/files.svg" />
            <label className="files">Files &amp; Information</label>
          </div>
          <div className="systemhead">System</div>
          <div className="settingsec">
            <div className="settingsiimg">
              <img src="/images/setting.svg" />
            </div>
            <div>
              <label className="set">Settings</label>
            </div>
          </div>
        </div>
        <div className="sec-div">
          <div className="main">
            <div className="threeline" id="threeline">
              <img src="/imagee/three line.svg" />
            </div>
            <div className="inputcontainer">
              <img src="/imagee/search.svg" />
              <input
                className="input-text"
                id="Email"
                name="Search"
                placeholder="Search"
                type
              />
            </div>
            <div className="notificaitions">
              <img className="noti" src="/imagee/noti.svg" />
              <img className="admi" src="/imagee/admi.svg" />
            </div>
          </div>
          <div className="main2">
            <div className="heading">
              <div className="heading1">Appointments - All</div>
              <div className="home">
                Home /<span> User</span> / Appointments
              </div>
            </div>
            <div className="btnapp">
              <button className="Appointments">+ New Appointment</button>
            </div>
          </div>
          <div className="maincardss">
            <a className="patientcardd" href="/patient-registration">
              <div className="">
                <div
                  style={{
                    paddingRight: "29px",

                    float: "right",
                  }}
                >
                  <img src="/imgs/edit.png" />
                </div>

                <img
                  style={{ textAlign: "center", paddingLeft: "50px" }}
                  src="/imgs/contacti.png"
                ></img>
                <p className="patienttext">Last Updated: May 15, 2020</p>
                <h6 className="cardsdetails">Personal Details</h6>
              </div>
            </a>
            <a className="patientcardd" href="/registertion">
              <div className="">
                <div
                  style={{
                    paddingRight: "29px",

                    float: "right",
                  }}
                >
                  <img src="/imgs/edit.png" />
                </div>
                <img
                  style={{ textAlign: "center", paddingLeft: "50px" }}
                  src="/imgs/legalform.png"
                ></img>
                <p className="patienttext">Last Updated: May 15, 2020</p>
                <h6 className="cardsdetails">Legal and Consent Forms</h6>
              </div>
            </a>
            <a className="patientcardd" href="/medical-history">
              <div className="">
                <div
                  style={{
                    paddingRight: "29px",

                    float: "right",
                  }}
                >
                  <img src="/imgs/edit.png" />
                </div>
                <img
                  style={{ textAlign: "center", paddingLeft: "50px" }}
                  src="/imgs/historyy.png"
                ></img>
                <p className="patienttext">Last Updated: May 15, 2020</p>
                <h6 className="cardsdetails">Patient Medical History</h6>
              </div>
            </a>
            <div className="patientcardd">
              <div
                style={{
                  paddingRight: "29px",

                  float: "right",
                }}
              >
                <img src="/imgs/edit.png" />
              </div>
              <img
                style={{ textAlign: "center", paddingLeft: "50px" }}
                src="/imgs/mapi.png"
              ></img>
              <p className="patienttext">Last Updated: May 15, 2020</p>
              <h6 className="cardsdetails">19 L, John Street, CA.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

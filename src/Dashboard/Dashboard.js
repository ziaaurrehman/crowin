import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <div className="div2">
        <div className="sidebar d-none d-md-block">
          <img className="logoimg" src="/imagee/logo 1.svg" />
          <div className="calender">
            <div id="calenderbtn">
              <img src="/imagee/calender.svg" />
              <label className="lebalapp">Appointments</label>
              <img src="/imagee/arrow.svg" />
            </div>
          </div>

          <div className="systemhead">System</div>
          <a href="/setting">
            <div className="settingsec">
              <div className="settingsiimg">
                <img src="/imagee/setting.svg" />
              </div>
              <div>
                <label className="set">Settings</label>
              </div>
            </div>
          </a>
        </div>
        <div className="sidebar secondside d-md-none" id="secondside">
          <img className="close" id="close" src="/imagee/close.svg" />
          <img className="logoimg" src="/images/logo 1.svg" />
          <div className="calender" id="calender">
            <div id="calenderbtn2">
              <img src="imagee/calender.svg" />
              <label className="lebalapp">Appointments</label>
              <img src="images/arrow.svg" />
            </div>
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
          <div className="systemhead">System</div>.
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
          <div className="main3">
            <div className="header">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="details name">Name</div>
              <div className="details status">status</div>
              <div className="details app">Appointment</div>
              <div className="details addad">Added</div>
              <div className="details act">Action</div>
            </div>
            <div className="appointmentsec">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="times">
                <div className="docimg">
                  <img src="/imagee/dr.john.svg" />
                </div>
                <div className="personal">
                  <div className="docaddress">Dr. John Doe</div>
                  <div className="email">johndoe@gmail.com</div>
                </div>
              </div>
              <div className="status">Done</div>
              <div className="appoints">14.04.2021 11:11</div>
              <div className="addad1">12.04.2021 18:01</div>
              <div className="Actionimgs">
                <img src="/imagee/multiply (1) 1.svg" />
                <img src="/imagee/Group 363.svg" />
                <img src="imagee/Group 387.svg" />
              </div>
            </div>
            <div className="appointmentsec">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="times">
                <div className="docimg">
                  <img src="/imagee/dr.maura.svg" />
                </div>
                <div className="personal">
                  <div className="docaddress">Dr. Maura Star</div>
                  <div className="email">maurastar@gmail.com</div>
                </div>
              </div>
              <div className="status">Upcoming</div>
              <div className="appoints">14.04.2021 11:11</div>
              <div className="addad1">12.04.2021 18:01</div>
              <div className="Actionimgs">
                <img src="/imagee/multiply (1) 1.svg" />
                <img src="/imagee/Group 363.svg" />
                <img src="imagee/Group 387.svg" />
              </div>
            </div>
            <div className="appointmentsec">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="times">
                <div className="docimg">
                  <img src="/imagee/dr.james.svg" />
                </div>
                <div className="personal">
                  <div className="docaddress">Dr. James Doe</div>
                  <div className="email">jamesdoe@gmail.com</div>
                </div>
              </div>
              <div className="status">Cancelled</div>
              <div className="appoints">14.04.2021 11:11</div>
              <div className="addad1">12.04.2021 18:01</div>
              <div className="Actionimgs">
                <img src="/imagee/multiply (1) 1.svg" />
                <img src="/imagee/Group 363.svg" />
                <img src="imagee/Group 387.svg" />
              </div>
            </div>
            <div className="appointmentsec">
              <div className="check">
                <input type="checkbox" id="check" />
              </div>
              <div className="times">
                <div className="docimg">
                  <img src="/imagee/dr.walliams.svg" />
                </div>
                <div className="personal">
                  <div className="docaddress">Dr. Williams David</div>
                  <div className="email">williamsdavid@gmail.com</div>
                </div>
              </div>
              <div className="status">Done</div>
              <div className="appoints">14.04.2021 11:11</div>
              <div className="addad1">12.04.2021 18:01</div>
              <div className="Actionimgs">
                <img src="/imagee/multiply (1) 1.svg" />
                <img src="/imagee/Group 363.svg" />
                <img src="imagee/Group 387.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

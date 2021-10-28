import React from "react";

const Services = () => {
  const data = [
    {
      image: "/imgs/ser2.png",
      title: "ORAL PROPHYLAXIS (DENTAL CLEANINGS)",
    },
    {
      image: "/imgs/ser1.png",
      title: "TOOTH WHITENING",
    },
    {
      image: "/imgs/ser3.png",
      title: "COSMIC DENTISTRY",
    },
    {
      image: "/imgs/ser4.png",
      title: "CEREC CROWNS AND BRIDGES",
    },
    {
      image: "/imgs/ser5.png",
      title: "RESTORING DENTAL IMPLANTS",
    },
    {
      image: "/imgs/ser6.png",
      title: "FULL OR PARTIAL DENTURES",
    },
    {
      image: "/imgs/ser7.png",
      title: "NON-SURGICAL ENDOTINIC THERAPY (ROOT CANALS)",
    },
    {
      image: "/imgs/ser8.png",
      title: "SEALENTS TO PREVENT TOOTH DECAY",
    },
    {
      image: "/imgs/ser9.png",
      title: "DIGITAL X-RAYS",
    },
    {
      image: "/imgs/ser10.png",
      title: "CUSTOM NIGHT GUARDS",
    },
  ];
  return (
    <div className="services" id="Services">
      <div className="servicestext">
        <div className="servicesheading">
          <h2 className="servicesh">
            Quality Services For You and The Ones You Love.
          </h2>
        </div>
        <div className="servicespara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan,
          viverra odio amet, ut suspendisse elementum quis sed. Velit aenean
          netus a a malesuada.
        </div>
      </div>
      <div className="servicesitems">
        {data.map((el) => {
          return (
            <div className="serviceimg">
              <img style={{ paddingBottom: "15px" }} src={el.image}></img>
              <div className="service_tittle">{el.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

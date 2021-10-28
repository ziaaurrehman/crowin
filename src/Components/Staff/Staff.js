import React from "react";

const Staff = () => {
  const data = [
    {
      image: "/imgs/Group 22.png",
      title: "Dr. David Corwin, DDS",
      description: "Learn more",
    },
    {
      image: "/imgs/Group 23.png",
      title: "Laurie, Receptionist",
      description: "Learn more",
    },
  ];
  return (
    <div className="staff" id="staff">
      <h2 className="centretext">Our Staff</h2>
      <div className="flexitems">
        {data.map((el) => {
          return (
            <div className="staff-img">
              <img style={{ paddingBottom: "15px" }} src={el.image}></img>
              <div className="staff_tittle">{el.title}</div>
              <div className="choose_para_wrapper">
                <div className="staff_link">{el.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;

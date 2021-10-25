import React from "react";

const SayAbout = () => {
  return (
    <div className="sayabout">
      <h3 className="say_tittle">What others say about us</h3>
      <div className="client">
        <div className="client_img">
          <img src="/imgs/clint.png" />
        </div>
        <div className="clinttext">
          <h3 className="clint_tittle">John Doe</h3>
          <h4 className="clint_p">Root canal procedure</h4>
          <img src="/imgs/Group 12.svg" />
          <p className="clintpp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan,
            viverra odio amet, ut suspendisse elementum quis sed. Velit aenean
            netus a a malesuada.
          </p>
          <div
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              textAlign: "center",
            }}
          ></div>
        </div>
        <div className="arrows">
          <div>
            <img style={{ marginRight: "15px" }} src="/imgs/left.png" />
          </div>
          <div>
            <img src="/imgs/right.png" />
          </div>
        </div>
        <img className="abs_left" src="/imgs/abs-left.png" />
        <img className="abs_right" src="/imgs/abs-right.png" />
        <img className="threee" src="/imgs/threee.svg" />
      </div>
    </div>
  );
};

export default SayAbout;

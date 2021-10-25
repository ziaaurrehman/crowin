import React from "react";

const Contact = () => {
  const data = [
    {
      image: "/imgs/looc.svg",
      title: "827 28th Street South, Suite A. Fargo, ND 58103",
    },
    {
      image: "/imgs/phoone.svg",
      title: "(701) 282-4111",
    },
    {
      image: "/imgs/faax.svg",
      title: "(701) 282-9561",
    },
  ];
  return (
    <div className="contactus">
      <div className="contactimg">
        <img className="map" src="/imgs/Map.png" />
      </div>
      <div className="contactarea">
        <h3 className="contact_tittle">Contact Us</h3>
        <h4 className="tittle2">Corwin Family Dentistry</h4>
        {data.map((el) => {
          return (
            <div className="contactimg">
              <img src={el.image}></img>
              <div className="contact_titlle">{el.title}</div>
            </div>
          );
        })}
        <h4 className="hear">We want to hear from you</h4>
        <form>
          <div className="inputss">
            <input className="contactinput" type="text" placeholder="Name" />
          </div>
          <div className="inputss">
            <input className="contactinput" type="text" placeholder="Email" />
          </div>
          <div className="inputss">
            <input className="contactinput" type="text" placeholder="Subject" />
          </div>
          <textarea
            className="area"
            type="text"
            placeholder="Massage"
          ></textarea>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import About from "../Components/About/About";
import Contact from "../Components/ContactUs/Contact";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Patient from "../Components/Patient-info/Patient";
import Policy from "../Components/Policy/Policy";
import Provide from "../Components/Provide/Provide";
import SayAbout from "../Components/SayAbout/SayAbout";
import Services from "../Components/Services/Services";
import Staff from "../Components/Staff/Staff";
import Tecnology from "../Components/Tecnology/Tecnology";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Provide />
      <About />
      <Tecnology />
      <Staff />
      <Services />
      <Patient />
      <Contact />
      <Policy />
      <SayAbout />
      <Footer />
    </div>
  );
};

export default LandingPage;

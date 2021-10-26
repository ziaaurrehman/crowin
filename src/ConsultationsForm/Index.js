import React, { useState, useEffect } from "react";
import PatientRegistration from "./PatientRegistration";
import MedicalHistory from "./MedicalHistory";
import MedicalConditions from "./MedicalConditions";
import HipaInformation from "./HipaInformation";
import Header from "./Header";

const Index = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
    return () => {};
  }, [step]);

  switch (step) {
    case 0:
      return <PatientRegistration step={step} setStep={setStep} />;
    case 1:
      return <MedicalHistory step={step} setStep={setStep} />;
    case 2:
      return <MedicalConditions step={step} setStep={setStep} />;
    case 3:
      return <HipaInformation step={step} setStep={setStep} />;
  }
  return <div></div>;
};

export default Index;

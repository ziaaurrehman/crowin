import LandingPage from "./LandingPage/LandingPage";
import { Route, Switch } from "react-router-dom";
import Login from "./view/Pages/Login";
import Registertion from "./view/Pages/Registertion";
import PatientRegistration from "./ConsultationsForm/PatientRegistration";
import MedicalConditions from "./ConsultationsForm/MedicalConditions";
import HipaInformation from "./ConsultationsForm/HipaInformation";
import Hipaagrement from "./ConsultationsForm/Hipaagrement";
import MedicalHistory from "./ConsultationsForm/MedicalHistory";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/registertion" component={Registertion} />
        <Route path="/patient-registration" component={PatientRegistration} />
        <Route path="/medical-conditions" component={MedicalConditions} />
        <Route path="/hipaform" component={HipaInformation} />
        <Route path="/hipa-agrement" component={Hipaagrement} />
        <Route path="/medical-history" component={MedicalHistory} />
      </Switch>
    </div>
  );
}

export default App;

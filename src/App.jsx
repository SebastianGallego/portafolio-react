import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MainHeader from "@/components/header/MainHeader.jsx";
import MainHero from "@/components/hero/MainHero";
import MainAbout from "@/components/about/MainAbout";
import MainSkills from "@/components/skills/MainSkills";
import MainHobbies from "@/components/hobbies/MainHobbies";
import MainFooter from "@/components/footer/MainFooter";

function App() {
  return (
    <>
      <MainHeader />
      <MainHero />
      <MainAbout />
      <MainSkills />
      <MainHobbies />
      <MainFooter />
    </>
  );
}

export default App;

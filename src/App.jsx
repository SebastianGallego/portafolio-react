import "./main.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MainHeader from "@/components/header/MainHeader.jsx";
import MainHero from "@/components/hero/MainHero";
import MainAbout from "@/components/about/MainAbout";
import MainFooter from "@/components/footer/MainFooter";
import CardContainer from "./components/cardContainer/CardContainer";
import MainStudies from "./components/studies/MainStudies.jsx";
import MainXp from "./components/xp/MainXp.jsx";

function App() {
  return (
    <>
      <MainHeader />
      <MainHero />
      <MainAbout />
      <CardContainer title="Skills" jsonPath="/skills.json" />
      <CardContainer title="Hobbies" jsonPath="/hobbies.json" />
      <MainStudies />
      <MainXp />
      <MainFooter />
    </>
  );
}

export default App;

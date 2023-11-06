import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import MainHeader from "@/components/header/MainHeader.jsx";
import MainHero from "@/components/hero/MainHero";
import MainFooter from "@/components/footer/MainFooter";

function App() {
  return (
    <>
      <MainHeader />;
      <MainHero />;
      <MainFooter />;
    </>
  );
}

export default App;

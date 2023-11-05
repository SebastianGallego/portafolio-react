import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//Importo las imagenes

import ProfileImg from "@/assets/images/profile.jpg";
//Importo los iconos de FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
library.add(faLinkedin, faGithub, faInstagram, faFilePdf);

import MainHeader from "@/components/header/MainHeader.jsx";

function App() {
  return (
    <>
      <MainHeader />;
      <section className="sectionHero ">
        <div className="containerHero container d-flex  p-4">
          <div className="heroContainerBiografia text-start justify-content-center">
            <h2 className="heroTitulo">
              Hola, Soy Sebastián Gallego - Desarrollador web
            </h2>
            <h3 className="heroSubTitulo">
              {" "}
              Me formé en la Universidad de Quilmes y en la Universidad de Tres
              de Febrero. Actualmente estoy participando del proyecto Oracle ONE
              en Alura Latam.{" "}
            </h3>
            <ul className="heroRedes justify-content-center text-center">
              <li className="heroRedesItem ">
                <a
                  className="linkHero"
                  href="https://github.com/SebastianGallego"
                >
                  Github
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="heroRedesItem ">
                <a
                  className="linkHero"
                  href="https://www.linkedin.com/in/sebastiangallego-dev/"
                >
                  Linkedin
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="heroRedesItem">
                <a
                  className="linkHero"
                  href="https://www.instagram.com/stavelot1978/"
                >
                  Instagram
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="heroRedesItem">
                <a className="linkHero" href="">
                  Curriculum
                  <FontAwesomeIcon icon={faFilePdf} />
                </a>
              </li>
            </ul>
          </div>
          <img className="heroProfile " src={ProfileImg} />
        </div>
      </section>
    </>
  );
}

export default App;

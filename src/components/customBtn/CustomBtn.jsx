import React from "react";
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

import "./CustomBtn.css";

export default function CustomButton(props) {
  const {
    text,
    icono,
    backgroundColor,
    borderColor,
    textColor,
    link, // Nueva propiedad para el enlace
  } = props;

  function handleButtonClick() {
    if (link) {
      window.open(link, "_blank"); // Abre en una nueva pestaña
    }
  }

  const buttonStyle = {
    backgroundColor: backgroundColor,
    border: borderColor,
    color: textColor,
  };

  return (
    <button
      className="linkHero"
      style={buttonStyle}
      onClick={handleButtonClick}
    >
      {text}
      <FontAwesomeIcon className="ps-2" icon={["fas", icono]} />
    </button>
  );
}

/*


  <a className="linkHero" href="https://github.com/SebastianGallego">
              Github
              <FontAwesomeIcon className="ps-2" icon={faGithub} />
            </a>
            <a
              className="linkHero"
              href="https://www.linkedin.com/in/sebastiangallego-dev/"
            >
              Linkedin
              <FontAwesomeIcon className="ps-2" icon={faLinkedin} />
            </a>
            <a
              className="linkHero"
              href="https://www.instagram.com/stavelot1978/"
            >
              Instagram
              <FontAwesomeIcon className="ps-2" icon={faInstagram} />
            </a>
            <a className="linkHero" href="">
              Curriculum
              <FontAwesomeIcon className="ps-2" icon={faFilePdf} />
            </a>
*/

/* Aca tiene que recibir:
  - Texto
  - Icono
  - background Color
  - Border Color 
  - Text Color
*/

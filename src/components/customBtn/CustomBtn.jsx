import React from "react";

import "./CustomBtn.css";

export default function CustomButton(props) {
  const { text, icon, backgroundColor, borderColor, textColor, link } = props;

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
    <>
      <button
        className="linkHero btn d-flex justify-content-center align-items-center gap-2"
        style={buttonStyle}
        onClick={handleButtonClick}
      >
        {text}
        {icon && <span className={`bi bi-${icon}`}></span>}
      </button>
    </>
  );
}

/* Aca tiene que recibir:  
  - Texto
  - Icono    github linkedin instagram filetype-pd
  - background Color
  - Border Color 
  - Text Color
*/

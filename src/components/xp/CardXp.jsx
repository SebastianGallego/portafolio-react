import React from "react";
import CustomBtn from "@/components/customBtn/CustomBtn";

export default function CardXp() {
  const imageCardStyle = {
    width: "550px",
  };

  return (
    <div className="xpBoxContainer d-flex justify-content-center" id="xpBox1">
      <img
        style={imageCardStyle}
        className="xpImage m-3"
        src="./images/encriptador.png"
      />
      <div className="xpInfoContainer">
        <h2 className="xpTitulo text-center ">Encriptador de texto</h2>
        <h3 className="xpTexto text-center ">Challenge Oracle </h3>
        <div className="d-flex justify-content-center gap-5 pt-3">
          <CustomBtn
            text="Github"
            link="https://github.com/SebastianGallego"
            backgroundColor="var(--colorBotones)"
            border="2px solid var(--colorBotones)"
            textColor="var(--colorTexto)"
            icon="github"
          />
          <CustomBtn
            text="Ver Demo"
            link="https://github.com/SebastianGallego"
            backgroundColor="var(--colorFondoNegro)"
            textColor="var(--colorBotones)"
            icon="link"
          />
        </div>
      </div>
    </div>
  );
}

/* 
Props que debe recibir la card: 
- link de la imagen
- Titulo proyecto
- Texto proyecto
- Props de CustomBtn (text, likn, backgroundColor, border, textColor, icon)





*/

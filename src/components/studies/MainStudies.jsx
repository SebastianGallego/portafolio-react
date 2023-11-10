import React from "react";
import CardStudies from "@/components/studies/CardStudies.jsx";

export default function MainStudies() {
  const ContainerTitulo = {
    color: "var(--colorBotones",
    fontSize: "2.6rem",
    textAlign: "center",
    padding: "20px",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "var(--colorFondoPlomo)",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={ContainerTitulo}>Formación Académica</h2>
      <div className="container d-flex gap-5 justify-content-center">
        <CardStudies
          titleStudie="YO PROGRAMO"
          textStudie="Argentina Programa"
          imgLink="./images/logoArg.png"
        />
        <CardStudies
          titleStudie="Dip. Programación Front End"
          textStudie="Universidad de Tres de Febrero"
          imgLink="./images/logoUntref.png"
        />
        <CardStudies
          titleStudie="Ing. Automatización y Control"
          textStudie="Universidad de Quilmes"
          imgLink="./images/logoUnqui.png"
        />
        <CardStudies
          titleStudie="Desarrollo Front-End"
          textStudie="Alura Latam"
          imgLink="./images/logoAlura.png"
        />
      </div>
    </div>
  );
}
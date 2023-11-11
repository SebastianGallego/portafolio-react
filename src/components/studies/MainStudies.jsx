import React from "react";
import CardStudies from "@/components/studies/CardStudies.jsx";

export default function MainStudies() {
  return (
    <section className="containerStudies d-flex flex-column py-5 " id="studies">
      <h2 className="sectionTitulo">Formación Académica</h2>
      <div className="container d-flex flex-column gap-5 align-items-center justify-content-center py-5 flex-xxl-row ">
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
    </section>
  );
}

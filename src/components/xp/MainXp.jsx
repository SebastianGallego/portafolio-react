import React from "react";
import CardXp from "./CardXp";

export default function MainXp() {
  return (
    <section className="xpContainer py-5 " id="xp">
      <h2 className="sectionTitulo">Proyectos</h2>
      <div className="container d-flex flex-column flex-md-row justify-content-center gap-5">
        <CardXp />;
      </div>
    </section>
  );
}

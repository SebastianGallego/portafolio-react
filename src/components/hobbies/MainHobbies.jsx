import React from "react";
import "@/App.css";
import CardHobbies from "@/components/hobbies/CardHobbies";

export default function MainSkills() {
  const skillsTitulo = {
    color: "var(--colorBotones",
    fontSize: "2.6rem",
    textAlign: "center",
    padding: "20px",
  };

  const skillsContainer = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    width: "30%",
    justifyContent: "center",
    margin: "0 auto",
  };

  return (
    <>
      <section className="sectionHobbies" id="hobbies">
        <h3 style={skillsTitulo}>Hobbies</h3>
        <div style={skillsContainer}>
          <CardHobbies />
        </div>
      </section>
    </>
  );
}

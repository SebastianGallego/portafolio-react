import React from "react";
import "@/App.css";
import CardSkill from "@/components/skills/CardSkill";

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
      <section className="sectionSkills mb-3" id="skills">
        <h3 style={skillsTitulo}>Skills</h3>
        <div style={skillsContainer}>
          <CardSkill />
        </div>
      </section>
    </>
  );
}

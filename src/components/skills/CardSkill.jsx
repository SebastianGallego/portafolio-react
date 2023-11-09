import React, { useState, useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Agrega los íconos "fa-brands" al objeto library
library.add(fab, fas);

const skillCardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyItems: "center",
  width: "140px",
  height: "110px",
  backgroundColor: "var(--colorFondoPlomo)",
  padding: "10px",
  borderRadius: "20px",
};

const skillStyle = {
  fontSize: "45px",
  color: "var(--colorBotones)",
};
function SkillCard({ name, icon }) {
  return (
    <div style={skillCardStyle}>
      <FontAwesomeIcon icon={icon} style={skillStyle} />
      <span className="text-light"> {name}</span>
    </div>
  );
}

export default function CardSkill() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Cargar los datos de skills desde el archivo JSON
    fetch("/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      {skills.map((skill, index) => (
        <div style={skillCardStyle}>
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        </div>
      ))}
    </>
  );
}

/* 
<FontAwesomeIcon icon={["fab", "html5"]} style={skillStyle} />
      <span className="skillsName text-light"> HTML 5</span>
src\skills.json

*/

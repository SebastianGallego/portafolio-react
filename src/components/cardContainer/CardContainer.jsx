import React, { useState, useEffect } from "react";
import Card from "./Card.jsx"; // Reutiliza el componente SkillCard

export default function CardContainer({ title, jsonPath }) {
  const [data, setData] = useState([]);

  const containerTitulo = {
    color: "var(--colorBotones",
    fontSize: "2.6rem",
    textAlign: "center",
    padding: "20px",
  };

  const cardContainer = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    width: "30%",
    justifyContent: "center",
    margin: "0 auto",
  };

  useEffect(() => {
    // Cargar los datos desde el archivo JSON
    fetch(jsonPath)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error:", error));
  }, [jsonPath]);

  return (
    <div style={cardContainer}>
      <h2 style={containerTitulo}>{title}</h2>
      {data.map((item, index) => (
        <Card key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
}

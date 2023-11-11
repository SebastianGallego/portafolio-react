import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";

export default function CardContainer({ title, jsonPath }) {
  const [data, setData] = useState([]);

  const CardsContainer = {
    display: "flex",
    gap: "25px",
    flexWrap: "wrap",
    width: "50%",
    justifyContent: "center",
    margin: "0 auto",
    paddingBottom: "50px",
  };

  useEffect(() => {
    fetch(jsonPath)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error:", error));
  }, [jsonPath]);

  return (
    <section className="cardContainer d-flex flex-column py-4">
      <h2 className="sectionTitulo ">{title}</h2>
      <div style={CardsContainer}>
        {data.map((item, index) => (
          <Card key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}

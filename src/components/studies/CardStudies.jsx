import React from "react";

export default function CardStudies({ titleStudie, textStudie, imgLink }) {
  const imageCardStyle = {
    width: "350px",
  };

  const cardStyle = {
    width: "400px",
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };

  const cardTitleStyle = {
    fontSize: "1.6rem",
    fontWeight: "bold",
  };

  const cardTextStyle = {
    fontSize: "1.3rem",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <img src={imgLink} style={imageCardStyle} alt={titleStudie} />
      <div className="cardBody ">
        <h5 style={cardTitleStyle}>{titleStudie}</h5>
        <p style={cardTextStyle}>{textStudie}</p>
      </div>
    </div>
  );
}

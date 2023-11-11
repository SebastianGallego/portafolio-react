import React from "react";

export default function CardStudies({ titleStudie, textStudie, imgLink }) {
  const imageCardStyle = {
    width: "260px",
  };

  const cardStyle = {
    width: "300px",
    borderRadius: "10px",
    backgroundColor: "white",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };

  return (
    <div style={cardStyle}>
      <img src={imgLink} style={imageCardStyle} alt={titleStudie} />
      <div className="cardBody text-center">
        <h5 className="">{titleStudie}</h5>
        <p>{textStudie}</p>
      </div>
    </div>
  );
}

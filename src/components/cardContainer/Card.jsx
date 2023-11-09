import React, { useState, useEffect } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Agrega los íconos "fa-brands" al objeto library
library.add(fab);

const cardStyle = {
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

const iconStyle = {
  fontSize: "45px",
  color: "var(--colorBotones)",
};
export default function Card({ name, icon }) {
  return (
    <div style={cardStyle}>
      <FontAwesomeIcon icon={icon} style={iconStyle} />
      <span className="text-light"> {name}</span>
    </div>
  );
}

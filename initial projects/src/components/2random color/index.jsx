import React from "react";
import { useState } from "react";
function RandomColor() {
  const [typeOfColor, setTypeOfColor] = React.useState("hex");
  const [color, setColor] = React.useState("#000000");
  const randomHex = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };
  const randomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let color = `RGB(${r}, ${g}, ${b})`;
    setColor(color);
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
        height: "50vh",
        width: "50vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <button onClick={() => setTypeOfColor("rgb")}>RGB colors</button>
      <button onClick={() => setTypeOfColor("hex")}>HEX colors</button>
      <button
        onClick={typeOfColor === "hex" ? () => randomHex() : () => randomRGB()}
      >
        Generate Random color
      </button>
      <h3 style={{ color: "black" }}>
        {typeOfColor === "hex" ? `HEX: ${color}` : color}
      </h3>
    </div>
  );
}

export default RandomColor;

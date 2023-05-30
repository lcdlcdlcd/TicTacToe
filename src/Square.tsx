import React from "react";

interface SquareProps {
  value: string;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  let color = "";

  if (value === "X") {
    color = "green";
  } else if (value === "O") {
    color = "red";
  }

  return (
    <div
      style={{
        textAlign: "center",
        border: "2px solid black",
        fontSize: "30px",
        outline: "none",
        cursor: "pointer",
        color: color
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

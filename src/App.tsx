import React, { useEffect, useState } from "react";
import { Board } from "./Board";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Board />
    </div>
  );
}

export default App;

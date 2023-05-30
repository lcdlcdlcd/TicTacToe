import React, { useEffect, useState } from "react";
import { Square } from "./Square";

// init params
export const Board = () => {
  const [board, setBoard] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]);
  const [isPlayerXNext, setIsPlayerXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string>("");

  // check win/lose
  const checkWinLose = () => {
    const winningCombos: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // horizontal
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // vertical
      [0, 4, 8],
      [2, 4, 6] // diagonal
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }
  };

  useEffect(() => {
    checkWinLose();
  }, [board]);

  //on click handle
  const processClick = (buttonNum: number) => {
    if (board[buttonNum] === "") {
      const updatedBoard = [...board];
      updatedBoard[buttonNum] = isPlayerXNext ? "X" : "O";
      setBoard(updatedBoard);
      setIsPlayerXNext(!isPlayerXNext);
    }
  };

  //refresh
  const handleRefresh = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setIsPlayerXNext(true);
    setWinner("");
  };

  return (
    <div
      style={{
        border: "4px solid black",
        borderRadius: "4px",
        width: "500px",
        height: "500px",
        margin: "0 auto",
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
        marginTop: "2rem"
      }}
    >
      {board.map((value, index) => (
        <Square key={index} value={value} onClick={() => processClick(index)} />
      ))}
      {winner && (
        <div
          style={{
            gridColumnStart: "1",
            gridColumnEnd: "4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "30px"
          }}
        >
          {`${winner} wins!`}
        </div>
      )}
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

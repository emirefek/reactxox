import { useState } from "react";

export default function GameState() {
  const [gameState, setGameState] = useState({
    won: false,
    tie: false,
    winner: "",
  });

  function handleWin(winner) {
    setGameState({
      won: true,
      tie: false,
      winner: winner,
    });
  }

  function handleTie() {
    setGameState({
      won: false,
      tie: true,
      winner: "",
    });
  }

  return [gameState, handleWin, handleTie];
}

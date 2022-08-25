import React, { createContext } from "react";
import useGameState from "../Hooks/GameState";

export const GameContext = createContext();
export const GamePatchContext = createContext();

function GameProvider(props) {
  const [gameState, handleWin, handleTie] = useGameState();

  return (
    <GameContext.Provider value={gameState}>
      <GamePatchContext.Provider value={{ handleWin, handleTie }}>
        {props.children}
      </GamePatchContext.Provider>
    </GameContext.Provider>
  );
}

export default GameProvider;

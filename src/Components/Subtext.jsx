import React, { useContext } from "react";
import { GameContext } from "../Context/game.context";

export default function Subtext() {
  const { won, winner, tie } = useContext(GameContext);

  return (
    <div>
      {!won && !tie ? <h3>Click boxes to play</h3> : null}
      {won ? <h3>Winner: {winner}</h3> : null}
      {tie ? <h3>Tie</h3> : null}
    </div>
  );
}

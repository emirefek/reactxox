import React, { useContext } from "react";
import "../Styles/Replay.css";

import { GameContext } from "../Context/game.context";

export default function Replay() {
  const { won, tie } = useContext(GameContext);

  return (
    <div className="replay">
      {won || tie ? (
        <button
          className="replayBtn"
          onClick={() => {
            window.location.reload();
          }}
        >
          Replay
        </button>
      ) : null}
    </div>
  );
}

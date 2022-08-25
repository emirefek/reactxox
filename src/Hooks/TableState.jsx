import { useState, useEffect, useContext } from "react";
import { GameContext, GamePatchContext } from "../Context/game.context";

import useCheckHook from "./Check";

function TableState() {
  const { checkVertical, checkHorizontal, checkDiagonal } = useCheckHook();
  const { won, tie } = useContext(GameContext);
  const { handleWin, handleTie } = useContext(GamePatchContext);

  const [table, setTable] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });

  const [gameLog, setGameLog] = useState([]);

  function handleCheck() {
    const lastInputIndex = gameLog[gameLog.length - 1].index;

    const respVert = checkVertical(lastInputIndex, table);
    const respHor = checkHorizontal(lastInputIndex, table);
    const respDiag = checkDiagonal(lastInputIndex, table);

    if (respVert || respHor || respDiag) {
      handleWin(gameLog[gameLog.length - 1].char);
    } else {
      if (gameLog.length === 9) {
        handleTie();
      }
      return false;
    }
  }

  function handlePutChar(index, charToPut) {
    if (table[index] === "") {
      setTable({
        ...table,
        [index]: charToPut,
      });
      return true;
    } else {
      return false;
    }
  }

  function handleGameLoop(index) {
    const lastGameLog =
      gameLog.length === 0 ? 0 : gameLog[gameLog.length - 1].char;
    const charToPut = lastGameLog === "X" ? "O" : "X";

    const respPut = handlePutChar(index, charToPut);
    if (respPut) {
      setGameLog([...gameLog, { index: index, char: charToPut }]);
    }
  }

  function handleClick(index) {
    if (!won && !tie) {
      handleGameLoop(index);
    }
  }

  useEffect(() => {
    if (gameLog.length >= 5) {
      handleCheck();
    }
    // eslint-disable-next-line
  }, [gameLog.length]);

  return { table, handleClick };
}

export default TableState;

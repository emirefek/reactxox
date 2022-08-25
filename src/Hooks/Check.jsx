export default function Check() {
  function checkVertical(index, table) {
    // vertical
    // 0, 3, 6
    // 1, 4, 7
    // 2, 5, 8
    if (index === 0 || index === 3 || index === 6) {
      if (
        table[0] === table[3] &&
        table[3] === table[6] &&
        table[0] !== "" &&
        table[3] !== "" &&
        table[6] !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (index === 1 || index === 4 || index === 7) {
      if (
        table[1] === table[4] &&
        table[4] === table[7] &&
        table[1] !== "" &&
        table[4] !== "" &&
        table[7] !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (index === 2 || index === 5 || index === 8) {
      if (
        table[2] === table[5] &&
        table[5] === table[8] &&
        table[2] !== "" &&
        table[5] !== "" &&
        table[8] !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  function checkHorizontal(index, table) {
    // horizontal
    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8
    if (index === 0 || index === 1 || index === 2) {
      if (
        table[0] === table[1] &&
        table[1] === table[2] &&
        table[0] !== "" &&
        table[1] !== "" &&
        table[2] !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (index === 3 || index === 4 || index === 5) {
      if (
        table[3] === table[4] &&
        table[4] === table[5] &&
        table[3] !== "" &&
        table[4] !== "" &&
        table[5] !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (index === 6 || index === 7 || index === 8) {
      if (
        table[6] === table[7] &&
        table[7] === table[8] &&
        table[6] !== "" &&
        table[7] !== "" &&
        table[8] !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  function checkDiagonal(index, table) {
    // diagonal
    // 0, 4, 8
    // 2, 4, 6
    if (index === 0 || index === 4 || index === 8) {
      if (
        table[0] === table[4] &&
        table[4] === table[8] &&
        table[0] !== "" &&
        table[4] !== "" &&
        table[8] !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (index === 2 || index === 4 || index === 6) {
      if (
        table[2] === table[4] &&
        table[4] === table[6] &&
        table[2] !== "" &&
        table[4] !== "" &&
        table[6] !== ""
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  return { checkVertical, checkHorizontal, checkDiagonal };
}

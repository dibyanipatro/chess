export function initializeBoard() {
  //initialize the chessboard with pieces in their starting positions
  const board = new Array(8).fill(null).map(() => new Array(8).fill(null));

  //adding pieces(pawns, rooks, knights, bishops, queens, kings)
  //pawns
  for (let i = 0; i < 8; i++) {
    board[1][i] = { type: "pawn", color: "black" };
    board[6][i] = { type: "pawn", color: "white" };
  }

  //rooks
  board[0][0] = board[0][7] = { type: "rook", color: "black" };
  board[7][0] = board[7][7] = { type: "rook", color: "white" };

  //knights
  board[0][1] = board[0][6] = { type: "knight", color: "black" };
  board[7][1] = board[7][6] = { type: "knight", color: "white" };

  //bishops
  board[0][2] = board[0][5] = { type: "bishop", color: "black" };
  board[7][2] = board[7][5] = { type: "bishop", color: "white" };

  //queens
  board[0][3] = { type: "queen", color: "black" };
  board[7][3] = { type: "queen", color: "white" };

  //kings
  board[0][4] = { type: "king", color: "black" };
  board[7][4] = { type: "king", color: "white" };

  return board;
}

// export function isValidMove(piece, from, to, board) {
//   // const [fromRow, fromCol] = from;
//   const [toRow, toCol] = to;
//   const destinationPiece = board[toRow][toCol];

//   //ensure the piece doesn't move to a square occupied by a piece of the same colour
//   if (destinationPiece && destinationPiece.color === piece.color) {
//     return false;
//   }

//   switch (piece.type) {
//     case "pawn":
//       return isValidPawnMove(piece, from, to, board);
//     case "rook":
//       return isValidRookMove(from, to, board);
//     case "knight":
//       return isValidKnightMove(from, to);
//     case "bishop":
//       return isValidBishopMove(from, to, board);
//     case "queen":
//       return isValidQueenMove(from, to, board);
//     case "king":
//       return isValidKingMove(from, to, board);
//     default:
//       return false;
//   }
// }

export function isValidMove(piece, from, to, board) {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  const destinationPiece = board[toRow][toCol];

  // Ensure the piece is moving to a square that is either empty or occupied by an opponent's piece
  if (destinationPiece && destinationPiece.color === piece.color) {
    return false;
  }

  // Check if the move is valid based on the piece's type and rules
  let isValid = false;
  switch (piece.type) {
    case "pawn":
      isValid = isValidPawnMove(piece, from, to, board);
      break;
    case "rook":
      isValid = isValidRookMove(from, to, board);
      break;
    case "knight":
      isValid = isValidKnightMove(from, to);
      break;
    case "bishop":
      isValid = isValidBishopMove(from, to, board);
      break;
    case "queen":
      isValid = isValidQueenMove(from, to, board);
      break;
    case "king":
      isValid = isValidKingMove(from, to, board);
      break;
    default:
      isValid = false;
  }

  return isValid;
}

//implement piece specific movement logic

// Implement pawn's move logic inside a function
function isValidPawnMove(piece, from, to, board) {
  const direction = piece.color === "white" ? -1 : 1;
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;

  // Normal move
  if (fromCol === toCol && board[toRow][toCol] === null) {
    if (toRow - fromRow === direction) {
      return true;
    }

    if (
      (piece.color === "white" && fromRow === 6) ||
      (piece.color === "black" && fromRow === 1)
    ) {
      if (
        toRow - fromRow === 2 * direction &&
        board[fromRow + direction][fromCol] === null
      ) {
        return true;
      }
    }
  }

  // Capture move (diagonal)
  if (
    Math.abs(toCol - fromCol) === 1 &&
    toRow - fromRow === direction &&
    board[toRow][toCol] !== null
  ) {
    return true;
  }

  return false;
}

//rook's move

function isValidRookMove(from, to, board) {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;

  if (fromRow !== toRow && fromCol !== toCol) return false; //must move in a straight line

  //ensure no pieces are blocking the path
  if (fromRow === toRow) {
    const step = fromCol < toCol ? 1 : -1;
    for (let col = fromCol + step; col !== toCol; col += step) {
      if (board[fromRow][col] !== null) return false;
    }
  } else {
    const step = fromRow < toRow ? 1 : -1;
    for (let row = fromRow + step; row !== toRow; row += step) {
      if (board[row][fromCol] !== null) return false;
    }
  }

  return true;
}

//knight's move
function isValidKnightMove(from, to) {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;
  const rowDiff = Math.abs(toRow - fromRow);
  const colDiff = Math.abs(toCol - fromCol);

  //knights move in L-shape
  return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
}

//bishop's move
function isValidBishopMove(from, to, board) {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;

  if (Math.abs(fromRow - toRow) !== Math.abs(fromCol - toCol)) return false;

  //ensure no pieces are blocking the path
  const rowStep = fromRow < toRow ? 1 : -1;
  const colStep = fromCol < toCol ? 1 : -1;

  for (
    let row = fromRow + rowStep, col = fromCol + colStep;
    row !== toRow;
    row += rowStep, col += colStep
  ) {
    if (board[row][col] !== null) return false;
  }
  return true;
}

//queen's move
function isValidQueenMove(from, to, board) {
  return isValidRookMove(from, to, board) || isValidBishopMove(from, to, board);
}

//king's move
function isValidKingMove(from, to) {
  const [fromRow, fromCol] = from;
  const [toRow, toCol] = to;

  //king moves on square in any direction
  return Math.abs(fromRow - toRow) <= 1 && Math.abs(fromCol - toCol) <= 1;
}

export function Chessboard2() {
  const renderSquares = () => {
    const squares = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        // This condition ensures that adjacent squares do not have the same color
        const isBlack = (row + col) % 2 === 1;
        squares.push(
          <div
            key={`${row}-${col}`}
            className={`square ${isBlack ? "black" : "white"}`}
          />
        );
      }
    }
    return squares;
  };

  return <div className="chessboard">{renderSquares()}</div>;
}

// import React from "react";
// import Piece from "./Piece";
// import blackPawn from "../assets/images/pawn_b.png";
// import whitePawn from "../assets/images/pawn_w.png";
// import blackRook from "../assets/images/rook_b.png";
// import whiteRook from "../assets/images/rook_w.png";
// import blackKnight from "../assets/images/knight_b.png";
// import whiteKnight from "../assets/images/knight_w.png";
// import blackBishop from "../assets/images/bishop_b.png";
// import whiteBishop from "../assets/images/bishop_w.png";
// import blackQueen from "../assets/images/queen_b.png";
// import whiteQueen from "../assets/images/queen_w.png";
// import blackKing from "../assets/images/king_b.png";
// import whiteKing from "../assets/images/king_w.png";

// const getImageForPiece = (piece) => {
//   if (!piece) return null;

//   switch (piece.type) {
//     case "pawn":
//       return piece.color === "white" ? whitePawn : blackPawn;
//     case "rook":
//       return piece.color === "white" ? whiteRook : blackRook;
//     case "knight":
//       return piece.color === "white" ? whiteKnight : blackKnight;
//     case "bishop":
//       return piece.color === "white" ? whiteBishop : blackBishop;
//     case "queen":
//       return piece.color === "white" ? whiteQueen : blackQueen;
//     case "king":
//       return piece.color === "white" ? whiteKing : blackKing;
//     default:
//       return null;
//   }
// };
// const Square = ({ piece, onClick, isDark }) => {
//   const pieceImage = getImageForPiece(piece);
//   return (
//     <button
//       className={`square ${isDark ? "dark-square" : "light-square"}`}
//       onClick={onClick}
//     >
//       {pieceImage && (
//         <img src={pieceImage} alt={`${piece.color} ${piece.type}`} />
//       )}
//     </button>
//   );
// };

// export default Square;

import React from "react";
import blackPawn from "../assets/images/pawn_b.png";
import whitePawn from "../assets/images/pawn_w.png";
import blackRook from "../assets/images/rook_b.png";
import whiteRook from "../assets/images/rook_w.png";
import blackKnight from "../assets/images/knight_b.png";
import whiteKnight from "../assets/images/knight_w.png";
import blackBishop from "../assets/images/bishop_b.png";
import whiteBishop from "../assets/images/bishop_w.png";
import blackQueen from "../assets/images/queen_b.png";
import whiteQueen from "../assets/images/queen_w.png";
import blackKing from "../assets/images/king_b.png";
import whiteKing from "../assets/images/king_w.png";

const getImageForPiece = (piece) => {
  if (!piece) return null;

  switch (piece.type) {
    case "pawn":
      return piece.color === "white" ? whitePawn : blackPawn;
    case "rook":
      return piece.color === "white" ? whiteRook : blackRook;
    case "knight":
      return piece.color === "white" ? whiteKnight : blackKnight;
    case "bishop":
      return piece.color === "white" ? whiteBishop : blackBishop;
    case "queen":
      return piece.color === "white" ? whiteQueen : blackQueen;
    case "king":
      return piece.color === "white" ? whiteKing : blackKing;
    default:
      return null;
  }
};

const Square = ({ piece, onClick, isDark }) => {
  const pieceImage = getImageForPiece(piece);
  return (
    <button
      className={`square ${isDark ? "dark-square" : "light-square"}`}
      onClick={onClick}
    >
      {pieceImage && (
        <img src={pieceImage} alt={`${piece.color} ${piece.type}`} />
      )}
    </button>
  );
};

export default Square;

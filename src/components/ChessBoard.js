// import React, { useState } from "react";
// import Square from "./Square";
// import { initializeBoard, isValidMove } from "../ChessLogic";

// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     if (selectedPiece) {
//       // Attempt to move the selected piece
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );
//       if (isValid) {
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null;
//         setBoard(newBoard);
//       }
//       setSelectedPiece(null);
//       setSelectedPosition(null);
//     } else if (piece) {
//       // Select a piece
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   return (
//     <div className="chess-board">
//       {board.map((row, rowIndex) => (
//         <div key={rowIndex} className="board-row">
//           {row.map((piece, colIndex) => (
//             <Square
//               key={colIndex}
//               piece={piece}
//               onClick={() => handleSquareClick(rowIndex, colIndex)}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     // If a piece is already selected and the user clicks on another square
//     if (selectedPiece) {
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );

//       if (isValid) {
//         // Move the piece to the new position
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null; // Remove the piece from the old position
//         setBoard(newBoard); // Update the board state
//       }

//       // Reset the selected piece and position
//       setSelectedPiece(null);
//       setSelectedPosition(null);
//     } else if (piece) {
//       // If no piece is selected and the user clicks on a piece, select the piece
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   return (
//     <div className="chess-board">
//       {board.map((row, rowIndex) => (
//         <div key={rowIndex} className="board-row">
//           {row.map((piece, colIndex) => (
//             <Square
//               key={colIndex}
//               piece={piece}
//               onClick={() => handleSquareClick(rowIndex, colIndex)}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [currentTurn, setCurrentTurn] = useState("white"); // Track current turn

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     if (selectedPiece) {
//       // Attempt to move the selected piece
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );
//       if (isValid && selectedPiece.color === currentTurn) {
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null;
//         setBoard(newBoard);
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//         setCurrentTurn(currentTurn === "white" ? "black" : "white"); // Switch turns
//       } else {
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//       }
//     } else if (piece && piece.color === currentTurn) {
//       // Select a piece if it belongs to the current player
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   return (
//     <div className="chess-board">
//       <h2>Current Turn: {currentTurn === "white" ? "White" : "Black"}</h2>
//       {board.map((row, rowIndex) => (
//         <div key={rowIndex} className="board-row">
//           {row.map((piece, colIndex) => (
//             <Square
//               key={colIndex}
//               piece={piece}
//               onClick={() => handleSquareClick(rowIndex, colIndex)}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [currentTurn, setCurrentTurn] = useState("white"); // Track current turn

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     if (selectedPiece) {
//       // Attempt to move the selected piece
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );
//       if (isValid && selectedPiece.color === currentTurn) {
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null;
//         setBoard(newBoard);
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//         setCurrentTurn(currentTurn === "white" ? "black" : "white"); // Switch turns
//       } else {
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//       }
//     } else if (piece && piece.color === currentTurn) {
//       // Select a piece if it belongs to the current player
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   return (
//     <div className="chess-container">
//       <div className="chess-board">
//         {board.map((row, rowIndex) => (
//           <div key={rowIndex} className="board-row">
//             {row.map((piece, colIndex) => {
//               const isDark = (rowIndex + colIndex) % 2 === 1;
//               return (
//                 <Square
//                   key={colIndex}
//                   piece={piece}
//                   onClick={() => handleSquareClick(rowIndex, colIndex)}
//                   isDark={isDark}
//                 />
//               );
//             })}
//           </div>
//         ))}
//       </div>
//       <div className="turn-info">
//         <h2>Current Turn: {currentTurn === "white" ? "White" : "Black"}</h2>
//       </div>
//     </div>
//   );
// };

// export default ChessBoard;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import Square from "./Square";
// import { initializeBoard, isValidMove } from "../ChessLogic";

// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [currentTurn, setCurrentTurn] = useState("white"); // Track current turn

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     if (selectedPiece) {
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );
//       if (isValid && selectedPiece.color === currentTurn) {
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null;
//         setBoard(newBoard);
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//         setCurrentTurn(currentTurn === "white" ? "black" : "white");
//       } else {
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//       }
//     } else if (piece && piece.color === currentTurn) {
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   return (
//     <div className="chess-container">
//       <div className="chess-board">
//         {board.map((row, rowIndex) => (
//           <div key={rowIndex} className="board-row">
//             {row.map((piece, colIndex) => {
//               // The logic for determining the color of the square
//               const isDark = (rowIndex + colIndex) % 2 === 1;
//               return (
//                 <Square
//                   key={colIndex}
//                   piece={piece}
//                   onClick={() => handleSquareClick(rowIndex, colIndex)}
//                   isDark={isDark}
//                 />
//               );
//             })}
//           </div>
//         ))}
//       </div>
//       <div className="turn-info">
//         <h2>Current Turn: {currentTurn === "white" ? "White" : "Black"}</h2>
//       </div>
//     </div>
//   );
// };

// export default ChessBoard;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import Chessboard from "./Chessboard2"; // Import the new Chessboard component
// import Square from "./Square";
// import { initializeBoard, isValidMove } from "../ChessLogic";

// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [currentTurn, setCurrentTurn] = useState("white");

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     if (selectedPiece) {
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );
//       if (isValid && selectedPiece.color === currentTurn) {
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null;
//         setBoard(newBoard);
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//         setCurrentTurn(currentTurn === "white" ? "black" : "white");
//       } else {
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//       }
//     } else if (piece && piece.color === currentTurn) {
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   return (
//     <div className="chess-container">
//       <Chessboard />
//       <div className="chess-board">
//         {board.map((row, rowIndex) => (
//           <div key={rowIndex} className="board-row">
//             {row.map((piece, colIndex) => {
//               return (
//                 <Square
//                   key={colIndex}
//                   piece={piece}
//                   onClick={() => handleSquareClick(rowIndex, colIndex)}
//                   isDark={(rowIndex + colIndex) % 2 === 1}
//                 />
//               );
//             })}
//           </div>
//         ))}
//       </div>
//       <div className="turn-info">
//         <h2>Current Turn: {currentTurn === "white" ? "White" : "Black"}</h2>
//       </div>
//     </div>
//   );
// };

// export default ChessBoard;

//-------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import Square from "./Square"; // Import the Square component to render individual squares
// import { initializeBoard, isValidMove, Chessboard2} from "../ChessLogic";
// import "./Chessboard.css"; // Make sure to include CSS for styling the chessboard

// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [currentTurn, setCurrentTurn] = useState("white");

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     if (selectedPiece) {
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );
//       if (isValid && selectedPiece.color === currentTurn) {
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null;
//         setBoard(newBoard);
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//         setCurrentTurn(currentTurn === "white" ? "black" : "white");
//       } else {
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//       }
//     } else if (piece && piece.color === currentTurn) {
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   // Render the checkered pattern and chess pieces
//   const renderBoard = () => {
//     return board.map((row, rowIndex) => (
//       <div key={rowIndex} className="board-row">
//         {row.map((piece, colIndex) => (
//           <Square
//             key={colIndex}
//             piece={piece}
//             onClick={() => handleSquareClick(rowIndex, colIndex)}
//             isDark={(rowIndex + colIndex) % 2 === 1} // Determine square color
//           />
//         ))}
//       </div>
//     ));
//   };

//   return (
//     <div className="chess-container">
//       <div className="chess-board">{renderBoard()}</div>
//       <div className="turn-info">
//         <h2>Current Turn: {currentTurn === "white" ? "White" : "Black"}</h2>
//       </div>
//     </div>
//   );
// };

// export default ChessBoard;

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import Square from "./Square"; // Import the Square component
// import { initializeBoard, isValidMove } from "../ChessLogic";
// import "./Chessboard.css"; // Ensure the CSS for chessboard styling is included

// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [currentTurn, setCurrentTurn] = useState("white");

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     if (selectedPiece) {
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );
//       if (isValid && selectedPiece.color === currentTurn) {
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null;
//         setBoard(newBoard);
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//         setCurrentTurn(currentTurn === "white" ? "black" : "white");
//       } else {
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//       }
//     } else if (piece && piece.color === currentTurn) {
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   // Overlay chess pieces on top of the checkered board
//   const renderBoard = () => {
//     return board.map((row, rowIndex) => (
//       <div key={rowIndex} className="board-row">
//         {row.map((piece, colIndex) => (
//           <Square
//             key={colIndex}
//             piece={piece}
//             onClick={() => handleSquareClick(rowIndex, colIndex)}
//             isDark={(rowIndex + colIndex) % 2 === 1} // Determine square color
//           />
//         ))}
//       </div>
//     ));
//   };

//   return (
//     <div className="chess-container">
//       {/* Render the checkered pattern first */}
//       <div className="chessboard">{renderBoard()}</div>
//       <div className="turn-info">
//         <h2>Current Turn: {currentTurn === "white" ? "White" : "Black"}</h2>
//       </div>
//     </div>
//   );
// };

// export default ChessBoard;

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import Square from "./Square"; // Import the Square component
// import { initializeBoard, isValidMove } from "../ChessLogic";
// import "./Chessboard.css"; // Ensure the CSS for chessboard styling is included

// const ChessBoard = () => {
//   const [board, setBoard] = useState(initializeBoard());
//   const [selectedPiece, setSelectedPiece] = useState(null);
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   const [currentTurn, setCurrentTurn] = useState("white");

//   const handleSquareClick = (row, col) => {
//     const piece = board[row][col];

//     if (selectedPiece) {
//       const isValid = isValidMove(
//         selectedPiece,
//         selectedPosition,
//         [row, col],
//         board
//       );
//       if (isValid && selectedPiece.color === currentTurn) {
//         const newBoard = [...board];
//         newBoard[row][col] = selectedPiece;
//         newBoard[selectedPosition[0]][selectedPosition[1]] = null;
//         setBoard(newBoard);
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//         setCurrentTurn(currentTurn === "white" ? "black" : "white");
//       } else {
//         setSelectedPiece(null);
//         setSelectedPosition(null);
//       }
//     } else if (piece && piece.color === currentTurn) {
//       setSelectedPiece(piece);
//       setSelectedPosition([row, col]);
//     }
//   };

//   // Overlay chess pieces on top of the checkered board
//   const renderBoard = () => {
//     return board.map((row, rowIndex) => (
//       <div key={rowIndex} className="board-row">
//         {row.map((piece, colIndex) => (
//           <Square
//             key={colIndex}
//             piece={piece}
//             onClick={() => handleSquareClick(rowIndex, colIndex)}
//             isDark={(rowIndex + colIndex) % 2 === 1} // Determine square color
//           />
//         ))}
//       </div>
//     ));
//   };

//   return (
//     <div className="chess-container">
//       {/* Render the checkered pattern first */}
//       <div className="chessboard">{renderBoard()}</div>
//       <div className="turn-info">
//         <h2>Current Turn: {currentTurn === "white" ? "White" : "Black"}</h2>
//       </div>
//     </div>
//   );
// };

// export default ChessBoard;

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import Square from "./Square"; // Import the Square component
import { initializeBoard, isValidMove } from "../ChessLogic";
import "./Chessboard.css"; // Ensure the CSS for chessboard styling is included

const ChessBoard = () => {
  const [board, setBoard] = useState(initializeBoard());
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [currentTurn, setCurrentTurn] = useState("white");
  const [whiteCaptured, setWhiteCaptured] = useState([]); // Array of captured black pieces
  const [blackCaptured, setBlackCaptured] = useState([]); // Array of captured white pieces
  const [winner, setWinner] = useState(null); // Track the winner

  const handleSquareClick = (row, col) => {
    if (winner) return; // Stop the game if there's a winner

    const piece = board[row][col];

    if (selectedPiece) {
      const isValid = isValidMove(
        selectedPiece,
        selectedPosition,
        [row, col],
        board
      );
      if (isValid && selectedPiece.color === currentTurn) {
        const newBoard = [...board];

        // Capture logic
        const capturedPiece = board[row][col];
        if (capturedPiece) {
          if (capturedPiece.color === "black") {
            setWhiteCaptured([...whiteCaptured, capturedPiece]);
          } else {
            setBlackCaptured([...blackCaptured, capturedPiece]);
          }

          // Check for game over (if the king is captured)
          if (capturedPiece.type === "king") {
            setWinner(currentTurn);
            return; // Stop further moves after capturing the king
          }
        }

        // Move the piece
        newBoard[row][col] = selectedPiece;
        newBoard[selectedPosition[0]][selectedPosition[1]] = null;
        setBoard(newBoard);
        setSelectedPiece(null);
        setSelectedPosition(null);
        setCurrentTurn(currentTurn === "white" ? "black" : "white");
      } else {
        setSelectedPiece(null);
        setSelectedPosition(null);
      }
    } else if (piece && piece.color === currentTurn) {
      setSelectedPiece(piece);
      setSelectedPosition([row, col]);
    }
  };

  // Overlay chess pieces on top of the checkered board
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((piece, colIndex) => (
          <Square
            key={colIndex}
            piece={piece}
            onClick={() => handleSquareClick(rowIndex, colIndex)}
            isDark={(rowIndex + colIndex) % 2 === 1} // Determine square color
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="chess-container">
      {/* Render the checkered pattern first */}
      <div className="chessboard">{renderBoard()}</div>
      <div className="info-panel">
        <h2>Current Turn: {currentTurn === "white" ? "White" : "Black"}</h2>
        <div className="score">
          <h3>White's Captured Pieces: {whiteCaptured.length}</h3>
          <h3>Black's Captured Pieces: {blackCaptured.length}</h3>
        </div>
        {winner && (
          <h2>{winner === "white" ? "White has won!" : "Black has won!"}</h2>
        )}
      </div>
    </div>
  );
};

export default ChessBoard;

import React from "react";

const Piece = ({ type, color }) => {
  return <span className={`piece ${color}`}>{type[0].toUpperCase()}</span>;
};

export default Piece;

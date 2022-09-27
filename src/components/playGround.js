import React from 'react';
import Chessboard from 'chessboardjsx';

const PlayGround = ({
  fen,
  onDrop,
  onMouseOverSquare,
  onMouseOutSquare,
  squareStyles,
  dropSquareStyle,
  onDragOverSquare,
  onSquareClick,
  onSquareRightClick,
}) => {
  return (
    <div className="game_Area">
      <Chessboard
        id="humanVsHuman"
        width={320}
        position={fen}
        onDrop={onDrop}
        onMouseOverSquare={onMouseOverSquare}
        onMouseOutSquare={onMouseOutSquare}
        boardStyle={{
          borderRadius: '5px',
          boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
        }}
        squareStyles={squareStyles}
        dropSquareStyle={dropSquareStyle}
        onDragOverSquare={onDragOverSquare}
        onSquareClick={onSquareClick}
        onSquareRightClick={onSquareRightClick}
      />
    </div>
  );
};
export default PlayGround;

import React, {useState} from 'react';
import {Chess} from 'chess.js';
import {squareStyling} from './styling';
import PlayGround from './playGround';

const game = new Chess();
const GameConfiguration = () => {
  const [state, setState] = useState({
    fen: 'start',
    dropSquareStyle: {},
    squareStyles: {},
    pieceSquare: '',
    square: '',
    history: [],
  });
  const removeHighlightSquare = () => {
    setState({
      ...state,
      squareStyles: squareStyling({
        pieceSquare: state.pieceSquare,
        history: state.history,
      }),
    });
  };
  const highlightSquare = (sourceSquare, squaresToHighlight) => {
    const highlightStyles = [sourceSquare, ...squaresToHighlight].reduce(
      (a, c) => {
        return {
          ...a,
          ...{
            [c]: {
              background:
                'radial-gradient(circle, #fffc00 36%, transparent 40%)',
              borderRadius: '50%',
            },
          },
          ...squareStyling({
            history: state.history,
            pieceSquare: state.pieceSquare,
          }),
        };
      },
      {}
    );
    setState({
      ...state,
      squareStyles: {...state.squareStyles, ...highlightStyles},
    });
  };
  const onDrop = ({sourceSquare, targetSquare}) => {
    let move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) {
      return;
    }
    setState({
      ...state,
      fen: game.fen(),
      history: game.history({verbose: true}),
      squareStyles: squareStyling({
        pieceSquare: state.pieceSquare,
        history: state.history,
      }),
    });
  };
  const onMouseOverSquare = (square) => {
    let moves = game.moves({
      square: square,
      verbose: true,
    });

    if (moves.length === 0) {
      return;
    }

    let squaresToHighlight = [];
    for (var i = 0; i < moves.length; i++) {
      squaresToHighlight.push(moves[i].to);
    }

    highlightSquare(square, squaresToHighlight);
  };
  const onMouseOutSquare = (square) => {
    removeHighlightSquare(square);
  };
  const onDragOverSquare = (square) => {
    setState({
      ...state,
      dropSquareStyle:
        square === 'e4' || square === 'd4' || square === 'e5' || square === 'd5'
          ? {backgroundColor: 'cornFlowerBlue'}
          : {boxShadow: 'inset 0 0 1px 4px rgb(255, 255, 0)'},
    });
  };
  const onSquareClick = (square) => {
    setState({
      ...state,
      squareStyles: squareStyling({
        pieceSquare: square,
        history: state.history,
      }),
      pieceSquare: square,
    });

    let move = game.move({
      from: state.pieceSquare,
      to: square,
    });
    if (move === null) {
      return;
    }
    setState({
      ...state,
      fen: game.fen(),
      history: game.history({verbose: true}),
      pieceSquare: '',
    });
  };
  const onSquareRightClick = (square) => {
    setState({
      ...state,
      squareStyles: {[square]: {backgroundColor: 'deepPink'}},
    });
  };
  return (
    <div>
      <PlayGround
        fen={state.fen}
        onDrop={onDrop}
        onMouseOverSquare={onMouseOverSquare}
        onMouseOutSquare={onMouseOutSquare}
        squareStyles={state.squareStyles}
        dropSquareStyle={state.dropSquareStyle}
        onDragOverSquare={onDragOverSquare}
        onSquareClick={onSquareClick}
        onSquareRightClick={onSquareRightClick}
      />
    </div>
  );
};
export default GameConfiguration;

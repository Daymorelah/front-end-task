import React from 'react';
import PropTypes from 'prop-types';
import BoardBox from './boardBox';

const GameBoard = ({ handleClickEvent, dimensions }) => {
  const boardDimension = dimensions[0]; let k = 0; const rows = [];
  const { height, width } = boardDimension;
  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      k += 1;
      rows.push(<BoardBox key={k} handleClickEvent={handleClickEvent} num={k} />);
    }
    k += 1;
    rows.push(<br key={k} />);
  }
  return (
    <div id="board">
      {rows}
    </div>
  );
};

GameBoard.propTypes = {
  handleClickEvent: PropTypes.func.isRequired,
  dimensions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GameBoard;

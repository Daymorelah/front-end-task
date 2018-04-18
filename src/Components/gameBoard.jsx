import React from 'react';
import PropTypes from 'prop-types';

const GameBoard = ({ mario, handleClickEvent, dimensions }) => {
  console.log('dimensions in gameboard is ', dimensions);
  const board = dimensions[0];
  const { height, width } = board;
  return (
    <div id="board">
      <button id="boardSquare1" className="boardSquare" onClick={event => handleClickEvent(event, 1)} />
      <button id="boardSquare2" className="boardSquare" onClick={event => handleClickEvent(event, 2)} />
      <button id="boardSquare3" className="boardSquare" onClick={event => handleClickEvent(event, 3)} />
      <button id="boardSquare4" className="boardSquare" onClick={event => handleClickEvent(event, 4)} />
      <button id="boardSquare5" className="boardSquare" onClick={event => handleClickEvent(event, 5)} />
      <button id="boardSquare6" className="boardSquare" onClick={event => handleClickEvent(event, 6)} />
      <button id="boardSquare7" className="boardSquare" onClick={event => handleClickEvent(event, 7)} />
      <div><img src={mario} alt="mario" width="25px" height="25px" /></div>
      <p>The board height is { height }</p>
      <p>The board width is {width}</p>
    </div>
  );
};

GameBoard.propTypes = {
  mario: PropTypes.string.isRequired,
  handleClickEvent: PropTypes.func.isRequired,
  dimensions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GameBoard;

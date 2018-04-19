import React from 'react';
import PropTypes from 'prop-types';

const BoardBox = ({ num, handleClickEvent }) => {
  const buttonId = `boardSquare${num}`;
  return (
    <button id={buttonId} className="boardSquare" onClick={event => handleClickEvent(event, num)} />);
};

BoardBox.propTypes = {
  num: PropTypes.number.isRequired,
  handleClickEvent: PropTypes.func.isRequired,
};

export default BoardBox;

import React from 'react';
import PropTypes from 'prop-types';

const BoardBox = ({ num, handleClickEvent }) => (
  <button id={`boardSquare${num}`} className="boardSquare" onClick={event => handleClickEvent(event, num)} />
);


BoardBox.propTypes = {
  num: PropTypes.number.isRequired,
  handleClickEvent: PropTypes.func.isRequired,
};

export default BoardBox;

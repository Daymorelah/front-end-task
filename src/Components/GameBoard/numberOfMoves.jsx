import React from 'react';
import PropTypes from 'prop-types';

const NumberOfMoves = ({ moves }) => (
  <div className="text-center text">{
      moves > 1 ?
        <p>You made a total of {moves} moves</p> :
        <p>You made a total of {moves} move</p>
    }
  </div>
);

NumberOfMoves.propTypes = {
  moves: PropTypes.number.isRequired,
};

export default NumberOfMoves;

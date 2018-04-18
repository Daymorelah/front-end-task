import * as actionTypes from './actionTypes';

export default function setBoardDimensions(dimensions) {
  return {
    type: actionTypes.SET_BOARD_DIMENSIONS,
    dimensions,
  };
}


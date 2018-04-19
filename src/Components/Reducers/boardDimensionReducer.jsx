import * as actionTypes from '../Actions/actionTypes';
import initialState from './initialState';

export default function boardDimensionReducer(state = initialState.dimensions, action) {
  switch (action.type) {
    case actionTypes.SET_BOARD_DIMENSIONS:
      return [
        ...state,
        Object.assign({}, action.dimensions),
      ];

    default:
      return state;
  }
}

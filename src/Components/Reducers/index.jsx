import { combineReducers } from 'redux';
import dimensions from './boardDimensionReducer';

const rootReducer = combineReducers({
  dimensions,
});

export default rootReducer;

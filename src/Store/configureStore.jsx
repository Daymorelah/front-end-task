import { createStore, compose } from 'redux';
import RootReducer from '../Components/Reducers';

const configureStore = initialState => createStore(
  RootReducer,
  /* eslint-disable no-undef, no-underscore-dangle */
  initialState, compose(window.REDUX_DEVTOOLS_EXTENSION__ ?
    window.REDUX_DEVTOOLS_EXTENSION__() : functional => functional),
);
const store = configureStore();

export default store;

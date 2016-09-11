import { createStore, compose, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools()
  );

  return createStore(rootReducer, initialState, enhancer);
}

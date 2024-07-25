import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import movieReducer from './reducers/index';

const myStore = createStore(movieReducer, applyMiddleware(logger));

export { myStore };

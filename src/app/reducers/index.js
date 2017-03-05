import { combineReducers } from 'redux';
import bookReducer from './bookreducer';

const rootReducer = combineReducers({
  books: bookReducer
});

export default rootReducer;
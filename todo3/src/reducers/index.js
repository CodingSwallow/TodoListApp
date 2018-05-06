import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  currentFilter: menuReducer
});

export default rootReducer;
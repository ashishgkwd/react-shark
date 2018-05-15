import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

export default combineReducers({
    // shorthand syntax to pass in state returned by todos reducer as 'todos' key in state object
    todos,
    filter,
});

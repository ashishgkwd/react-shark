import * as constants from '../constants';

export const addTodo = todoName => ({ type: constants.ADD_TODO, todoName });

export const markComplete = todoId => ({ type: constants.MARK_COMPLETE, todoId });

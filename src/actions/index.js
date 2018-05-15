import * as constants from '../constants';

export const addTodo = todoName => ({ type: constants.ADD_TODO, todoName });

export const markComplete = todoId => ({ type: constants.MARK_COMPLETE, todoId });

export const showAll = () => ({ type: constants.ALL });

export const showOpen = () => ({ type: constants.OPEN });

export const showComplete = () => ({ type: constants.COMPLETE });

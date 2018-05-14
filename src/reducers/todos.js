import * as constants from '../constants';

let itemId = 0;

const getNewItem = text => ({ id: itemId++, name: text, isComplete: false });

const markItemComplete = (id, state) => {
    const newState = [...state];
    const item = newState.find(x => x.id === id);
    item.isComplete = !item.isComplete;
    return newState;
};

const todos = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_TODO:
            return [...state, getNewItem(action.todoName)];

        case constants.MARK_COMPLETE:
            return markItemComplete(action.todoId, state);

        default:
            return state;
    }
};

export default todos;

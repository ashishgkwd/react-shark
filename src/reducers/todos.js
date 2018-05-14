import * as constants from '../constants';

let itemId = 0;

const getNewItem = text => ({ id: itemId++, name: text, isComplete: false });

const markItemComplete = (id, state) => {
    const item = state.find(x => x.id === id);
    item.isComplete = true;
};

const todos = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_TODO:
            return [...state, getNewItem(action.todoName)];

        case constants.MARK_COMPLETE:
            markItemComplete(action.todoId, state);
            return [...state];

        default:
            return state;
    }
};

export default todos;

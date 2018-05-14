import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ item, onItemComplete }) => {
    const completeTodo = () => {
        onItemComplete(item.id);
    };

    const completeOnKeyUp = () => {
        completeTodo();
    };

    return (
        <div
            role="link"
            className={item.isComplete ? 'complete-todo-listitem' : 'todo-listitem'}
            onKeyUp={completeOnKeyUp}
            onClick={completeTodo}
        >{item.name}
        </div>
    );
};

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
    onItemComplete: PropTypes.func.isRequired,
};

export default TodoItem;

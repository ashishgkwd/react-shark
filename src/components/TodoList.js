import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoList = ({ todoList, onItemComplete }) => {
    const todosList = todoList.map(todo => (<li key={todo.id}>
                                                <TodoItem
                                                item={todo}
                                                onItemComplete={onItemComplete}
                                                />
                                            </li>));

    return (
        <ul>
            {todosList}
        </ul>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onItemComplete: PropTypes.func.isRequired,
};

export default TodoList;

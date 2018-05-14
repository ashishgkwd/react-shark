import React from 'react';

import AddTodo from '../components/AddTodo';
import TodoListContainer from './TodoListContainer';

const TodoApp = () => (
    <div>
        <AddTodo />
        <TodoListContainer />
    </div>
);

export default TodoApp;

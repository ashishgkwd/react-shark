import React from 'react';

import AddTodo from '../components/AddTodo';
import TodoListContainer from './TodoListContainer';
import FilterContainer from './FilterContainer';

const TodoApp = () => (
    <div>
        <FilterContainer />
        <AddTodo />
        <TodoListContainer />
    </div>
);

export default TodoApp;

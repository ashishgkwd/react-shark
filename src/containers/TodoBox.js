import React, { Component } from 'react';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.itemId = 0;
        this.state = {
            todos: [
                { id: this.getNewItemId(), name: 'hey', isComplete: false },
                { id: this.getNewItemId(), name: 'ho', isComplete: false },
            ],

        };
    }

    onNewTodo = (newTodo) => {
        const item = { id: this.getNewItemId(), name: newTodo, isComplete: false };
        this.setState(state => ({
            todos: [...state.todos, item],
        }));
    }

    onItemComplete = (id) => {
        const item = this.state.todos.find(x => x.id === id);
        item.isComplete = true;
        this.setState(state => ({
            todos: [...state.todos],
        }));
    }

    getNewItemId = () => this.itemId++;

    render() {
        return (
            <div>
                <AddTodo addNewTodo={this.onNewTodo} />
                <TodoList todoList={this.state.todos} onItemComplete={this.onItemComplete} />
            </div>
        );
    }
}

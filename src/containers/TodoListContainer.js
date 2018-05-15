import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { markComplete } from '../actions';
import * as constants from '../constants';

const getFilteredTodos = (todos, filter) => {
    const filteredTodos = [...todos];
    switch (filter) {
        case constants.ALL:
            return filteredTodos;

        case constants.OPEN:
            return filteredTodos.filter(todo => !todo.isComplete);

        case constants.COMPLETE:
            return filteredTodos.filter(todo => todo.isComplete);

        default:
            return filteredTodos;
    }
};

const mapStateToProps = state => ({
    todoList: getFilteredTodos(state.todos, state.filter),
});

const mapDispatchToProps = dispatch => ({
    onItemComplete: id => dispatch(markComplete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

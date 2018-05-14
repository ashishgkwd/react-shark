import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { markComplete } from '../actions';

const mapStateToProps = state => ({
    todoList: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onItemComplete: id => dispatch(markComplete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

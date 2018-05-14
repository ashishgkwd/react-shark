import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
    let currentItem;
    let input;

    const handleOnClick = (event) => {
        event.preventDefault();
        dispatch(addTodo(currentItem));
        input.value = '';
    };

    const onInputBlur = (event) => {
        const { value } = event.target;
        currentItem = value;
        input = event.target;
    };

    return (
        <div>
            <form onSubmit={handleOnClick}>
                <span className="addtodo-form">
                <input type="text" id="newTodo" placeholder="Add New Todo " onBlur={onInputBlur} />
                <input type="submit" value="Add" />
                </span>
            </form>
        </div>
    );
};

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
    let currentItem;
    let input;

    const handleOnClick = (event) => {
        event.preventDefault();
        if (currentItem) {
            dispatch(addTodo(currentItem));
            input.value = '';
            currentItem = '';
        }
    };

    const onInputBlur = (event) => {
        const { value } = event.target;
        currentItem = value;
        input = event.target;
    };

    return (
        <div>
            <form onSubmit={handleOnClick}>
                <input type="text" id="newTodo" placeholder="Add New Todo " onBlur={onInputBlur} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);

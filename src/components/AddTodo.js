import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ addNewTodo }) => {
    let currentItem;
    let input;

    const handleOnClick = (event) => {
        event.preventDefault();
        addNewTodo(currentItem);
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
    addNewTodo: PropTypes.func.isRequired,
};

export default AddTodo;

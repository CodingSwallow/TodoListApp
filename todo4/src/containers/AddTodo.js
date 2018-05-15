import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import store from '../store/index'

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div className='add-todo'>
            <input
                type="text"
                ref={ node => input = node }
                onKeyDown={
                    (e) => {
                        if (e.keyCode === 13 && input.value !== '') {
                            dispatch(addTodo(input.value));
                            input.value = '';
                        } 
                    }
                }
                placeholder="please input event to do..."/>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
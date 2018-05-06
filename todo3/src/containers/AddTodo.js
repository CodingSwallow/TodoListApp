import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div className='list-add'>
        <input 
            type='text'
            ref={node => input = node}
            onKeyDown={
              (e) => {
                if (e.keyCode === 13 && input.value !== '') { 
                  dispatch(addTodo(input.value));
                  input.value = '';
                } 
              }
            }
            placeholder='please input an event to do...'/>
    </div>
  )
}

export default connect()(AddTodo)
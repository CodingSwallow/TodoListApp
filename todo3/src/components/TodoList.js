import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, count, toggleTodo, delTodo }) => {
    return (
        <div className='lists'>
            <p className='count-board'>{`{ `}items: {count}{` }`}</p>
            { todos.map( (item, index) => {
                return (
                    <Todo
                        key={index}
                        index={index}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                        toggleTodo={toggleTodo}
                        delTodo={delTodo}
                        />
                )
            } )}
        </div>
    )
}

export default TodoList;
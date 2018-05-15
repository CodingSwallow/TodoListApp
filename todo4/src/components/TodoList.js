import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, count, toggleTodo, delTodo }) => (
    <ul className='todo-list'>
        <li className='todo-list-count'>{`items: ${count}`}</li>
        {todos.map((todo) => (
            <Todo
                key={ todo.id }
                id={ todo.id }
                text={ todo.text }
                completed={ todo.completed }
                toggle={ toggleTodo }
                del={ delTodo } />
        ))}
    </ul>
);

export default TodoList
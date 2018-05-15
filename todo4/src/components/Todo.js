import React from 'react'

const Todo = ({ id, text, completed, toggle, del }) => (
    <li className={`todo-list-item ${completed?'complete':''}`} >
        <p><input
            checked={ completed }
            type='checkbox'
            onChange={ () => { console.log('toggle id:'+id); toggle(id) } } /></p>
        <p>{ text }</p>
        <p><button onClick={ () => { console.log('del id:'+id); del(id) }}>Del</button></p>
    </li>
);

export default Todo
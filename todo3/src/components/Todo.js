import React from 'react';

const Todo = ({ id, completed, text, toggleTodo, delTodo }) => {
    return (
        <div className={`list-item ${completed?'complete':''}`}>
            <div>
                <input
                    type='checkbox' 
                    checked={ completed }
                    onChange={ () => { console.log('toggle id:'+id); toggleTodo(id) } }/>
            </div>
            <div><p>{ text }</p></div>
            <div><button onClick={ () => { console.log('del id:'+id); delTodo(id) } }>del</button></div>
        </div>
    )
}

export default Todo;

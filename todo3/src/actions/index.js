let nextTodoId = 0;
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId ++,
    text
})

export const delTodo = (id) => ({
    type: 'DEL_TODO',
    id
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
}) 

export const completeTodo = () => ({
    type: 'COMPLETE_TODO'
})

export const clearTodo = () => ({
    type: 'CLEAR_TODO'
})

export const setVisibility = (filter) => ({
    type: 'SET_VISIBILITY',
    filter
})

export const Switches = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
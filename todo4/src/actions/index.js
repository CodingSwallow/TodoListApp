let nextTodoId = 2;
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
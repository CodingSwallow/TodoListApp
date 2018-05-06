const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
          return todo
        } else {
          return todo
        }
      })
    case 'DEL_TODO':
      return state.filter((todo) => {
        return todo.id !== action.id
      })
    case 'COMPLETE_TODO':
      return state.map((todo) => {
        return todo.completed = !todo.completed
      })
    case 'CLEAR_TODO':
      return []
    default:
      return state
  }
}

export default todoReducer

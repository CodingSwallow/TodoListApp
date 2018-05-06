import { connect } from "react-redux";
import TodoList from '../components/TodoList';
import { toggleTodo, delTodo } from '../actions/index';
import { Switches } from '../actions/index';

const getVisibleTodos = (todos, currentFilter) => {
    switch (currentFilter) {
      case Switches.SHOW_ALL:
        return todos
      case Switches.SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed)
      case Switches.SHOW_ACTIVE:
        return todos.filter((todo) => !todo.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => {
    let visibleTodos = getVisibleTodos(state.todos, state.currentFilter);
    return {
        todos: visibleTodos,
        count: visibleTodos.length
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => dispatch(toggleTodo(id)),
        delTodo: (id) => dispatch(delTodo(id))
    }
}

const ViewTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default ViewTodoList;

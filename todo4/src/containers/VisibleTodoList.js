import { connect } from 'react-redux'
import TodoList from '../Components/TodoList'
import { toggleTodo, delTodo } from '../actions/index'
import { withRouter } from 'react-router'

const getVisibleTodos = (state, filter) => {
    console.log(filter);
    switch(filter) {
        case 'all':
            return state;
        case 'active':
            return state.filter(t => !t.completed);
        case 'completed':
            return state.filter(t => t.completed);
        default:
            return state;
    }
};

const mapStateToProps = (state, { match }) => {
    let visibleTodos = getVisibleTodos(
        state, 
        match.params.filter || "all"
    );
    return {
        todos: visibleTodos,
        count: visibleTodos.length
    }
};

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    delTodo: (id) => dispatch(delTodo(id))
})

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList));

export default VisibleTodoList
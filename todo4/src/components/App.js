import React from 'react'
import Header from '../components/Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import css from '../scss/todo.scss'

const App = () => (
  <div className='todo-app'>  
    <Header />
    <AddTodo />
    <VisibleTodoList />
  </div>
);

export default App;
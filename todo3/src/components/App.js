import React from "react";
import Header from '../components/Header';
import Footer from "./Footer";
import AddTodo from '../containers/AddTodo';
import css from '../scss/app.scss';
import ViewTodoList from "../containers/ViewTodoList";

const App = () => (
  <div className='todo-app'>
    <Header />
    <AddTodo />
    <ViewTodoList />
    <Footer />
  </div>
);

export default App;
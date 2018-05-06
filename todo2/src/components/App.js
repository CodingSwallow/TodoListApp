import React, { Component } from 'react';
import Header from './Header';
import Lists from './Lists';
import Add from './Add';

import '../scss/app.scss';

class App extends Component {
  constructor (props) {
    super();
    this.state = {
      todos: [],
      view:'All'
    }
  }
  componentWillMount () {
    this._loadTodos();
  }
  addNewTodo(text) {
    let lists = this.state.todos;
    let new_todo = {
      'id':lists.length,
      'text':text,
      'complete':false
    };
    lists.push(new_todo);
    this.setState( { todos:lists } );
    this._saveTodos(lists);
  }
  delTodo (index) {
    let lists = this.state.todos;
    lists.splice(index, 1);
    this.setState( { todos:lists } );
    this._saveTodos(lists);
  }
  completeTodo (index) {
    let lists = this.state.todos;
    lists[index].complete = !lists[index].complete;
    this.setState( { todos:lists } );
    this._saveTodos(lists);
  }
  toggleMenu (event) {
    let pureText = event.target.innerText.split(' ')[0];
    console.log(pureText);
    this.setState( {view:pureText } );
  }
  completeAll () {
    let lists = this.state.todos;
    let completeLists = [];
    lists.forEach((item) => {
      item.complete = true;
      completeLists.push(item);
    });
    this.setState( { todos: completeLists } );
    this._saveTodos(completeLists);
  }
  clearAll () {
    this.setState( { todos:[] } );
    this._saveTodos([]);
  }
  _loadTodos () {
    let todos = localStorage.getItem('todos');
    if (todos) {
      todos = JSON.parse(todos);
      this.setState( { todos:todos } );
    }
  }
  _saveTodos (todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  _countAll () {
    return this.state.todos.length;
  }
  _countComplete () {
    let completeds = this.state.todos.filter((item) => {
      return item.complete === true;
    });
    return completeds.length;
  }
  _countActive () {
    return this._countAll() - this._countComplete();
  }
  render() {
    return (
      <div className="todo-app">
        <Header />
        <Add onAdd={ this.addNewTodo.bind(this) }/>
        <div className='menu'>
          <button 
            className={this.state.view==='All'?'active':''}
            onClick={ this.toggleMenu.bind(this) }>
            All ({this._countAll()})
          </button>
          <button 
            className={this.state.view==='Active'?'active':''}
            onClick={ this.toggleMenu.bind(this) } >
            Active ({this._countActive()})
          </button>
          <button 
            className={this.state.view==='Completed'?'active':''}
            onClick={ this.toggleMenu.bind(this) }>
            Completed ({this._countComplete()})
          </button>
        </div>
        <Lists 
          lists={ this.state.todos }
          onDelTop={ this.delTodo.bind(this) }
          onComTop={ this.completeTodo.bind(this) }
          view={ this.state.view } />
        <div className='options'>
          <button onClick={ this.completeAll.bind(this) }>Complete All</button>
          <button onClick={ this.clearAll.bind(this) } >Clear All</button>
        </div>
      </div>
    );
  }
}

export default App;

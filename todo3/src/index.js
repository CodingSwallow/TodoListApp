import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

//console.log(todoReducer);
let initialState = JSON.parse(localStorage.getItem('state'));
if (initialState === null) {
  initialState = {}
}

// 创建唯一的store
const store = createStore(rootReducer, initialState);

store.subscribe(function(){
  localStorage.setItem('state', JSON.stringify(store.getState()));
  //console.log(store.getState().todos);
})

render(
  <Provider store={store}>
    {/* Provider 使App的所有子组件拿到state ，原理是React的context对象*/}
    <App />
  </Provider>,
  document.getElementById('root')
)
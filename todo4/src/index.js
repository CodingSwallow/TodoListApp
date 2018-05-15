import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/index'
import App from './components/App'

store.subscribe(function(){
  //console.log(store.getState());
})

render(
  <Provider store={ store } >
    <BrowserRouter>
      <Route path='/:filter?' component={ App } />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
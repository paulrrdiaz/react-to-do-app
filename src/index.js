import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Tasks from './containers/Tasks'
import reducers from './reducers'

import './styles/index.scss'

const store = createStore(reducers)

const root = document.getElementById('root')
root ? ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Tasks} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , root) : false
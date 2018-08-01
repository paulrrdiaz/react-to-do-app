import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import { throttle } from 'lodash'
import { loadState, saveState } from './localStorage'

import Home from './pages/Home'
import EditTask from './containers/EditTask'
import RemoveTask from './components/removeTask'
import reducers from './reducers'

import './styles/index.scss'

const preloadedState = loadState()

const store = createStore(
  reducers,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

store.subscribe(throttle(() => {
  saveState({
    tasks: store.getState().tasks,
  });
}, 1000));

const root = document.getElementById('root')
root ? ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className="wrapper">
        <Route
          path="/:filter?"
          component={Home} />
        <Route
          exact 
          path="/:filter/task/:id" 
          component={EditTask} />
        <Route
          path="/:filter/task/:id/delete" 
          component={RemoveTask} />
      </div>
    </HashRouter>
  </Provider>
  , root) : false
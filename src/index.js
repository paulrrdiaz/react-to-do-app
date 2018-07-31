import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { throttle } from 'lodash'
import { loadState, saveState } from './localStorage'

import Home from './pages/Home'
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
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/:filter" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>
  , root) : false
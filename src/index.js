import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/app'
import Welcome from './components/welcome'
import Signup from './components/auth/signup'
import Feature from './components/feature'
import Signout from './components/auth/signout'
import Signin from './components/auth/signin'

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/feature" exact component={Feature} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/signin" exact component={Signin} />
      </App>
    </Router>
  </Provider>,
  document.querySelector('#root')
)

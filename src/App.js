import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import '~/config/ReactotronConfig'

import GlobalStyles from './styles/global'
import { history } from './services'
import store from './store'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  )
}

export default App

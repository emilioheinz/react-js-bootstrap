import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import '~/config/ReactotronConfig'

import history from '~/services/history'
import store from '~/redux'
import Routes from '~/routes'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App

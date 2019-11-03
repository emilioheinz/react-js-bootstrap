import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import '~/config/ReactotronConfig'

import GlobalStyles from './styles/global'
import { history } from './services'
import { store, persistor } from './store'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyles />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App

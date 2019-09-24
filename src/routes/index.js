import React from 'react'
import { Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'

import Route from './Route'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/profile' component={Profile} />
    </Switch>
  )
}

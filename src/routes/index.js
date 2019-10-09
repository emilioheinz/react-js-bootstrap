import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import { Home, Profile } from '~/pages'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/profile' component={Profile} />
    </Switch>
  )
}

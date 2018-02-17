import React from 'react'
import { Route } from 'react-router-dom'

import AccountContainer from 'components/account'
import HomeContainer from 'components/home'

const AuthenticatedRoutes = () => [
  <Route path='/account' component={AccountContainer} key='auth-route-0' />,
  <Route path='/home' component={HomeContainer} key='auth-route-1' />
]

export default AuthenticatedRoutes

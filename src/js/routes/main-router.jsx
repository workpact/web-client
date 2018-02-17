import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import AuthenticatedRoutes from './authenticated-routes'
import LandingContainer from 'components/landing'
import LoginFormContainer from 'components/forms/login-form'
import NewUserFormContainer from 'components/forms/new-user-form'

import FourOhFour from 'pages/four-oh-four.jsx'

const MainRouter = ({ user }) => {
  return (
    <main id='main-content'>
      <Switch>
        <Route exact path='/' component={LandingContainer} />
        <Route
          path='/login'
          render={() =>
            user && user.loaded && user.id ? (
              <Redirect to='/' />
            ) : (
              <LoginFormContainer />
            )
          }
        />
        <Route
          path='/new'
          render={() =>
            user && user.loaded && user.id ? (
              <Redirect to='/' />
            ) : (
              <NewUserFormContainer />
            )
          }
        />
        {AuthenticatedRoutes}
        <Route path='*' component={FourOhFour} />
      </Switch>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user || {}
  }
}

export default withRouter(connect(mapStateToProps)(MainRouter))

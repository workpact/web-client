import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import AuthenticatedRoutes from './authenticated-routes'
import HowItWorks from 'components/how-it-works'
import LandingContainer from 'components/landing'
import LoginFormContainer from 'components/forms/login-form'
import NewUserFormContainer from 'components/forms/new-user-form'
import DirectoryContainer from 'components/directory'
import ProjectListings from 'components/project-listings'
import UserContainer from 'components/user'

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
        <Route path='/contractors' component={DirectoryContainer} />
        <Route path='/projects' component={ProjectListings} />
        <Route path='/user/:id' component={UserContainer} />
        <Route path='/how-it-works' component={HowItWorks} />
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

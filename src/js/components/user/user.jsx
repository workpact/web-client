import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getUser } from 'redux-store/actions/userActions'
import { UserType } from 'types'

class UserContainer extends React.Component {
  static propTypes = {
    getUser: PropTypes.func,
    user: PropTypes.shape(UserType)
  };

  componentWillReceiveProps = async newProps => {
    if (newProps.getUser && !this.props.getUser) {
      try {
        await newProps.getUser()
      } catch (err) {
        console.log('get user error:', err) // eslint-disable-line no-console
      }
    }
  };

  componentDidMount = async () => {
    if (this.props.getUser) {
      try {
        await this.props.getUser()
      } catch (err) {
        console.log('get user error:', err) // eslint-disable-line no-console
      }
    }
  };

  render() {
    return <div>hello user world</div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserContainer)
)

import React from 'react'
import { withRouter } from 'react-router'

import User from './presentation/user'

class UserContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: {}
    }
  }

  componentDidMount = async () => {
    try {
      const user = await WebService.getUser(this.props.match.params.id)
      this.setState({
        userInfo: user.data
      })
    } catch (err) {
      console.log('get user error:', err) // eslint-disable-line no-console
    }
  };

  render() {
    const { userInfo: user } = this.state
    return <User content={user} />
  }
}

export default withRouter(UserContainer)

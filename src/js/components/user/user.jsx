import React from 'react'
import { withRouter } from 'react-router'

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
    return (
      <div>
        <div>hello user world</div>
        <pre>{JSON.stringify(this.state.userInfo, null, 4)}</pre>
      </div>
    )
  }
}

export default withRouter(UserContainer)

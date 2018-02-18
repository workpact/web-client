import React from 'react'

import Landing from './presentation/landing'

class LandingContainer extends React.Component {
  state = {
    content: {}
  };

  componentDidMount() {}

  render() {
    const { content } = this.state
    return <Landing content={content} />
  }
}

export default LandingContainer

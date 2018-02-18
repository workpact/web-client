import React from 'react'
import { withRouter } from 'react-router'

import ProjectListings from './presentation/project-listings'

class ProjectListingsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      listings: []
    }
  }

  componentDidMount = async () => {
    try {
      const { data: listings } = await WebService.getListings()
      this.setState({ listings })
    } catch (err) {
      console.log('get listings error:', err) // eslint-disable-line no-console
    }
  };

  render() {
    return <ProjectListings listings={this.state.listings} />
  }
}

export default withRouter(ProjectListingsContainer)

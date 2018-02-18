import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getListings } from 'redux-store/actions/listingActions'
import { ListingType } from 'types'

class DirectoryContainer extends React.Component {
  static propTypes = {
    getListings: PropTypes.func,
    listings: PropTypes.arrayOf(PropTypes.shape(ListingType))
  };

  componentWillReceiveProps = async newProps => {
    if (newProps.getListings && !this.props.getListings) {
      try {
        await newProps.getListings()
      } catch (err) {
        console.log('get listings error:', err) // eslint-disable-line no-console
      }
    }
  };

  componentDidMount = async () => {
    if (this.props.getListings) {
      try {
        await this.props.getListings()
      } catch (err) {
        console.log('get listings error:', err) // eslint-disable-line no-console
      }
    }
  };

  render() {
    return (
      <div>
        <div>hello directory world</div>
        <pre>{JSON.stringify(this.props.listings, null, 4)}</pre>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getListings: () => dispatch(getListings())
  }
}

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DirectoryContainer)
)

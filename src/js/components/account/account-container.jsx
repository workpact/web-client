import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AccountType } from 'util/types'

class AccountContainer extends React.Component {
  static propTypes = {
    account: PropTypes.shape(AccountType)
  };

  render() {
    const { account } = this.props

    return <Account account={account} />
  }
}

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(AccountContainer)

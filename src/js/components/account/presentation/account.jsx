import React from 'react'
import PropTypes from 'prop-types'

import { AccountType } from 'util/types'

const Account = ({ account }) => {
  return (
    <div className='Account'>
      <h2 className='Account-header'>Account Page</h2>
      <div className='Account-details'>
        <dl>
          <dt>ID:</dt>
          <dd>{account.id}</dd>
        </dl>
      </div>
    </div>
  )
}

Account.propTypes = {
  account: PropTypes.shape(AccountType)
}

export default Account

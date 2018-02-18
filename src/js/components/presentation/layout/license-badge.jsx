import React from 'react'
import PropTypes from 'prop-types'

import 'styles/components/license-badge'

const LicenseBadge = ({ type }) => {
  return (
    <div className={`LicenseBadge LicenseBadge--${type}`}>
      <span className='u-sr-only'>Licensed {type}</span>
    </div>
  )
}

LicenseBadge.propTypes = {
  type: PropTypes.string.isRequired
}

export default LicenseBadge

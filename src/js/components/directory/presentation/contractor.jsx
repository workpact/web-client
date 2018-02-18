import React from 'react'
import PropTypes from 'prop-types'

const Contractor = ({ index, ...props }) => {
  return (
    <li key={`contractor-${index}`} className='Directory-contractor'>
      <h3 className='Directory-contractor-name'>{props.username}</h3>
    </li>
  )
}

Contractor.propTypes = {
  index: PropTypes.number.isRequired
}

export default Contractor

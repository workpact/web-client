import React from 'react'
// import PropTypes from 'prop-types'

const Contractor = props => {
  return (
    <li key={`contractor-${props.id}`} className='Directory-contractor'>
      <h3 className='Directory-contractor-name'>{props.name}</h3>
    </li>
  )
}

Contractor.propTypes = {}

export default Contractor

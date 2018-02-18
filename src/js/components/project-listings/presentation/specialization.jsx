import React from 'react'

import LicenseBadge from 'presentation/layout/license-badge'

const Specialization = ({ data: specialization }) => {
  return (
    <span className='ProjectListings-listing-specialization'>
      <LicenseBadge type={specialization} />
      <span>Hiring: {specialization}</span>
    </span>
  )
}

export default Specialization

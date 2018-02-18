import React from 'react'

import Specialization from './specialization'
import Start from './start'
import End from './end'
import Price from './price'
import Description from './description'
import Issuer from './issuer'
import Status from './status'

const Listing = ({ listing }) => {
  listing = listing || {}

  return (
    <div className='Listings-listing'>
      <Specialization data={listing.specialization} />
      <Start data={listing.startDate.toLocaleDateString()} />
      <End data={listing.endDate.toLocaleDateString()} />
      <Price data={listing.price} />
      <Description data={listing.description} />
      <Issuer data={listing.issuer} />
      <Status data={listing.status} />
    </div>
  )
}

export default Listing

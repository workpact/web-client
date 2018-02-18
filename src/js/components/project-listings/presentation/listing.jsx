import React from 'react'

import Specialization from './specialization'
import Start from './start'
import End from './end'
import Price from './price'
import Description from './description'
import Issuer from './issuer'
import Status from './status'

import { humanFormatDate } from 'util/helpers'

const Listing = ({ listing }) => {
  listing = listing || {}

  return (
    <div className='ProjectListings-listing'>
      <Specialization data={listing.specialization} />
      <div className='ProjectListings-listing-date'>
        <Start data={humanFormatDate(listing.startDate)} />
        <End data={humanFormatDate(listing.endDate)} />
      </div>
      <Price data={listing.price.toFixed(7)} />
      <div>
        <Description data={listing.description} />
        <Issuer data={listing.issuer} />
      </div>
      <Status data={listing.status} />
    </div>
  )
}

export default Listing

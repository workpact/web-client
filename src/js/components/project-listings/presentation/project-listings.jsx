import React from 'react'

import Listing from './listing'

const ProjectListings = ({ listings }) => {
  listings = listings || []

  const renderListings = listings => {
    return listings.map((listing, i) => (
      <Listing key={`listing-${i}`} listing={listing} />
    ))
  }
  return <div className='Listings'>{renderListings(listings)}</div>
}

export default ProjectListings

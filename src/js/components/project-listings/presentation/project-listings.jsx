import React from 'react'
import { Form } from 'bloom-forms'

import Listing from './listing'
import ProjectListingFilters from './project-listing-filters'

import 'styles/components/project-listings'

const ProjectListings = ({ listings }) => {
  listings = listings || []

  const renderListings = listings => {
    return (
      <div className='ProjectListings'>
        <Form
          id='project-listings-filters'
          fieldNames={[]}
          submitForm={() => ''}
        >
          <ProjectListingFilters />
        </Form>
        {listings.map((listing, i) => (
          <Listing key={`listing-${i}`} listing={listing} />
        ))}
      </div>
    )
  }
  return <div className='Listings'>{renderListings(listings)}</div>
}

export default ProjectListings

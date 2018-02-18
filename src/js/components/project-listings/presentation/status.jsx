import React from 'react'

const Status = ({ data: status }) => {
  return (
    <dl className='ProjectListings-listing-status'>
      <dt>Status</dt>
      <dd>{status}</dd>
    </dl>
  )
}

export default Status

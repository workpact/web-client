import React from 'react'

const Issuer = ({ data }) => {
  const issuer = data || {}

  return (
    <div className='ProjectListings-listing-issuer'>{issuer.username}</div>
  )
}

export default Issuer

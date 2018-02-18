import React from 'react'

const Issuer = ({ data }) => {
  const issuer = data || {}

  return <span className='Listings-listing-issuer'>{issuer.username}</span>
}

export default Issuer

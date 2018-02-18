import React from 'react'

import LicenseBadge from 'presentation/layout/license-badge'

const BrowseCTA = () => {
  return (
    <div className='Landing-cta'>
      FIND A CONTRACTOR
      <LicenseBadge type='carpenter' />
      <LicenseBadge type='plumber' />
      <LicenseBadge type='electrician' />
    </div>
  )
}

export default BrowseCTA

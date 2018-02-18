import React from 'react'

import LicenseBadge from 'presentation/layout/license-badge'

const BrowseCTA = () => {
  return (
    <div className='Landing-cta'>
      <h2 className='Landing-subheader'>Find a Contractor</h2>
      <p>
        Licensed professionals from every field use our system to create secure,
        guaranteed contracts.
      </p>

      <div className='Landing-badgeWrapper'>
        <div className='Landing-badge'>
          <LicenseBadge type='carpenter-1' />
          <div>Carpenters</div>
        </div>
        <div className='Landing-badge'>
          <LicenseBadge type='plumber-1' />
          <div>Plumbers</div>
        </div>
        <div className='Landing-badge'>
          <LicenseBadge type='electrician-1' />
          <div>Electricians</div>
        </div>
        <div className='Landing-badge'>
          <LicenseBadge type='general-1' />
          <div>General Contractors</div>
        </div>
        <div className='Landing-badge'>
          <LicenseBadge type='mechanic-1' />
          <div>Mechanics</div>
        </div>
      </div>
    </div>
  )
}

export default BrowseCTA

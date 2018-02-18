import React from 'react'
import { Button } from 'bloom-forms'

const Hero = () => {
  return (
    <div className='Landing-hero'>
      <h2 className='Landing-subheader'>
        BUILD REPUTATION<br />ENSURE PAYMENT.
      </h2>
      <div className='Landing-hero-action'>
        <Button contents='START A PROJECT' className='Btn' />
      </div>
    </div>
  )
}

export default Hero

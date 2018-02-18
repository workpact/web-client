import React from 'react'

import Hero from './hero'
import BrowseCTA from './browse-cta'
import Metrics from './metrics'

import 'styles/components/landing'

const Landing = () => {
  return (
    <div className='Landing'>
      <Hero />
      <BrowseCTA />
      <Metrics />
    </div>
  )
}

export default Landing

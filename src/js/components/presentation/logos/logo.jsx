import React from 'react'
import SVGInline from 'react-svg-inline'

import logo from 'images/inline-svgs/logo.svg'

import 'styles/components/logo.scss'

const Logo = () => {
  return (
    <div className='Logo'>
      <SVGInline svg={logo} title='IndePact' />
    </div>
  )
}

export default Logo

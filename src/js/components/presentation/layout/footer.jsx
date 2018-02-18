import React from 'react'
import { TextInput } from 'bloom-forms'

import 'styles/components/footer'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer-content'>
        <div>
          <a className='Footer-link' href='#'>
            Home
          </a>
          <br />
          <a className='Footer-link' href='#'>
            Directory
          </a>
          <br />
          <a className='Footer-link' href='#'>
            My Profile
          </a>
        </div>
        <div>
          <a className='Footer-link' href='#'>
            FAQ & Support
          </a>
          <br />
          <a className='Footer-link' href='#'>
            Terms & Conditions
          </a>
        </div>
        <div>
          <TextInput label='Subscribe' name='email' showLabel />
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

import 'styles/components/footer'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div>
        <a className='Footer-link' href='#'>
          HOME
        </a>
        <br />
        <a className='Footer-link' href='#'>
          DIRECTORY
        </a>
        <br />
        <a className='Footer-link' href='#'>
          MY PROFILE
        </a>
      </div>
      <div>
        <a className='Footer-link' href='#'>
          FAQ & SUPPORT
        </a>
        <br />
        <a className='Footer-link' href='#'>
          TERMS & CONDITIONS
        </a>
      </div>
      <div>
        <form>
          <input type='text' name='search' />
        </form>
      </div>
    </footer>
  )
}

export default Footer

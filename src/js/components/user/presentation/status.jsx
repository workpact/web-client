import React from 'react'

const Status = ({ data }) => {
  const status = data || {}

  return <div className='User-status'>Status: {status.label}</div>
}

export default Status

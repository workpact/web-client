import React from 'react'

import Rating from './rating'
import Certifications from './certifications'
import Status from './status'
import Contracts from './contracts'
import Tips from './tips'

const User = ({ content }) => {
  const profile = content.profile || {}

  return (
    <div className='User'>
      User: {content.username}
      <Rating data={profile.averageRating} />
      <Certifications data={profile.certifications} />
      <Status data={profile.status} />
      <Contracts
        completed={profile.completedContracts}
        contested={profile.contestedContracts}
      />
      <Tips data={profile.tips} />
    </div>
  )
}

export default User

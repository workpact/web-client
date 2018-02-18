import React from 'react'

import ProgressBar from 'presentation/layout/progress-bar'

const Rating = ({ data: averageRating }) => {
  return (
    <dl className='User-rating Directory-definition Directory-definition--wrapped'>
      <dt className='User-subheader'>Average Reliability Rating</dt>
      <dd>Top {100 - (averageRating || 0) * 50 || 1}%</dd>
      <dd>
        <ProgressBar
          min={0}
          max={2}
          value={averageRating}
          className={averageRating > 1.85 ? 'is-recommended' : ''}
        />
      </dd>
    </dl>
  )
}

export default Rating

import React from 'react'

const Rating = ({ data: averageRating }) => {
  return (
    <div className='User-rating'>
      Average rating:{' '}
      <progress className='ProgressBar' max='2' value={averageRating || 0} />
    </div>
  )
}

export default Rating

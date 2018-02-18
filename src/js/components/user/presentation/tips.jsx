import React from 'react'

const Tips = ({ data }) => {
  const tips = data || []

  const renderTips = tips => {
    return tips.map(({ amount, user, comment }, i) => (
      <div key={`tips-${i}`} className='User-tips-list-item'>
        Amount: {amount}
        <br />
        From user: {user}
        <br />
        Comment: {comment}
      </div>
    ))
  }
  return (
    <div className='User-tips'>
      Tips:
      <div className='User-tips-list'>{renderTips(tips)}</div>
    </div>
  )
}

export default Tips

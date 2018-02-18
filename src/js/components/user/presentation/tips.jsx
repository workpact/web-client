import React from 'react'

const Tips = ({ data }) => {
  const tips = data || []

  const renderTips = tips => {
    return tips.map(({ amount, user, comment }, i) => (
      <li key={`tips-${i}`} className='User-tips-list-item'>
        <dl className='User-tips-coins'>
          <dt className='u-sr-only'>Amount:</dt>
          <dd>{amount}</dd>
        </dl>
        <div>
          <dl className='User-tips-list-item-quote'>
            <dt className='u-sr-only'>Comment:</dt>
            <dd>
              <blockquote>{comment}</blockquote>
            </dd>
          </dl>
          <dl className='User-tips-list-item-citation'>
            <dt className='u-sr-only'>From:</dt>
            <dd>
              <cite>{user}</cite>
            </dd>
          </dl>
        </div>
      </li>
    ))
  }
  return (
    <div className='User-tips'>
      <h2 className='User-subheader'>Tips</h2>
      <ul className='User-tips-list'>{renderTips(tips)}</ul>
    </div>
  )
}

export default Tips

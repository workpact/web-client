import React from 'react'

const Contracts = data => {
  const completed = data.completed || []
  const contested = data.contested || []

  const renderContracts = (contracts, type) => {
    return (
      <ul className={`User-contracts-${type}-list`}>
        {contracts.map((contract, i) => (
          <li key={`${type}-${i}`}>{contract}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className='User-contracts'>
      <div className='User-contracts-completed'>
        Completed contracts:
        {renderContracts(completed, 'completed')}
      </div>
      <div className='User-contracts-contested'>
        Contested contracts:
        {renderContracts(contested, 'contested')}
      </div>
    </div>
  )
}

export default Contracts

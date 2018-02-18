import React from 'react'

const Metrics = () => {
  return (
    <div className='Landing-metrics'>
      <div
        className='Landing-metrics-backdrop'
        aria-hidden
        role='presentation'
      />
      <div className='Landing-metrics-content'>
        <h2 className='Landing-subheader'>Why Indepact?</h2>
        <p>
          Bounties Network provided a platform to connect independent
          contractors with customers who need a specific job completed.
          Unfortunately this setup relies on the honesty of both parties for a
          positive experience. To alleviate this shortcoming, INDEPACT tracks
          the reliability of a service provider to indicate how often their work
          is completed to the satisfaction of both parties.
        </p>
        <p>
          We extended the StandardBounties.sol smart contract as
          StandardBountiesReputation, which automatically tracks the reputation
          of service providers on-chain, based on whether the outcome of each
          job is Complete, Incomplete, or Disputed.
        </p>
      </div>
    </div>
  )
}

export default Metrics

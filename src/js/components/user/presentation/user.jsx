import React from 'react'

import Rating from './rating'
// import Certifications from './certifications'
// import Status from './status'
import Contracts from './contracts'
import Tips from './tips'

import LicenseBadge from 'presentation/layout/license-badge'
import Loading from 'presentation/layout/loading'

import 'styles/components/user'

import BobtheBuilder from 'public/images/bob-builder-avatar.png'
import Mario from 'public/images/mario-avatar.png'
import MichaelScott from 'public/images/michael-scott-avatar.png'
import TimTaylor from 'public/images/tim-taylor-avatar.png'

const images = {
  BobtheBuilder,
  Mario,
  MichaelScott,
  TimTaylor
}

const User = ({ content }) => {
  const profile = content || {}

  return (
    <div className='User'>
      <div className='User-content'>
        <div className='User-header'>
          <div className='User-intro'>
            {profile.name ? (
              <img
                src={images[(profile.name || '').replace(/\s/g, '')]}
                alt={`${profile.name}'s avatar`}
                className='User-avatar'
              />
            ) : (
              <Loading />
            )}
            <div className='User-intro-data'>
              <h3 className='User-name'>{profile.name}</h3>
              <div className='User-specialty'>
                {profile.certifications &&
                  profile.certifications[0] &&
                  profile.certifications[0].label}
              </div>
              <div role='presentation' aria-hidden className='User-line' />
              <div
                className={`User-status ${
                  content.status !== 'Accepting Contracts' ? 'is-inactive' : ''
                }`}
              >
                {content.status}
              </div>
            </div>
          </div>

          <div className='User-history'>
            <dl className='Directory-definition'>
              <dd
                aria-hidden
                role='presentation'
                className={
                  content.certifications && content.certifications.length
                    ? 'is-true'
                    : ''
                }
              />
              <dt>Certified</dt>
              <dd className='u-sr-only'>
                {content.certifications && content.certifications.length
                  ? 'Yes'
                  : 'No'}
              </dd>
            </dl>

            <dl className='Directory-definition'>
              <dd>
                {(profile.completedContracts &&
                  content.completedContracts.length) ||
                  0}
              </dd>
              <dt>Contracts Completed</dt>
            </dl>

            {(profile.certifications || []).map(cert => (
              <LicenseBadge
                key={`certification-badge-${cert.id}`}
                type={`${cert.icon}` || 'general'}
              />
            ))}
          </div>
        </div>

        <Rating data={profile.averageRating} />
        {/*<Certifications data={profile.certifications} />
        <Status data={profile.status} />*/}
        {(profile.tips &&
          profile.tips.length && <Tips data={profile.tips} />) ||
          ''}
        <Contracts
          completed={profile.completedContracts}
          contested={profile.contestedContracts}
        />
      </div>
    </div>
  )
}

export default User

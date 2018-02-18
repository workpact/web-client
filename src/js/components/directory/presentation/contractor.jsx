import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import LicenseBadge from 'presentation/layout/license-badge'
import ProgressBar from 'presentation/layout/progress-bar'

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

const Contractor = props => {
  return (
    <Link to={`/user/${props.id}`} key={`contractor-${props.id}`}>
      <li className='Directory-contractor'>
        <div className='Directory-contractor-summary'>
          <img
            src={images[props.name.replace(/\s/g, '')]}
            alt='user avatar'
            className='Directory-contractor-avatar'
          />
          <div className='Directory-contractor-summary-data'>
            <h3 className='Directory-contractor-name'>{props.name}</h3>
            <div className='Directory-contractor-specialty'>
              {props.certifications[0].label}
            </div>
            <div
              role='presentation'
              aria-hidden
              className='Directory-contractor-line'
            />
            <div
              className={`Directory-contractor-status ${
                props.status !== 'Accepting Contracts' ? 'is-inactive' : ''
              }`}
            >
              {props.status}
            </div>
          </div>
        </div>

        <div className='Directory-contractor-history'>
          <div>
            <dl className='Directory-definition'>
              <dd
                aria-hidden
                role='presentation'
                className={props.certifications.length ? 'is-true' : ''}
              />
              <dt>Certified</dt>
              <dd className='u-sr-only'>{!!props.certifications.length}</dd>
            </dl>

            <dl className='Directory-definition'>
              <dd>{props.completedContracts.length}</dd>
              <dt>Contracts Completed</dt>
            </dl>

            <dl className='Directory-definition Directory-definition--wrapped'>
              <dt>Reliability Rating</dt>
              <dd>
                <ProgressBar
                  min={0}
                  max={2}
                  value={props.averageRating}
                  className={props.averageRating > 1.85 ? 'is-recommended' : ''}
                />
              </dd>
            </dl>
          </div>

          {props.certifications.map((cert, i) => (
            <LicenseBadge
              type={cert.icon}
              key={`contractor-${props.name}-badge-${i}`}
            />
          ))}
        </div>
      </li>
    </Link>
  )
}

Contractor.propTypes = {}

export default Contractor

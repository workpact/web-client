import React from 'react'

import 'styles/components/progress-bar'

const ProgressBar = ({ className, min = 0, max, value }) => (
  <progress
    className={`ProgressBar ${className || ''}`}
    max={max}
    value={value || 0}
    min={min}
  />
)

export default ProgressBar

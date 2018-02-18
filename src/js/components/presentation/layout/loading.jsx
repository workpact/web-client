import React from 'react'

import spinner from 'images/spinner.png'
import 'styles/components/loading.scss'

const Loading = () => {
  return (
    <img src={spinner} alt='This section is loading.' className='Loading' />
  )
}

export default Loading

import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'bloom-forms'

import { ProfileType } from 'util/types'

import Contractor from './contractor'
import DirectoryFilters from './directory-filters'

import 'styles/components/directory'

const Directory = ({ contractors, filterContractors }) => {
  return (
    <div className='Directory'>
      <Form
        id='directory-filters'
        fieldNames={[
          'name-search',
          'filter-status',
          'filter-rating',
          'filter-specialty'
        ]}
        submitForm={() => ''}
      >
        <DirectoryFilters filterContractors={filterContractors} />
      </Form>
      <ul className='Directory-list'>
        {contractors.map(contractor => <Contractor {...contractor} />)}
      </ul>
    </div>
  )
}

Directory.propTypes = {
  contractors: PropTypes.arrayOf(PropTypes.shape(ProfileType))
}

export default Directory

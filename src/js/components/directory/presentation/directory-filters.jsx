import React from 'react'
import PropTypes from 'prop-types'

import { TextInput, SelectInput } from 'bloom-forms'

const DirectoryFilters = ({
  filterContractors,
  updateForm,
  manualFieldUpdate,
  ...props
}) => {
  const formData = props.formData || {
    'name-search': { value: '' },
    specialty: { value: '' },
    status: { value: '' },
    rating: { value: '' }
  }
  const searchUpdate = e => {
    filterContractors({
      fieldName: 'name',
      fieldValue: e.target.value
    })
    updateForm(e)
  }

  const filterUpdate = (formId, fieldName, fieldValue, type = 'text') => {
    filterContractors({
      fieldName: fieldName.replace('filter-', ''),
      fieldValue
    })
    manualFieldUpdate(formId, fieldName, fieldValue, type)
  }

  return (
    <div className='Directory-filters'>
      <TextInput
        label='Search by Name'
        name='name-search'
        onChange={searchUpdate}
        value={(formData['name-search'] && formData['name-search'].value) || ''}
        showLabel
      />
      <div className='Directory-filters-row'>
        <SelectInput
          formId={props.formId}
          label='Filter by Specialty'
          name='filter-specialty'
          onChange={filterUpdate}
          typeAhead={false}
          value={
            (formData['filter-specialty'] &&
              formData['filter-specialty'].value) ||
            ''
          }
        />
        <SelectInput
          formId={props.formId}
          label='Filter by Status'
          name='filter-status'
          options={['Not Available', 'Accepting Contracts']}
          onChange={filterUpdate}
          typeAhead={false}
          value={
            (formData['filter-status'] && formData['filter-status'].value) || ''
          }
        />
        <SelectInput
          formId={props.formId}
          label='Filter by Rating'
          name='filter-rating'
          onChange={filterUpdate}
          typeAhead={false}
          value={
            (formData['filter-rating'] && formData['filter-rating'].value) || ''
          }
        />
      </div>
    </div>
  )
}

DirectoryFilters.propTypes = {
  filterContractors: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  manualFieldUpdate: PropTypes.func,
  updateForm: PropTypes.func
}

export default DirectoryFilters

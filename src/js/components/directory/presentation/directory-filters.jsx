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
    updateForm(e)
    filterContractors({ name: e.target.value })
  }

  const filterUpdate = (formId, fieldName, fieldValue, type = 'text') => {
    filterContractors({ [fieldName.replace('filter-', '')]: fieldValue })
    manualFieldUpdate(formId, fieldName, fieldValue, type)
  }

  return (
    <div className='Directory-filters'>
      <TextInput
        label='Search by Name'
        name='name-search'
        onChange={searchUpdate}
        value={(formData['name-search'] && formData['name-search'].value) || ''}
      />
      <SelectInput
        formId={props.formId}
        label='Filter by Specialty'
        name='filter-specialty'
        onChange={filterUpdate}
      />
      <SelectInput
        formId={props.formId}
        label='Filter by Status'
        name='filter-status'
        onChange={filterUpdate}
      />
      <SelectInput
        formId={props.formId}
        label='Filter by Rating'
        name='filter-rating'
        onChange={filterUpdate}
      />
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

import React from 'react'

import Table from 'presentation/layout/table'
import { humanFormatDate } from 'util/helpers'

const Contracts = data => {
  const all = (data.completed || []).concat(data.contested || [])
  const headers = [
    {
      title: 'Date',
      sortable: true,
      sortValue: 'datetime',
      displayValue: 'formattedDate'
    },
    {
      title: 'Amount',
      sortable: true,
      sortValue: 'ethAmount'
    },
    {
      title: 'Fullfillment Status',
      sortable: true,
      sortValue: 'status'
    },
    {
      title: 'Bounty ID',
      sortable: true,
      sortValue: 'id',
      displayValue: 'formattedID'
    }
  ]

  const statuses = ['Pending', 'Complete', 'Cancelled']
  const formattedData = all
    .map(contract => {
      contract = {
        key: `contract-${contract.id}`,
        id: contract
      }

      contract.formattedID = (
        <a href='#' target='_blank' rel='noopener noreferrer'>
          {contract.id}
        </a>
      )

      contract.status = statuses[Math.floor(Math.random() * 2)]

      contract.ethAmount = (Math.random() * 72).toFixed(3)

      let date = new Date()
      date.setMonth(Math.floor(Math.random() * 12))
      date.setDate(Math.floor(Math.random() * 30))

      if (date.getMonth() > 1) {
        date.setYear('2017')
      }
      contract.datetime = date
      contract.formattedDate = humanFormatDate(contract.datetime)

      return contract
    })
    .sort((a, b) => b.datetime - a.datetime)

  return (
    <div className='User-contracts'>
      <h2 className='User-subheader'>Contracts</h2>
      <Table
        data={formattedData}
        loading={!formattedData.length}
        headers={headers}
        query={{
          useServer: false,
          activeFilters: [],
          pagination: {
            limit: 8,
            offset: 0
          },
          sort: {
            activeField: 'datetime'
          }
        }}
      />
    </div>
  )
}

export default Contracts

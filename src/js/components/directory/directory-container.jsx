import React from 'react'

import Directory from './presentation/directory'

class DirectoryContainer extends React.Component {
  state = {
    contractors: [],
    allContractors: []
  };

  filterContractors = sortObj => {
    const newContractors = [...this.state.allContractors].filter(contractor => {
      return sortObj.fieldName === 'name'
        ? contractor[sortObj.fieldName]
            .toLowerCase()
            .indexOf(sortObj.fieldValue.toLowerCase()) > -1
        : contractor[sortObj.fieldName] === sortObj.fieldValue
    })
    this.setState({
      contractors: newContractors
    })
  };

  getContractors = async () => {
    try {
      const res = await WebService.getContractors()
      this.setState({
        contractors: res.data,
        allContractors: res.data
      })
    } catch (err) {
      console.log('get user error: ', err) // eslint-disable-line no-console
    }
  };

  componentDidMount = async () => {
    this.getContractors()
  };

  render() {
    const { contractors } = this.state
    return (
      <Directory
        contractors={contractors}
        filterContractors={this.filterContractors}
      />
    )
  }
}

export default DirectoryContainer

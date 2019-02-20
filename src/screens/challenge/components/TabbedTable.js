import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TabbedTable extends Component {
  state = {
    tables: [],
    selectedTableName: ''
  }

  componentWillReceiveProps (nextProps, nextContext) {
    const {tables} = nextProps
    console.log(tables)
    this.setState({
      tables,
      selectedTableName: tables.length === 0 ? '' : tables[0].name
    })
  }

  handleSelectedTableChange (selectedTablename) {
    this.setState({
      selectedTableName: selectedTablename
    })
  }

  render () {
    const {tables, selectedTableName} = this.state
    const selectedTable = tables.find(table => table.name === selectedTableName) || {name: '', columns: [], rows: []}

    return (
      <div className="rounded border-2 mt-4">
        <div className="flex">
          {tables.map(table => {
            return (<div
              onClick={e => this.handleSelectedTableChange(table.name)}
              className={`p-4 border-r border-b flex-grow ${table.name === selectedTableName ? 'bg-blue' : ''}`}>
              {table.name}
            </div>)
          })}
        </div>
        <div>
          <table className='w-full'>
            <thead>
            <tr>
              {selectedTable.columns.map(columnName => <th className='border-1 border-b border-l p-2'>{columnName}</th>)}
            </tr>
            </thead>
            <tbody>
            {selectedTable.rows.map(row => <tr>
              {selectedTable.columns.map(columnName => <td className='border-1 border-b border-l p-2'>{row[columnName]}</td>)}
            </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

TabbedTable.propTypes = {
  tables: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.arrayOf(PropTypes.object)
  })),
}

export default TabbedTable

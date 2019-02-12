import React from 'react'
import { changeFilter } from './../reducers/filterReducer'

class Filter extends React.Component {
    handleChange = (event) => {
      event.preventDefault()
      const value = event.target.value
      this.props.store.dispatch(changeFilter(value))
    }
    render() {
      const style = {
        marginBottom: 10
      }
  
      return (
        <div style={style}>
            Filter <input onChange={this.handleChange} />
        </div>
      )
    }
  }

export default Filter
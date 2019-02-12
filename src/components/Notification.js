import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const style = {
      color: 'green',
      fontSize: 20
    }
    const notification = this.props.store.getState().notifications
    console.log('notifi: ', notification)
    if (notification === null) {
      return null
    }
    else return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}

export default connect(({ notifications: { message } }) => ({
  message
}))(Notification);
const initialState = null
  
  const notificationReducer = (store = initialState, action) => {
    if (action.type === 'NOTI') { 
      return [action.data]
    }
    if (action.type === 'RESET') {
      return [action.data]
    }
    return store
  }

  export default notificationReducer

  export const popNotification = (message) => {
    console.log('popNotification toimii?')
    return {
      type: 'NOTI',
      data: 'You voted ' + message
    }
  }

  export const resetNotification = () => {
    return {
      type: 'RESET',
      data: null
    }
  }
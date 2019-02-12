const filterReducer = (state = "", action) => {
    switch (action.type) {
    case "CHANGE_FILTER":
      return action.value
    default:
      return state
    }
  }
  
  export default filterReducer
  
  export const changeFilter = value => {
    return {
      type: "CHANGE_FILTER",
      value
    }
  }
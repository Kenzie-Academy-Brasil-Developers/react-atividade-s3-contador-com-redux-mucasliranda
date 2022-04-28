const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE":
      state += 1
      return state
    case "DECREASE":
      state -= 1
      return state
    default : 
      return state
  }
}

export default reducerCounter
const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_OVERLAY': {
      return {
        ...state,
        showOverlay: action.payload,
      }
    }
    default:
      return state
  }
}

export default Reducer

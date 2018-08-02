const SLIDER_PENDING = 'SLIDER_PENDING'
const default_state = {
  sliderPending: false
}

export function slider(state=default_state, action) {
  switch (action.type) {
    case SLIDER_PENDING: 
      return {...state, sliderPending: action.bool}
    default:
      return state
  }
}
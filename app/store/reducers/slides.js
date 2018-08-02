const LOAD_SLIDES = 'LOAD_SLIDES'

export function slides(state=[], action) {
  switch (action.type) {
    case LOAD_SLIDES:
      return [...action.data]
    default:
      return state
  }
}
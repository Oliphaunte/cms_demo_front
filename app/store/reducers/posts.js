const LOAD_POSTS = 'LOAD_POSTS'

export function posts(state=[], action) {
  switch (action.type) {
    case LOAD_POSTS:
      return [...action.data]
    default:
      return state
  }
}
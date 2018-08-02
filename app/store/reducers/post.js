const LOAD_POST = 'LOAD_POST'
const UPDATE_POST = 'UPDATE_POST'
const POST_SAVE_SUCCESS = 'POST_SAVE_SUCCESS'
const POST_SAVE_SAVING = 'POST_SAVE_SAVING'
const default_state = {
  post_title: '',
  post_featured_image: '',
  post_save_success: false,
  post_save_saving: false,
}

export function post(state=default_state, action) {
  const name = action.name

  switch (action.type) {
    case LOAD_POST:
      return {...state, ...action.data}
    case UPDATE_POST:
      return {...state, [action.name]: action.data}
    case POST_SAVE_SUCCESS:
      return {...state, post_save_success: action.status}
    case POST_SAVE_SAVING:
      return {...state, post_save_saving: action.status}
    default:
      return state
  }
}
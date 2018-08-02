import Axios  from 'axios'

const LOAD_POST = 'LOAD_POST'
const UPDATE_POST = 'UPDATE_POST'
const POST_SAVE_SUCCESS = 'POST_SAVE_SUCCESS'
const POST_SAVE_SAVING = 'POST_SAVE_SAVING'

export function loadPost(data) {
  return {
    type: LOAD_POST,
    data
  }
}
export function fetchData(page_name) {
  return function (dispatch) {
    return Axios
      .get(`/auth/posts/${page_name}`)
      .then(res => dispatch(loadPost(res.data)))
      .catch(err => console.error(err))
  }
}

export function updatePost(input_type, name, data) {
  return {
    type: UPDATE_POST,
    input_type,
    name,
    data
  }
}
export function postSaveSuccess(bool) {
  return {
    type: POST_SAVE_SUCCESS,
    status: bool
  }
}
export function postSaveSaving(bool) {
  return {
    type: POST_SAVE_SAVING,
    status: bool
  }
}

export function savePost(data) {
  return function (dispatch) {
    dispatch(postSaveSaving(true))

    return Axios
      .post('/auth/posts/new', data)
      .then(res => status === 201 ? dispatch(postSaveSuccess(true)) : null)
      .catch(err => console.error(err))
      .finally(() => dispatch(postSaveSaving(false)));
  }
}
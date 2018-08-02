import Axios  from 'axios'

const LOAD_POSTS = 'LOAD_POSTS'

export function loadPosts(data) {
  return {
    type: LOAD_POSTS,
    data
  }
}
export function fetchPosts() {
  return function (dispatch) {
    return Axios
      .get('/auth/posts')
      .then(res => dispatch(loadPosts(res.data)))
      .catch(err => console.error(err))
  }
}

export function deletePost(post_title) {
  return function (dispatch) {
    return Axios
      .delete(`/auth/posts/${post_title}`)
      .then(res => dispatch(fetchPosts()))
      .catch(err => console.error(err))
  }
}
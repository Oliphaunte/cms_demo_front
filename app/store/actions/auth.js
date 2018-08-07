import Axios  from 'axios'

const LOGIN_PENDING = 'LOGIN_PENDING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const USER_AUTHENTICATED = 'USER_AUTHENTICATED'

export function loginPending(bool) {
  return {
    type: LOGIN_PENDING,
    isLoginPending: bool
  }
}

export function loginSuccess(bool) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess: bool
  }
}

export function loginError(loginError) {
  return {
    type: LOGIN_ERROR,
    loginError
  }
}

export function isAuthenticated(bool) {
  return {
    type: USER_AUTHENTICATED,
    isAuthenticated: bool
  }
}

export function login(email, password) {
  return function (dispatch) {
    dispatch(loginPending(true))
    
    return Axios
      .post('/auth/login', { email, password })
      .then(res => {
        if (res.status === 200) {
          dispatch(loginError(false))
          dispatch(loginSuccess(true))
          dispatch(isAuthenticated(true))
        }
      })
      .catch(err => {
        dispatch(loginError(err.response.data))
        throw err
      })
      .finally(() => dispatch(loginPending(false)));
  }
}

export function logout() {
  return function (dispatch)  {
    return Axios
      .delete('/auth/logout')
      .then(res => {
        let { status } = res

        if (status === 204) {
          dispatch(loginError(null))
          dispatch(isAuthenticated(false))
        }
      })
      .catch(err => console.error(err));
  }
}

export function authStatus() {
  return dispatch => {
    Axios
      .get('/auth/status')
      .then(res => {
        console.log(res)
        dispatch(isAuthenticated(true))
      })
      .catch(err => console.error(err));
  }
}
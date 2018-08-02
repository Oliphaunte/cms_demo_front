const LOGIN_PENDING = 'LOGIN_PENDING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_ERROR = 'LOGIN_ERROR'
const USER_AUTHENTICATED = 'USER_AUTHENTICATED'
const default_state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  isAuthenticated: false
}

export function login(state=default_state, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {...state, isLoginPending: action.isLoginPending}
    case LOGIN_SUCCESS:
      return {...state, isLoginSuccess: action.isLoginSuccess}
    case LOGIN_ERROR:
      return {...state, loginError: action.loginError}
    case USER_AUTHENTICATED:
      return {...state, isAuthenticated: action.isAuthenticated}
    default:
      return state
  }
}
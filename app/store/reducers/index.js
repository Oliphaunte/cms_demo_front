import { combineReducers } from 'redux'
import { isLoading } from './loader'
import { login } from './auth'
import { posts } from './posts'
import { post } from './post'
import { slides } from './slides'
import { slider } from './slider'

const rootReducer = combineReducers({
  isLoading,
  login,
  posts,
  post,
  slides,
  slider
})

export default rootReducer
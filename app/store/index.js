import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const loggerMiddleware = createLogger()

const configureStore = function(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  )
}

export default configureStore
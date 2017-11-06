import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../reducers/root_reducer'

const configureStore = (preloadedState = {}) => {
  let middleware = applyMiddleware(thunk)

  if (process.env.NODE_ENV !== 'production') {
    const { devToolsExtension } = window
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  }

  return createStore(
    RootReducer,
    preloadedState,
    middleware
  )
}

export default configureStore

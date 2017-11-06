import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions'

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_ERRORS:
      if (action.errors) return [...action.errors]
      return state
    case CLEAR_ERRORS:
      return []
    default:
      return state
  }
}

export default ErrorsReducer

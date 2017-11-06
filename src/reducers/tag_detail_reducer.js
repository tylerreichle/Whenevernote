import { RECEIVE_SINGLE_TAG } from '../actions/tags_actions'

const TagDetailReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_SINGLE_TAG:
      return action.tag

    default:
      return state
  }
}

export default TagDetailReducer

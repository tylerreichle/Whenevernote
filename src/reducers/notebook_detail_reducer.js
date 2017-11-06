import { RECEIVE_SINGLE_NOTEBOOK } from '../actions/notebooks_actions'

const NotebookDetailReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_SINGLE_NOTEBOOK:
      return action.notebook

    default:
      return state
  }
}

export default NotebookDetailReducer

import merge from 'lodash/merge';
import {
  RECEIVE_TAGS,
  REMOVE_TAG,
  RECEIVE_SINGLE_TAG
} from '../actions/tags_actions';

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;

    case RECEIVE_SINGLE_TAG:
      newState = merge({}, state);
      newState[action.tag.id] = action.tag;
      return newState;

    case REMOVE_TAG:
      newState = merge({}, state);
      delete newState[action.tag.id];
      return newState;

    default:
      return state;
  }
};

export default TagsReducer;

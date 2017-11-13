import * as TagsAPI from '../util/tags_api_util'
import { receiveErrors } from './session_actions'

export const RECEIVE_TAGS = 'RECEIVE_TAGS'
export const RECEIVE_SINGLE_TAG = 'RECEIVE_SINGLE_TAG'
export const REMOVE_TAG = 'REMOVE_TAG'

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
})

export const receiveSingleTag = tag => ({
  type: RECEIVE_SINGLE_TAG,
  tag
})

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
})

export const fetchTags = () => dispatch => (
  TagsAPI.fetchTags()
    .then(tags => dispatch(receiveTags(tags)))
)

export const fetchSingleTag = tagId => dispatch => (
  TagsAPI.fetchSingleTag(tagId)
    .then(tag => dispatch(receiveSingleTag(tag),
      (errors => dispatch(receiveErrors(errors.responseJSON)))
    ))
)


export const createTag = tag => dispatch => (
  TagsAPI.createTag(tag)
    .then((newTag) => {
      dispatch(receiveSingleTag(newTag))
    },
      (errors => dispatch(receiveErrors(errors.responseJSON))))
)

export const deleteTag = tagId => dispatch => (
  TagsAPI.deleteTag(tagId)
    .then((deletedTag) => {
      dispatch(removeTag(deletedTag))
    },
      (errors => dispatch(receiveErrors(errors.responseJSON))))
)

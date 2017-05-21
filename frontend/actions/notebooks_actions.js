import * as NotebooksAPI from '../util/notebooks_api_util';
import { receiveErrors, clearErrors } from './session_actions';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_SINGLE_NOTEBOOK = 'RECEIVE_SINGLE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const receiveSingleNotebook = notebook => ({
  type: RECEIVE_SINGLE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const fetchNotebooks = () => dispatch => (
  NotebooksAPI.fetchNotebooks()
  .then(notebooks => dispatch(receiveNotebooks(notebooks)))
);

export const fetchSingleNotebook = notebookId => dispatch => (
  NotebooksAPI.fetchSingleNotebook(notebookId)
    .then(notebook =>  {
      dispatch(receiveSingleNotebook(notebook));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const createNotebook = notebook => dispatch => (
  NotebooksAPI.createNotebook(notebook)
    .then(newNotebook =>  {
      dispatch(receiveSingleNotebook(newNotebook));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const updateNotebook = notebook => dispatch => (
  NotebooksAPI.updateNotebook(notebook)
    .then(updatedNotebook =>  {
      dispatch(receiveSingleNotebook(updatedNotebook));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const deleteNotebook = notebookId => dispatch => (
  NotebooksAPI.deleteNotebook(notebookId)
    .then(deletedNotebook =>  {
      dispatch(removeNotebook(deletedNotebook));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// actions
import { fetchNotebooks } from '../../actions/notebooks_actions'
import { selectAllNotebooks } from '../../reducers/selectors'

// components
import NotebooksIndexItem from './notebooks_index_item'

class NotebooksIndex extends Component {

  componentDidMount() {
    this.props.fetchNotebooks()
  }

  render() {
    const {
      note,
      notebooks,
      notesCount,
      updateNote,
      iiCallback
    } = this.props

    return (
      <div className="notebooks-index">
        <ul>
          {
            notebooks.map(notebook => (
              <NotebooksIndexItem
                note={note}
                key={notebook.id}
                notebook={notebook}
                updateNote={updateNote}
                iiCallback={iiCallback}
                notesCount={notesCount}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

NotebooksIndex.propTypes = {
  fetchNotebooks: PropTypes.func.isRequired,
  updateNote: PropTypes.func,
  iiCallback: PropTypes.string.isRequired,
  notesCount: PropTypes.bool.isRequired,
  note: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
      PropTypes.array
    ])),
  notebooks: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object
  ]).isRequired
}

NotebooksIndex.defaultProps = {
  note: {},
  updateNote: null
}

// Connect

const mapStateToProps = state => ({
  notebooks: selectAllNotebooks(state)
})

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotebooksIndex)

import { connect } from 'react-redux'
import NotebooksIndex from './notebooks_index'
import { fetchNotebooks } from '../../actions/notebooks_actions'
import { selectAllNotebooks } from '../../reducers/selectors'

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

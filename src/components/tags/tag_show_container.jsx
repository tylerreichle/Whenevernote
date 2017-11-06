import { connect } from 'react-redux'
import TagShow from './tag_show'
import { fetchSingleTag } from '../../actions/tags_actions'

const mapStateToProps = ({ tag }) => ({
  tag
})

const mapDispatchToProps = dispatch => ({
  fetchSingleTag: tagId => dispatch(fetchSingleTag(tagId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagShow)

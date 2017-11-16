import { connect } from 'react-redux'
import SessionForm from './session_form'
import { signup, signin, clearErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  formType: ownProps.location.pathname
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname
  const processForm = (formType === '/signup/') ? signup : signin

  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm)

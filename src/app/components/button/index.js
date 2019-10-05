import {connect} from 'react-redux'
import {change, reduxForm} from 'redux-form'
import {Button} from './button'

const actionCreatorReduxForm = connect(
  null,
  {change}
)(Button)

export default reduxForm({
  form: 'simpleForm'
})(actionCreatorReduxForm)
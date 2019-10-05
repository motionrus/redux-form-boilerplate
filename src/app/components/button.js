import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, change} from 'redux-form'


class Button extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.change('simpleForm', 'country', 'Russia')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          кнопка
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  change
}

export default reduxForm({
  form: 'simpleForm'
})(connect(
  null,
  mapDispatchToProps
)(Button))
import React, {Component} from 'react'


export class Button extends Component {
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
          set Russia country
        </button>
      </div>
    )
  }
}
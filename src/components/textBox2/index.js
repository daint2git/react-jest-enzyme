import React from 'react'

export default class TextBox extends React.Component {
  state = { email: 'default email' }

  handleMailChange = e => {
    this.setState({ email: e.target.value })
  }

  render() {
    return (
      <input type="text" name="email" value={this.state.email} onChange={this.handleMailChange} />
    )
  }
}

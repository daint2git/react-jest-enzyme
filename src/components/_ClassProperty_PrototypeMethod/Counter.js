import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false,
      count: 0,
    }
    this.handeDecrease = this.handeDecrease.bind(this)
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  // class property
  handeIncrease = () => this.setState(prevState => ({ count: prevState.count + 1 }))

  // prototype method
  handeDecrease() {
    this.setState(prevState => ({ count: prevState.count - 1 }))
  }

  render() {
    return (
      <>
        <button name="increment" onClick={this.handeIncrease}>
          increment
        </button>
        <button name="decrement" onClick={this.handeDecrease}>
          decrement
        </button>
        <p>{this.state.count}</p>
      </>
    )
  }
}

export default Counter

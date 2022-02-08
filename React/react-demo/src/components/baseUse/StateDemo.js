import React, { Component } from 'react';

export default class StateDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increase = () => {
    // 不能直接修改，要使用setState
    // this.state.count++
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count);
  }

  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increase}>增加</button>
    </div>;
  }
}

import React, { Component } from 'react';

export default class FormDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'airhua',
      info: '个人信息',
      gender: 'male'
    }
  }

  onTextareaChange = (e) => {
    this.setState({
      info: e.target.value
    })
  }

  onRadioChange = (e) => {
    this.setState({
      gender: e.target.value
    })
  }

  render() {
    return <div>
      <p>{ this.state.name }</p>
      <p>{this.state.info}</p>
      <textarea value={this.state.info} cols="30" rows="10" onChange={this.onTextareaChange}></textarea>
      <hr />
      <p>{this.state.gender}</p>
      男 <input type="radio" name="gender" value="male" checked={ this.state.gender === 'male' } onChange={this.onRadioChange} />
      女 <input type="radio" name="gender" value="female" checked={ this.state.gender === 'female' } onChange={this.onRadioChange} />
    </div>;
  }
}

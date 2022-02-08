import React, { Component } from 'react';

export default class EventDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'airhua',
      list: [
        {
          id: '1-1',
          title: '标题1'
        },
        {
          id: '1-2',
          title: '标题2'
        },
        {
          id: '1-3',
          title: '标题3'
        }
      ]
    }

    // 普通写法bind必不可少
    // this.clickHander = this.clickHander.bind(this)
  }

  // 1
  /* clickHander = () => {
    this.setState({
      name: 'Air'
    })
  } */
  // 2
  /* clickHander() {
    this.setState({
      name: 'Air'
    })
  } */
  // 3
  clickHander = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('target', event.target);
    console.log('current target', event.currentTarget);

    console.log('event', event);
    // console.log('event.__proto__.constructor', event.__proto__.constructor);

    console.log('nativeEvent', event.nativeEvent);
    console.log('nativeEvent target', event.nativeEvent.target)  // 指向当前元素，即当前元素触发
    console.log('nativeEvent current target', event.nativeEvent.currentTarget) // 指向 document ！！！
    // console.log('nativeEvent.__proto__.constructor', event.nativeEvent.__proto__.constructor);
  }


  render() {
    return <div>
      <h1>{ this.state.name }</h1>
      <ul>
        {
          this.state.list.map((item, index) => (
            <li key={index} onClick={this.clickHander}>{ item.title }</li>
          ))
        }
      </ul>
    </div>;
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types'

// 子组件1
class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  taskChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  submit = () => {
    const { submitTitle } = this.props
    submitTitle(this.state.task)
  }

  render() {
    return <div>
      <input type="text" value={this.state.task} onChange={this.taskChange} />
      <button onClick={this.submit}>提交</button>
    </div>;
  }
}

// 设置默认类型1
Input.propTypes = {
  submitTitle: PropTypes.func.isRequired
}

// 子组件2
class List extends Component {
  // 设置默认值2
  static defaultProps = {
    list: [
      {
        createTime: '19: 00',
        title: '摆烂'
      }
    ]
  }
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <ul>
        {
          this.props.list.map((item, index) => (
            <li key={item.createTime}>{ item.title }</li>
          ))
        }
      </ul>
    </div>;
  }
}

// 子组件3
class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <p>待做事项: { this.props.length }</p>
    </div>;
  }
}

// 父组件
export default class PropsDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          createTime: '2022-01-01 8:00',
          title: '完成跑步'
        },
        {
          createTime: '2022-01-01 8:30',
          title: '吃饭'
        },
        {
          createTime: '2022-01-02 22:00',
          title: '看书'
        }
      ]
    }
  }

  submitTitle = (title) => {
    this.setState({
      list: this.state.list.concat({
        createTime: new Date(),
        title: title
      })
    })
  }

  render() {
    return <div>
      <Input submitTitle={this.submitTitle}></Input>
      <List list={this.state.list}></List>
      <Footer length={this.state.list.length}></Footer>
    </div>;
  }
}

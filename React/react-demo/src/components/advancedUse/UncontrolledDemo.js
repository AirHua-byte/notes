import React, { Component } from 'react';

export default class UncontrolledDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    // 创建ref
    this.fileInputRef = React.createRef()
  }

  consoleFile = () => {
    const elem = this.fileInputRef.current
    console.log(elem.files[0].name);
  }

  render() {
    return <div>
      {/* 场景一般是需要操控dom */}
      <input type="file" ref={this.fileInputRef} />
      <button onClick={this.consoleFile}>打印文件名</button>
    </div>;
  }
}

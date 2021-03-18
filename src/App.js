import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNum, minus, mulTwo, afterNum } from './action/addAction'
import { Button } from 'antd'
import './App.less';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div className="App">
        <h2>hello redux{this.props.count}</h2>
        <Button type="primary" onClick={this.props.addNum}>+</Button>
        <hr></hr>
        <Button onClick={this.props.minus}>-</Button>
        <hr></hr>
        <h2>{this.props.mulCount}</h2>
        <Button onClick={this.props.mulTwo}>乘2</Button>
        <hr></hr>
        <h2>{this.props.asyncCount}</h2>
        <Button onClick={this.props.testAsync}>3秒后加随机数{this.props.testAsync}</Button>
      </div>
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    count: state.num,
    mulCount: state.mulNum,
    asyncCount: state.asynNum
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addNum: () => dispatch(addNum()),
    minus: () => dispatch(minus()),
    mulTwo: () => dispatch(mulTwo()),
    testAsync: () => dispatch(afterNum())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

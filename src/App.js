import React, { Component } from 'react'
import { store } from './store'
import { Button } from 'antd'
import './App.less';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div className="App">
        <h2>hello redux{store.getState()}</h2>
        <Button type="primary" onClick={() => store.dispatch({type: 'add'})}>+</Button>
        <hr></hr>
        <Button onClick={() => store.dispatch({type: 'minus'})}>-</Button>
      </div>
  }
}
export default App;

import React, { Component } from 'react'
import High from './high'
import { Button } from 'antd';
import './App.less';

// const WithLog = Component =>{
//   const newComp = props => {
//     return <Component {...props} name="2021 is shuai"></Component>
//   }
//   return newComp
// }
class App extends Component {
  render() {
    return <div className="App">
      <Button type="primary">{this.props.name}</Button>
      <High name="this is anyway study react"></High>
    </div>
  }
}

export default App;

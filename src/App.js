import React, { Component } from 'react'
// import High from './high'
import {data} from './store.js'
import ContextTest from './contextTest'
import { Button } from 'antd';
import './App.less';
const MyContext = React.createContext()
// const WithLog = Component =>{
//   const newComp = props => {
//     return <Component {...props} name="2021 is shuai"></Component>
//   }
//   return newComp
// }
class App extends Component {
  render() {
    return <MyContext.Provider value={data}>
      <div className="App">
      <Button type="primary">{this.props.name}</Button>
      <div>
        <MyContext.Consumer>
          {
            value => <ContextTest {...value}></ContextTest>
          }
        </MyContext.Consumer>
      </div>
      {/* <High name="this is anyway study react"></High> */}
    </div>
    </MyContext.Provider>
  }
}
App.contextType = MyContext
export default App;

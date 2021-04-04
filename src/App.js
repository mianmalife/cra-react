import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes/index'
import './App.less';

const App = ({ history }) => {
  console.log(history, 'history________')
  // if (history.location.pathname === '/') {

  // }
  return (<ConnectedRouter history={history}>
    {routes}
  </ConnectedRouter>)
}
export default App
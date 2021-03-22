import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import num from './countReducer'
import mulNum from './countTwoReducer'
import asynNum from './asynReducer'
const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    num,
    mulNum,
    asynNum
})
export default createRootReducer
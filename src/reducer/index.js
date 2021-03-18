import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import num from './countReducer'
import mulNum from './countTwoReducer'
import asynNum from './asynReducer'
export default createStore(combineReducers({num, mulNum, asynNum}), applyMiddleware(thunk))
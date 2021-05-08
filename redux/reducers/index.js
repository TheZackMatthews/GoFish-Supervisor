import { combineReducers } from 'redux'
import { timerReducer, counterReducer } from './counterReducers'

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
}

export default combineReducers(reducers)

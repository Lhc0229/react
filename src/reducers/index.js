import { combineReducers } from 'redux'
import postReducer from './postReducer'
export default combineReducers({
    index_post:postReducer
})
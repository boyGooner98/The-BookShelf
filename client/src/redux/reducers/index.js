import { combineReducers } from 'redux'
import allBooks from './books_reducer.js'
import user from './userReducers'
const rootReducer = combineReducers({
    allBooks,user
})
export default rootReducer;

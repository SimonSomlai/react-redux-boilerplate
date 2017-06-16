import { combineReducers } from 'redux'
import books from "./booksReducer.js"
import authors from './authorsReducer.js'

export default combineReducers({
  books,
  authors
})

import { combineReducers } from 'redux'
import articleReducer from './components/Article/articleSlice'

export default combineReducers({
  article: articleReducer
})

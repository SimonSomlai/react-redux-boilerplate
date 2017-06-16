import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/rootReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(createLogger() ,thunk)
  )
)

export default store;

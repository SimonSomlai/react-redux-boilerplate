import * as types from "../constants/actionConstants.js"

const initialState = [
  {
    title: "simon is awesome",
    author: "simon"
  }
]

export default function books(state = initialState, action = {}) {
  console.log('action', action, "state", state)
  switch (action.type) {
    case types.SET_BOOKS:
      return state

    default:
      return state;
  }
}

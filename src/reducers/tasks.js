import { ADD_TASK } from '../actions'

const number = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.task, ...state]
    default:
      return state
  }
}

export default number
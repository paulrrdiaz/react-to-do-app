import { ADD_TASK, UPDATE_TASK, REMOVE_TASK } from '../actions'

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.task, ...state]
    case UPDATE_TASK:
    
      return state.map(task => {
        return task.id === action.id ? 
        Object.assign({}, task, action.update) : 
        task
      })
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.id)
    default:
      return state
  }
}

export default tasks
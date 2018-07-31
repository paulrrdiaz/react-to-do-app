import v4 from 'uuid/v4'
export const ADD_TASK = 'ADD_TASK'
export const DECREMENT = 'DECREMENT'

export const addTask = (name) => {
  return {
    type: ADD_TASK,
    task: {
      id: v4(),
      name,
      filter: 'TO_DO',
    }
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}
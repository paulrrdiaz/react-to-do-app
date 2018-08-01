import v4 from 'uuid/v4'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'

export const addTask = (name, filter) => {
  return {
    type: ADD_TASK,
    task: {
      id: v4(),
      name,
      filter: filter ? 
        filter === 'todo' ?
        'TO_DO' : 
        filter.toUpperCase() :
         'TO_DO',
    }
  }
}

export const updateTask = (id, update) => {
  return {
    type: UPDATE_TASK,
    id,
    update,
  }
}

export const removeTask = id => {
  return {
    type: REMOVE_TASK,
    id,
  }
}

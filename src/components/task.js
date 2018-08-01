import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Task = ({ id, name, filter, updateTask, description }) => {
  const rawFilter = filter ? filter === 'TO_DO' ? 'todo' : filter.toLowerCase() : null;
  const taskClass = classnames({
    task: true,
    'task-with-description': description
  })

  return (
    <div className={taskClass}>
      <div className="task-name">{name}</div>
      <div className="task-actions">
        <div className="task-status">
          <i
            onClick={() => updateTask(id, {filter: 'TO_DO'})}
            className={
              `status-todo icon fas fa-dot-circle ${filter === 'TO_DO' ? 'active' : ''}`} />
          <i 
            onClick={() => updateTask(id, {filter: 'DOING'})}
            className={
              `status-doing icon fas fa-dot-circle ${filter === 'DOING' ? 'active' : ''}`} />
          <i 
            onClick={() => updateTask(id, {filter: 'DONE'})}
            className={
              `status-done icon fas fa-dot-circle ${filter === 'DONE' ? 'active' : ''}`} />
        </div>
        <div>
          <Link to={`${rawFilter}/task/${id}`} className="task-action">
            <i className="fas fa-pen-square" />
          </Link>
          <Link to={`${rawFilter}/task/${id}/delete`} className="task-action">
            <i className="fas fa-trash" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Task
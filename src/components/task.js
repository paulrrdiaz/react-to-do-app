import React from 'react'
import classnames from 'classnames'

const Task = ({ id, name, filter }) => {
  return (
    <div className="task">
      <div>{name}</div>
      <div className="status">
        <i 
          className={
            `status-todo icon fas fa-dot-circle 
            ${filter === 'TO_DO' && 'active'}`} />
        <i 
          className={
            `status-doing icon fas fa-dot-circle 
            ${filter === 'DOING' && 'active'}`} />
        <i 
          className={
            `status-done icon fas fa-dot-circle 
            ${filter === 'DONE' && 'active'}`} />
      </div>
    </div>
  )
}

export default Task
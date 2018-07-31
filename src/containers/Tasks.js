import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Task from '../components/task'

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
        <h1 className="tasks-title">To Do List</h1>
        <TransitionGroup className="tasks-list">
          {
            this.props.tasks.map(task => (
              <CSSTransition key={task.id} timeout={500} classNames="fade">
                <Task {...task} />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = ({ tasks }) => {
  return {
    tasks,
  }
}

export default connect(mapStateToProps)(Tasks)
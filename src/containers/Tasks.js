import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { updateTask } from '../actions'
import Task from '../components/task'

class Tasks extends Component {
  render() {
    const { updateTask, match: { params: { filter }}} = this.props;

    return (
      <div className="tasks">
        <h1 className="tasks-title">{filter ? filter === 'todo' ? 'TO DO' : filter : 'Task\'s' } List</h1>
        <TransitionGroup className="tasks-list">
          {
            this.props.tasks.map(task => (
              <CSSTransition key={task.id} timeout={500} classNames="fade">
                <Task {...task} updateTask={updateTask} />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = ({ tasks }, ownProps) => {
  let { match: { params: { filter }}} = ownProps;
  filter = filter ? filter === 'todo' ? 'TO_DO' : filter.toUpperCase() : null;
  const filteredTasks = filter ? tasks.filter(task => task.filter === filter) : tasks
  return {
    tasks: filteredTasks,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateTask }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tasks)
)
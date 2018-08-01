import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeTask } from '../actions'
import Button from '../components/button'

class RemoveTask extends Component {
  closeRemoveTask = () => {
    this.props.history.goBack()  
  }

  removeTask = () => {
    const { removeTask, match: { params: { id }}} = this.props;
    removeTask(id)
    this.closeRemoveTask()
  }

  render () {
    const { task } = this.props;
    
    return (
      <div className="modal">
        <div className="modal-container">
          <h2 className="modal-title">You're deleting <strong>{task && task.name}</strong> task, are you sure</h2>
          <div className="form-group form-group-actions">
            <Button primary handleClick={() => this.removeTask()}>Yes</Button>
            <Button error handleClick={this.closeRemoveTask}>No</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { id }}} = ownProps;
  const task = state.tasks.find(task => task.id === id)
  
  return {
    task,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeTask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveTask)
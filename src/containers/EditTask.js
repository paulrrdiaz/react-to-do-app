import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import Button from '../components/button'
import { updateTask } from '../actions'

class EditTask extends Component {
  state = {
    task: this.props.task
  }

  handleChange = e => {
    const { task } = this.state;
    const taskUpdated = Object.assign(task, {[e.target.name]: e.target.value})
    this.setState({
      task: taskUpdated,
    })
  }

  closeEdittask = () => {
    this.props.history.goBack()  
  }

  onSubmit = e => {
    const { task } = this.state;
    e.preventDefault();
    this.props.updateTask(task.id, task)
    this.closeEdittask()
  }

  render() {
    const { task } = this.state;
    task.description = task.description ? task.description : '';

    return (
      <div className="modal">
        <div className="modal-container">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input 
                className="form-input"
                type="text"
                placeholder="Add to do"
                name="name"
                value={task.name}
                onChange={e => this.handleChange(e)} />
            </div>
            <div className="form-group">
              <textarea 
                className="form-textarea"
                type="text"
                placeholder="Add details"
                name="description"
                value={task.description}
                onChange={e => this.handleChange(e)} />
            </div>
            <div className="form-group form-group-actions">
              <Button primary submit>Update</Button>
              <Button error handleClick={this.closeEdittask}>Close</Button>
            </div>
          </form>
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
  return bindActionCreators({ updateTask }, dispatch)
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditTask)
)
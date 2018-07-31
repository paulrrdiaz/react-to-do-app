import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addTask } from '../actions'

class Sidebar extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.taskName.value);
    this.taskName.value = '';
  }

  render() {
    console.log(this.props.match);
    
    return (
      <div className="sidebar">
        <form className="sidebar-form" onSubmit={this.onSubmit}>
          <div className="form-group-icon">
            <input 
              className="form-input"
              type="text"
              placeholder="Add to do"
              ref={node => this.taskName = node} />
            <i onClick={this.onSubmit} className="icon fas fa-plus-circle" />
          </div>
        </form>
        <div className="filters">
          <NavLink className="filter filter-todo" activeClassName="active" to="/todo">
            <i className="icon fas fa-dot-circle" />
            To Do
          </NavLink>
          <NavLink className="filter filter-doing" activeClassName="active" to="/doing">
            <i className="icon fas fa-dot-circle" />
            Doing
          </NavLink>
          <NavLink className="filter filter-done" activeClassName="active" to="/done">
            <i className="icon fas fa-dot-circle" />
            Done
          </NavLink>
        </div>
      </div>
    )
  }
}

export default connect(null, { addTask })(Sidebar)
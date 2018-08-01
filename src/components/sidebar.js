import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { addTask } from '../actions'

class Sidebar extends Component {
  onSubmit = e => {
    e.preventDefault();
    const { match: { params: { filter }}} = this.props;
    this.props.addTask(this.taskName.value, filter);
    this.taskName.value = '';
  }

  render() {
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
          <NavLink
            className="filter"
            exact
            activeClassName="active"
            to="/">
            <i className="icon fas fa-dot-circle" />
            All
          </NavLink>
          <NavLink
            className="filter filter-todo"
            activeClassName="active"
            to="/todo">
            <i className="icon fas fa-dot-circle" />
            To Do
          </NavLink>
          <NavLink
            className="filter filter-doing"
            activeClassName="active" to="/doing">
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

export default withRouter(connect(null, { addTask })(Sidebar))
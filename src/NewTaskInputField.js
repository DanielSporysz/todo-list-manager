import React, { Component } from "react";

export default class NewTaskInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="NewTaskInputField" align="left">
        <input
          type="text"
          id="NewTaskInputField"
          value={this.state.value}
          onKeyPress={e => this.createNewTask(e)}
          onChange={e => this.updateNewTaskInputField(e.target.value)}
        />
      </div>
    );
  }

  updateNewTaskInputField(newVal) {
    this.setState({ value: newVal });
  }

  createNewTask(e) {
    if (e.key === "Enter") {
      this.props.parentCallback(this.state.value);
      // Clear the field after creating the Task
      this.updateNewTaskInputField("");
    }
  }
}

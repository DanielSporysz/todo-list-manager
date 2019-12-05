import React, { Component } from "react";

export default class TaskField extends Component {
  render() {
    return (
      <div onClick={this.updateReadiness.bind(this)}>
        <input
          name="isReady"
          type="checkbox"
          checked={this.props.ready}
        />
        {this.props.message}
      </div>
    );
  }

  updateReadiness() {
    this.props.parentCallback(this.props.id);
  }
}

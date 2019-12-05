import React, { Component } from "react";
import "./App.css";
import NewTaskInputField from "./NewTaskInputField";
import TaskField from "./TaskField.js";
import Task from "./Task.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      tasksCount: 0
    };
  }

  pushNewTask = newTaskDescription => {
    var id = this.state.tasksCount;
    this.setState({
      tasks: [...this.state.tasks, new Task(newTaskDescription, id)],
      tasksCount: id + 1
    });
  };

  changeTaskReadiness = id => {
    var updatedTasks = this.state.tasks;
    updatedTasks.forEach(task => {
      if (task.id === id) {
        task.ready = !task.ready;
      }
    });

    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <div className="App">
        <h1> React state todoMVC: </h1>

        <NewTaskInputField parentCallback={this.pushNewTask} />

        <div name="todoPlaceholder" align="left">
          <b>Todo2:</b>
          <ol>
            {this.state.tasks
              .filter(function(task) {
                return task.ready === false;
              })
              .map(task => (
                <TaskField
                  parentCallback={this.changeTaskReadiness}
                  message={task.message}
                  ready={task.ready}
                  id={task.id}
                  key={task.id}
                />
              ))}
          </ol>
        </div>

        <div name="donePlaceholder" align="left">
          <b>Done:</b>
          <ol>
            {this.state.tasks
              .filter(function(task) {
                return task.ready === true;
              })
              .map(task => (
                <TaskField
                  parentCallback={this.changeTaskReadiness}
                  message={task.message}
                  ready={task.ready}
                  id={task.id}
                  key={task.id}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

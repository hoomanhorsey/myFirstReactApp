/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <>Total Todos: {this.props.tasksNumber}</>;
  }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demon tasks", "As an example"],
      inputVal: "",
      todoEdit: "",
      editTarget: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }
  handleDelete(todoToDelete) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo !== todoToDelete),
    }));
  }

  handleEditChange(e) {
    this.setState((state) => ({
      ...state,
      todoEdit: e.target.value,
    }));
  }

  handleEdit(todoToEdit) {
    this.setState((state) => ({
      ...state,
      todoEdit: todoToEdit,
      editTarget: todoToEdit,
    }));
  }
  handleResubmit(e, oldTodo) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo === oldTodo ? state.todoEdit : todo
      ),
      todoEdit: "",
      editTarget: null,
    }));
  }
  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {this.state.editTarget === todo ? (
                <form onSubmit={(e) => this.handleResubmit(e, todo)}>
                  {" "}
                  <input
                    type="text"
                    name="toEdit"
                    value={this.state.todoEdit}
                    onChange={this.handleEditChange}
                  />
                  <button type="submit">Resubmit</button>
                </form>
              ) : (
                <>
                  {todo}
                  <button value={todo} onClick={() => this.handleEdit(todo)}>
                    Edit
                  </button>
                  <button value={todo} onClick={() => this.handleDelete(todo)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        <h4>How many tasks!!!</h4>
        <Count tasksNumber={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;

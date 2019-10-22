import React, { Component } from "react";
import styles from "./TodoList.module.css";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";

import classNames from "classnames";
import {
  addTodo,
  toggleTodo,
  setFilter,
  undo
} from "../actionCreator/todoActions";
import { removeTodo, editTodo } from "../actionCreator/todoActions";
import { getFilterTodo, getHistory } from "../selectors/todoSelectors";

class TodoList extends Component {
  state = {
    inputValue: "",
    num: 0
  };

  setFilter = filterName => {
    this.props.setFilter(filterName);
  };

  handleAddTodoPress = () => {
    if (this.state.inputValue) {
      this.props.addTodo(this.state.inputValue);
      this.setState({
        inputValue: ""
      });
      console.log(this.props);
    }
  };
  handelUndo = () => {
    this.props.undo();
  };

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div style={{ margin: "20px auto" }}>
        <h1>Todo list</h1>
        <ul className={styles.tasks}>
          {this.props.todos.map((todo, index) => (
            <TodoListItem
              {...todo}
              key={todo.id}
              onToggle={() => this.props.toggleTodo(todo.id)}
              onDelete={() => this.props.removeTodo(todo.id)}
              onEdit={name => this.props.editTodo(todo.id, name)}
            />
          ))}
        </ul>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          type="text"
        />
        <button onClick={this.handleAddTodoPress} className={styles.button}>
          Add Todo
        </button>
        <button
          disabled={!this.props.isUndoable}
          onClick={this.handelUndo}
          className={styles.button}
        >
          undo
        </button>
        <div>
          <p style={{ marginBottom: 0 }}>Filters</p>
          <button
            onClick={() => this.setFilter("All")}
            className={classNames(styles.button, {
              [styles.activeButton]: this.state.filter === "All"
            })}
          >
            All
          </button>
          <button
            onClick={() => this.setFilter("Dones")}
            className={classNames(styles.button, {
              [styles.activeButton]: this.state.filter === "Dones"
            })}
          >
            Dones
          </button>
          <button
            onClick={() => this.setFilter("Un-Dones")}
            className={classNames(styles.button, {
              [styles.activeButton]: this.state.filter === "Un-Dones"
            })}
          >
            Un-Dones
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    todos: getFilterTodo(state),
    isUndoable: !!getHistory(state).length
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addTodo: value => dispatch(addTodo(value)),
    toggleTodo: todoId => dispatch(toggleTodo(todoId)),
    removeTodo: todoId => dispatch(removeTodo(todoId)),
    editTodo: (todoId, name) => dispatch(editTodo(todoId, name)),
    undo: () => dispatch(undo()),
    setFilter: filterName => dispatch(setFilter(filterName))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  SET_FILTER
} from "../redux/actionType";
import { UNDO } from "../redux/actionType";

export let addTodo = value => ({
  type: ADD_TODO,
  payload: { name: value }
});

export let toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  payload: { id: todoId }
});

export let removeTodo = todoId => ({
  type: REMOVE_TODO,
  payload: { id: todoId }
});

export let editTodo = (todoId, name) => ({
  type: EDIT_TODO,
  payload: { id: todoId, name }
});
export let undo = () => ({
  type: UNDO
});

export let setFilter = filterName => ({
  type: SET_FILTER,
  payload: { filterName }
});

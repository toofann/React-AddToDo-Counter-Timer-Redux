let getTodos = state => state.todo.todosList;
export let getHistory = state => state.todo.history;
let getFilter = state => state.todo.filter;

export let getFilterTodo = state => {
  let todos = getTodos(state);
  switch (getFilter(state)) {
    case "All":
      return todos;
    case "Dones":
      return todos.filter(t => t.done);
    case "Un-Dones":
      return todos.filter(t => !t.done);
  }

  return { todos };
};

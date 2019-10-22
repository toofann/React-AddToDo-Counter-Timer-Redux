import React from "react";
import store from "./myToDo/redux/index";
import TodoList from "./myToDo/reduxToDo/TodoList";
import { Provider } from "react-redux";
import Cunter from "./myToDo/cunterRedux/cunter";
import Timer from "./myToDo/timerRedux/timer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Timer />
        <Cunter />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;

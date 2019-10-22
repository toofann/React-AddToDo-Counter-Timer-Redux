import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import cunterReduser from "./cunterReduser";
import timerReduser from "./timerReduser";

let rootReducer = combineReducers({
  todo: todoReducer,
  cunter: cunterReduser,
  timer: timerReduser
});
export default rootReducer;

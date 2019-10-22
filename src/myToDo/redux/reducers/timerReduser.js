import { START_TIMER, RESET_TIMER } from "../actionType";

export default (state = 0, action) => {
  switch (action.type) {
    case START_TIMER:
      return state + 1;
    case RESET_TIMER:
      return (state = 0);
    default:
      return state;
  }
};

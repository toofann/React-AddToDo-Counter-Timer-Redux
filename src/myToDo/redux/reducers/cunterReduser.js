import { DECRIMENT, INCRIMENT } from "../actionType";

export default (state = 0, action) => {
  switch (action.type) {
    case INCRIMENT:
      return state + 1;
    case DECRIMENT:
      return Math.max(0, state - 1);
    default:
      return state;
  }
};

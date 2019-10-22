import { START_TIMER, RESET_TIMER } from "../redux/actionType";

export let startTimer = () => ({ type: START_TIMER });
export let resetTimer = () => ({ type: RESET_TIMER });

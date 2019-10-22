import { DECRIMENT, INCRIMENT } from "../redux/actionType";

export let increment = () => ({ type: INCRIMENT });
export let decriment = () => ({ type: DECRIMENT });

import { set_counter } from "../actions/actions-types";
import { TIMER } from "../constants/actions";

export default store => next => action => {
    const { count } = store.getState();
    const returnAction = next(action);



    return returnAction;
}
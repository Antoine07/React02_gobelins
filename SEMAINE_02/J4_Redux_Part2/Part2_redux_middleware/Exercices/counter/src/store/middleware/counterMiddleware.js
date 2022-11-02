import { set_counter } from "../actions/actions-types";
import { TIMER } from "../constants/actions";

export default store => next => action => {
    const { count } = store.getState().counter;
    console.log(action)
    const { type } = action ;

    if(type === 'COUNTER'){
        store.dispatch( { type : 'RESET'})
    }

    console.log("ACTION DANS MON MIDDLEWARE BEFORE", count)

    const returnAction = next(action);
    const { count:count2 } = store.getState().counter;


    console.log("ACTION DANS MON MIDDLEWARE AFTER", count2)


    return returnAction;
}
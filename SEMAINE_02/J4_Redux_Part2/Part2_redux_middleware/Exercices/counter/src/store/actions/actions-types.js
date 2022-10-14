import { COUNTER, TIMER  } from '../constants/actions';

// Cette action est synchrone
export const  set_counter = payload => {
  return {
    type: COUNTER, payload
  };
}

// Cette action est asynchrone (...)
export const start_counter = (step) => {
    let interval = null;
   return dispatch => {
        clearInterval(interval);
        interval =setInterval(() => {
        dispatch(set_counter(step)); 
        }, TIMER);
  };
}
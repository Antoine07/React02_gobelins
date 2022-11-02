import {SET_LOG} from '../constants/actions';

export default store => next => action => {
    const state = store.getState(); 

    // console.log("before", state);

    const returnAction = next(action);

    // console.log("after", store.getState());

    const { count } = store.getState().message;

    if(count >  0 && count  % 10 === 0 && action.type !== SET_LOG){
        // renomage de la constante pour éviter la collision des noms des constantes
        const { count : countLog } = store.getState().log;

        store.dispatch({ type : SET_LOG, date : (new Date()).toString(), count : countLog + 1 })
    }
    
    return returnAction ;
}
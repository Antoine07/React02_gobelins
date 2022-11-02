
export default store => next => action => {
    const state = store.getState(); 
    const returnAction = next(action);
    
    return returnAction ;
}
import { combineReducers } from 'redux';
// reducers 
import reducerMessage from './message';

export default combineReducers({
    m : reducerMessage
});
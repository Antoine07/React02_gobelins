import { ADD_MESSAGE , SET_COUNT, SET_MESSAGE } from '../constants/actions';

export const addMessage = payload => {
    return {
        type: ADD_MESSAGE, payload
    }
};

export const setMessage = payload => {
    return {
        type: SET_MESSAGE, payload
    }
};

export const set_count = () => {
    return {
        type: SET_COUNT
    }
};
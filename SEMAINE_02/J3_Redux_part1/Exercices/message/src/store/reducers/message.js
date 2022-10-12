import { ADD_MESSAGE, SET_MESSAGE } from '../constants/actions';

// SOURCE DE VERITE
const initialState = {
    messages : [
        "Hello World !",
        "Bonjour tout le monde !"
    ],
    message : ''
}

const reducer = (state=initialState, action = {}) => {
    switch(action.type){


        default:
            return state;
    }
}

export default reducer;
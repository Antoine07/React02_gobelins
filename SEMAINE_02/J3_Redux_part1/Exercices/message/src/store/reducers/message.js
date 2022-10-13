import { ADD_MESSAGE, SET_MESSAGE, SET_COUNT } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    messages: [
        "Hello World !",
        "Bonjour tout le monde !"
    ],
    message: '',
    count: 0
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case SET_MESSAGE:

            // nouvelle référence des messages un nouveau tableau 
            const messages = [...state.messages]

            messages.push(action.payload);

            console.log(initialState);

            return {
                ...state,
                messages
            }

        case SET_COUNT:

            return {
                ...state, // une copie peu profonde 
                count: state.count + 1 // on modifie une clé de notre nouveau tableau
            }

        default:
            return state;
    }
}

export default reducer;
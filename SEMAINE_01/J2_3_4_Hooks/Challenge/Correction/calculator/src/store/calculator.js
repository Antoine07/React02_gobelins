
export const initialeState = {
    number1: "",
    number2: "",
    message: "",
    total: 0
}

export const ADD = "ADD";
export const MULT = "MULT";
export const SET_NUMBER = "SET_NUMBER";
export const RESET = "RESET";
export const MESSAGE = "MESSAGE";

function isNumeric(number1, number2) {
    if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2))) return false;

    return true;
}

export function reducer(state, action) {
    let number1, number2;
    switch (action.type) {

        case ADD:
            [number1, number2] = [state.number1, state.number2];

            if (isNumeric(number1, number2) === false)

                return {
                    ...state,
                    message: `L'une des valeurs ${number1} ou ${number2} n'est pas un nombre `
                }

            return {
                ...state,
                total: parseFloat(state.number1) + parseFloat(state.number2)
            };
        case MULT:
            [number1, number2] = [state.number1, state.number2]

            if (isNumeric(number1, number2) === false)

                return {
                    ...state,
                    message: `L'une des valeurs ${number1} ou ${number2} n'est pas un nombre `
                }

            return {
                ...state,
                total: parseFloat(state.number1) * parseFloat(state.number2)
            };

        case SET_NUMBER:
            const { name, value } = action;
            console.log(action);
            return {
                ...state,
                [name]: value
            }

        case RESET:

            return {
                ...state,
                ...initialeState
            }

        case MESSAGE:
            const { message } = action;
            return {
                ...state,
                message
            }

        default:
            return state;
    }

}


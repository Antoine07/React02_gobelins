import { COUNTER } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    count: 0,
    active :false
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case COUNTER:
            const step = action.payload;

            return {
                ...state,
                count: state.count + step,
                active : true
            }

        default:
            return state;
    }
}

export default reducer;
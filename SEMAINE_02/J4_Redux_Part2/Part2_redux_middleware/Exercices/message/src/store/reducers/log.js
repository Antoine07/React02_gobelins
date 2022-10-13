import { SET_LOG } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
   dates : [],
    count: 0
}

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case SET_LOG:
            const { date } = action ;
            const dates = [ ...state.dates ];
            dates.push(date);

            console.log(action, "reducer log")

            return {
                ...state, // une copie peu profonde 
                count: state.count + 1, // on modifie une clé de notre nouveau tableau
                dates
            }

        default:
            return state;
    }
}

export default reducer;
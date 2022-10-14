
import { configureStore, createSlice } from '@reduxjs/toolkit';
const usersMongoose = {
    email: 'alan@alan.fr', password: '123'
}

/**
 * Regroupe (synthèse) de REDUX, ce que l'on fait habituellement est agrégé dans createSlice
 */
const user = createSlice({
    name: 'user',
    initialState: { email: '', password: '', isLogin: false, count: 0 },
    reducers: {
        checkUser: state => {
            const { email, password } = usersMongoose;
            if (email === state.email && password == state.password) {
                state.isLogin = true;

                return;
            }

            state.isLogin = false;
        },
        setLogin: (state, action) => {
            const { value, name } = action.payload;
            state[name] = value;
        },
        logout : state =>{
            state.isLogin = false;
        }
    },
    extraReducers: {

    }
});

// const yam = createSlice({
//     name : 'yam'
// });

export const store = configureStore({
    reducer: {
        user: user.reducer,
    },
    middleware: [],
});

export const { checkUser, setLogin, logout } = user.actions;
import { createSlice, configureStore } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

// les premiers dans l'intervalle 1 à 10
const Primes = [2, 3, 5, 7];

export enum Parity {
    ODD = "odd",
    EVEN = "even",
    NO = "no"
}

export interface Increment {
    number: number
    parity: Parity
    step: number
}

export interface Star {
    stars: string[],
    number: number | null,
    numbers: number[]
}


const starSlice = createSlice({
    name: 'star',
    initialState: {
        stars: [],
        number: null,
        numbers: []
    } as Star,
    reducers: {
        add: (state, action: PayloadAction<{ number: number }>) => {
            const { number } = action.payload;
            state.stars.push('*');
            state.numbers.push(number)
        },
    },
})

const initialState: Increment = {
    number: 0,
    parity: Parity.NO,
    step: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: {
            reducer: (state, action: PayloadAction<Increment>) => {
                const { number, parity, step } = action.payload;

                state.number += number;
                state.parity = parity;
                state.step = step;
            },
            // traitement sur le payload avant de passer dans l'action du reducer counter/increment ci-dessus
            prepare: () => {
                const alea = Math.floor(Math.random() * 10) + 1;

                return {
                    payload: {
                        number: alea,
                        parity: (alea % 2) ?
                            Parity.EVEN : Parity.ODD,
                        step: alea,
                    }
                }
            }
        }
    }
});

const store = configureStore({
    reducer: {
        c: counterSlice.reducer,
        s: starSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        store => next => action => {
            const { step } = store.getState().c

            if (action.type === 'counter/increment') {

                if (true) {
                    store.dispatch(starSlice.actions.add({ number: step }))
                }
            }

            // permet d'effectuer précisémment les actions dans le reducer si on ne fait pas ça rien ne se passe ...
            const returnAction = next(action);

            return returnAction; // TODO pourquoi faut il retourner les actions ??? 
        },

        // on peut chainer les middlewares ... 
        store => next => action => {

            console.log("action qui suivent" , action)
            const returnAction = next(action);

            return returnAction;
        }
    ]
    ),
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const { increment } = counterSlice.actions

export default store;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import message from './store/reducers/message';
import log from './store/reducers/log';
import logMiddleware from './store/middleware/log';

const incrementBy = createAction('incrementBy');
const decrementBy = createAction('decrementBy');

const counter = createSlice({
  name: 'counter',
  initialState: 100,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    multiply: {
      reducer: (state, action) => state * action.payload,
      prepare: (value) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
    },
  },
  // "builder callback API", recommended for TypeScript users
  extraReducers: (builder) => {
    builder.addCase(incrementBy, (state, action) => {
      return state + action.payload
    })
    builder.addCase(decrementBy, (state, action) => {
      return state - action.payload
    })
  },
});

const user = createSlice({
  name: 'user',
  initialState: { name: '', age: 20 },
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload // mutate the state all you want with immer
    },
  },
  // "map object API"
  extraReducers: {
    [counter.actions.increment]: (
      state,
      action /* action will be inferred as "any", as the map notation does not contain type information */
    ) => {
      state.age += 1
    },
  },
})

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ token: '151617' }), 250);
  });

const login = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    emailVerif: 'alan@alan.fr',
    passwordVerif: '123',
    isLogin: false,
    token: null
  },
  reducers: {
    checkLogin:  (state, action) => {
      const { email, password } = action;
      if (state.email === state.emailVerif && state.password === state.passwordVerif) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
    setLogin: (state, action) => {
      const { email, password} = action.payload;
      if(email)
      state.email = email;
      if(password)
        state.password = password;
    }
  },
  // "map object API"
  extraReducers: {
    [counter.actions.increment]: (
      state,
      action /* action will be inferred as "any", as the map notation does not contain type information */
    ) => {
      state.age += 1
    },
  },
})

const store = configureStore({
  reducer: {
    message,
    log,
    counter: counter.reducer,
    user: user.reducer,
    login : login.reducer
  },
  middleware: [logMiddleware],
});

export const { setUserName } = user.actions;
export const { increment, multiply, decrement } = counter.actions;
export const { checkLogin, setLogin } = login.actions;

const root = ReactDOM.createRoot(document.getElementById('root'));
// Contextualise le store pour l'arbre React à l'aide du Provider 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

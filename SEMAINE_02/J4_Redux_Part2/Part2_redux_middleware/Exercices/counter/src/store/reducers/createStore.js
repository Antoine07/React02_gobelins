import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: {
      counter
    },
    middleware: [thunk],
  });

  export default store;
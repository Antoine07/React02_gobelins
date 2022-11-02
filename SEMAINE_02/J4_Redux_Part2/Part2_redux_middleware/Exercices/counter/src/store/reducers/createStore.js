import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import thunk from 'redux-thunk';

import counterMiddleware from '../middleware/counterMiddleware';

const store = configureStore({
    reducer: {
      counter
    },
    middleware: [thunk, counterMiddleware],
  });

  export default store;
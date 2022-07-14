import { createStore } from 'redux';

import { rootReducer as appReducer } from 'reducers/index';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

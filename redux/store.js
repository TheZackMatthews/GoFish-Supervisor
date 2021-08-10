import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

let store;

function initStore(initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}

export const initializeStore = (preloadedState) => {
  let newStore = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    newStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return newStore;
  // Create the store once in the client
  if (!store) store = newStore;

  return newStore;
};

export function useStore(initialState) {
  const returnStore = useMemo(() => initializeStore(initialState), [initialState]);
  return returnStore;
}

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { textReducer } from './reducers/text';

export type AppState = ReturnType<typeof textReducer>;

export const store = createStore(textReducer, composeWithDevTools());
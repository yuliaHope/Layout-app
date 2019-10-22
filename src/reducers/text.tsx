import {
  TextActionTypes,
  UPDATE_TEXT,
  GET_TEXT
} from '../types'

const initialState: string = '';

export function textReducer(
  state = initialState,
  action: TextActionTypes
): string {
  switch (action.type) {
    case UPDATE_TEXT: {
      return action.payload;
    }
    default:
      return state
  }
}
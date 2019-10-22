import { UPDATE_TEXT, GET_TEXT, TextActionTypes } from '../types';

export function updateText(newText: string): TextActionTypes {
  return {
    type: UPDATE_TEXT,
    payload: newText,
  }
}

export function getText(): TextActionTypes {
  return {
    type: GET_TEXT,
  }
}
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const GET_TEXT = 'GET_TEXT';

interface UpdateTextAction {
  type: typeof UPDATE_TEXT,
  payload: string,
}

interface GetTextAction {
  type: typeof GET_TEXT,
}

export type TextActionTypes = UpdateTextAction | GetTextAction;
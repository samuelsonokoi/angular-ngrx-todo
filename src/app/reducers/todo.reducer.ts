import { TodoActionTypes } from '../shared/enums/todo-action-types.enum';
import { ITodo } from '../models/todo';
import { ActionParent } from '../actions/todo-actions';

export const initial_state: ITodo[] = [
  { title: 'First Todo' },
  { title: 'Second Todo' },
  { title: 'Third Todo' },
];

export function TodoReducer(state = initial_state, action: ActionParent) {
  switch (action.type) {
    case TodoActionTypes.Add:
      return [...state, action.payload];
    case TodoActionTypes.Remove:
      return state.filter((todo, index) => index !== action.payload);
    default:
      return state;
  }
}

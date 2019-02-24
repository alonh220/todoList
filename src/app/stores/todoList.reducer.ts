import { Action } from '@ngrx/store';
import { ActionTypes } from './todoList.actions';
import TodoList from '../modules/todolist/TodoList';

export interface StateTodoList extends Action {
  type: string;
  lists: TodoList[];
  list: TodoList
}

export const initialState: StateTodoList = {
  type: '',
  lists: [],
  list: null
};

export function todoListReducer(state = initialState, action: StateTodoList) {
  switch (action.type) {
    case ActionTypes.UpdateList:
      state.lists = action.lists;
      return state;
    case ActionTypes.AddTodo:
      state.lists.push(action.list)
      return state;
    case ActionTypes.GetTodo:
      return state;
    default:
      return state;
    case ActionTypes.DeleteTodo:
      let index = state.lists.map((data) => data.id).indexOf(action.list.id);
      state.lists.splice(index, 1);
      return state;
  }
}


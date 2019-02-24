import { Action } from '@ngrx/store';
import TodoList from '../modules/todolist/TodoList';
export enum ActionTypes {
   UpdateList = '[TodoList Component] update',
   AddTodo = '[TodoList Component] add',
   GetTodo = '[TodoList Component] get',
   DeleteTodo = '[TodoList Component] delete'
}

export class UpdateList implements Action {
   readonly type = ActionTypes.UpdateList;
   lists: TodoList[]
   constructor(list) {
      this.lists = list;
   }
}

export class AddTodo implements Action {
   readonly type = ActionTypes.AddTodo;
   list: TodoList;

   constructor(list) {
      this.list = list;
   }
}

export class GetTodo implements Action {
   readonly type = ActionTypes.GetTodo;
   list: TodoList;
}

export class DeleteTodo implements Action {
   readonly type = ActionTypes.DeleteTodo;
   list: TodoList;
   constructor(list) {
      this.list = list;
   }
}


export type ActionsUnion = UpdateList | AddTodo | GetTodo | DeleteTodo;
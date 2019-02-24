import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { TodolistService } from '../../todolist.service';
import TodoList from '../../TodoList';
import { UpdateList, GetTodo } from 'src/app/stores/todoList.actions';
import { StateTodoList } from 'src/app/stores/todoList.reducer';
@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss']
})
export class TodoListContainerComponent implements OnInit {

  todoList$: Observable<TodoList[]>;;
  todoList
  constructor(
    private todolistService: TodolistService,
    private store: Store<{ todoList: { lists: TodoList[] } }>
  ) {
    this.todoList$ = store.pipe(select(state => { console.log(state); return state.todoList.lists; }));

  }
  ngOnInit() {

    this.getAllTodoList();
  }
  getAllTodoList(): void {
    this.todolistService.getAllTodoList()
      .subscribe(todoList => {
        this.todoList = todoList;
        this.store.dispatch(new UpdateList(todoList));
      });

  }





}




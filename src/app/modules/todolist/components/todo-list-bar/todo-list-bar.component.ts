import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import {TodolistService} from '../../todolist.service';
import TodoList from '../../TodoList';
import { UpdateList, AddTodo, GetTodo} from 'src/app/stores/todoList.actions';
@Component({
  selector: 'app-todo-list-bar',
  templateUrl: './todo-list-bar.component.html',
  styleUrls: ['./todo-list-bar.component.scss']
})
export class TodoListBarComponent implements OnInit {
  private searchTodo = new Subject<string>();
  todos$: Observable<TodoList[]>;
  constructor(
    private todolistService:TodolistService ,
    private store: Store<{ todoList: TodoList[]}>
    ) { }

  ngOnInit() {
    this.todos$ = this.searchTodo.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((todoName: string) =>  this.todolistService.search(todoName)),
    );

    this.todos$.subscribe(list => this.store.dispatch(new UpdateList(list)));
  }

  add(todoName:string){
    if(todoName.trim()){
    this.todolistService.addTodo({todo: todoName } as TodoList)
        .subscribe(todoList => {
          this.store.dispatch(new AddTodo(todoList[0]));
        });
      }
  }

  search(todoName:string): void{
    this.searchTodo.next(todoName);   
  }
  

}

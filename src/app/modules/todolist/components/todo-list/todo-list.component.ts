import { Component, OnInit, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import TodoList from '../../TodoList';
import {TodolistService} from '../../todolist.service';
import { DeleteTodo } from 'src/app/stores/todoList.actions';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoObj: TodoList
  constructor(
              private todolistService:TodolistService,
              private store: Store<{ todoList: {lists:TodoList[]} } >
  ) { }

  ngOnInit() {
  }

  deleteTodo(todolist: TodoList){
    this.todolistService.deleteTodo(todolist.id)
        .subscribe(retult => { this.store.dispatch(new DeleteTodo(todolist));});
   
  }
}

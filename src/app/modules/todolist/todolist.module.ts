import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListBarComponent } from './components/todo-list-bar/todo-list-bar.component';

@NgModule({
  declarations: [TodoListContainerComponent, TodoListComponent, TodoListBarComponent],
  imports: [
    CommonModule
  ]
})
export class TodolistModule { }

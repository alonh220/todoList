import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TodoListContainerComponent} from "./modules/todolist/components/todo-list-container/todo-list-container.component";

const routes: Routes = [
  { path: '', redirectTo: '/todoList', pathMatch: 'full' },
  { path: 'todoList', component: TodoListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

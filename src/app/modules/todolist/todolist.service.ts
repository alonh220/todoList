import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RestService} from 'src/app/shared/services/RestService';
import TodoList from './TodoList';

@Injectable({
  providedIn: 'root'
})
export class TodolistService extends RestService {

  private relativeUrl: string = "list";
  
  constructor(http:HttpClient) { 
    super(http);
  }

   getAllTodoList(): Observable<TodoList[]> {
    return this.get<any>(this.relativeUrl).pipe(
      map(res => res.data)
    );
  }

  addTodo(todo: TodoList): Observable<TodoList>{
    return this.post<any>(this.relativeUrl, todo).pipe(
      map(res => res.data)
    );
  }

  deleteTodo(id: Number): Observable<Boolean>{
    return this.delete<any>(this.relativeUrl+ `/${id}`).pipe(
     
    );
  }


  search(todo: string): Observable<TodoList[]>{
    if (!todo.trim()) {
      // if not search term, return empty hero ar5ray.
      return this.getAllTodoList();
    }else{
      return this.get<any>(this.relativeUrl+`/search/${todo}`).pipe(
        map(res => res.data)
      );
    }
  }
}
